import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { startWith,  tap, mergeMap } from 'rxjs/operators';
import { GatewayService } from '../../../../api/gateway.service';
import {
  msnamecamelCreatemsentitypascal,
  msnamecamelUpdatemsentitypascalGeneralInfo,
  msnamecamelUpdatemsentitypascalState,
  msnamecamelmsentitypascal,
  msnamecamelmsentitypascalUpdatedSubscription
} from '../gql/msnamecamel.js';

@Injectable()
export class msnamecamelDetailService {

  lastOperation = null;

  msentitycamel = null;

  constructor(private gateway: GatewayService) {

  }

  createOperation$(msentitycamel: any) {
    return of('CREATE').pipe(
      tap(operation => {
        this.lastOperation = operation;
        this.msentitycamel = msentitycamel;
      })
    );
  }

  updateOperation$(msentitycamel: any) {
    return of('UPDATE').pipe(
      tap(operation => {
        this.lastOperation = operation;
        this.msentitycamel = msentitycamel;
      })
    );
  }

  createmsnamecamelentitycamel$(msentitycamel: any) {
    return this.gateway.apollo
      .mutate<any>({
        mutation: msnamecamelCreatemsentitypascal,
        variables: {
          input: msentitycamel
        },
        errorPolicy: 'all'
      });
  }

  updatemsnamecamelentitycamelGeneralInfo$(id: String, msentitycamelGeneralInfo: any) {
    return this.updateOperation$(msentitycamelGeneralInfo)
    .pipe(
      mergeMap(() => {
        return this.gateway.apollo
        .mutate<any>({
          mutation: msnamecamelUpdatemsentitypascalGeneralInfo,
          variables: {
            id: id,
            input: msentitycamelGeneralInfo
          },
          errorPolicy: 'all'
        });
      })
    )
  }

  updatemsnamecamelentitycamelState$(id: String, newState: boolean) {
    return this.gateway.apollo
      .mutate<any>({
        mutation: msnamecamelUpdatemsentitypascalState,
        variables: {
          id: id,
          newState: newState
        },
        errorPolicy: 'all'
      });
  }

  getmsnamecamelentitycamel$(entityId: string) {
    return this.gateway.apollo.query<any>({
      query: msnamecamelmsentitypascal,
      variables: {
        id: entityId
      },
      fetchPolicy: "network-only",
      errorPolicy: "all"
    });
  }

/**
 * Event triggered when a business is created, updated or deleted.
 */
subscribemsnamecamelmsentitypascalUpdatedSubscription$(): Observable<any> {
  return this.gateway.apollo
  .subscribe({
    query: msnamecamelmsentitypascalUpdatedSubscription
  });
}

}
