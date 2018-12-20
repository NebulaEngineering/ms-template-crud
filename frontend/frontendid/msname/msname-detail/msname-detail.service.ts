import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import {
  startWith
} from "rxjs/operators";
import { GatewayService } from '../../../../api/gateway.service';
import {
  msnamecamelentitycamel,
  msnamecamelentitycamelSize,
  getHelloWorld,
  msnamecamelHelloWorldSubscription
} from '../gql/msnamecamel';

@Injectable()
export class msnamecamelDetailService {


  constructor(private gateway: GatewayService) {

  }

}
