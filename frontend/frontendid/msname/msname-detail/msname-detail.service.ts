import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { GatewayService } from '../../../../api/gateway.service';
import {
  msnamecamelCreatemsentitypascal
} from '../gql/msnamecamel.js';

@Injectable()
export class msnamecamelDetailService {


  constructor(private gateway: GatewayService) {

  }

  createmsnamecamelentitycamel$(generalInfo: any) {
    return this.gateway.apollo
      .mutate<any>({
        mutation: msnamecamelCreatemsentitypascal,
        variables: {
          ...generalInfo
        },
        fetchPolicy: 'network-only'
      });
  }

  getmsnamecamelentity$(entityId: string) {
    // return this.gateway.apollo.query<any>({
    //   query: msnamecamelentitycamel,
    //   variables: {
    //     filterInput: filterInput,
    //     paginationInput: paginatorInput
    //   },
    //   fetchPolicy: "network-only",
    //   errorPolicy: "all"
    // });
    // return of({ id: 'ju87-g5h6-7u8i-3d4f', generalInfo: { name: 'felipe' }, state: true });
    return of(null);
  }


}
