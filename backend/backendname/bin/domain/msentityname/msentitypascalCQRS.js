"use strict";

const { of, interval } = require("rxjs");
const HelloWorldDA = require("../../data/HelloWorldDA");
const broker = require("../../tools/broker/BrokerFactory")();
const MATERIALIZED_VIEW_TOPIC = "materialized-view-updates";
const GraphqlResponseTools = require('../../tools/GraphqlResponseTools');
const RoleValidator = require("../../tools/RoleValidator");
const { take, mergeMap, catchError, map } = require('rxjs/operators');
const {
  CustomError,
  DefaultError
} = require("../../tools/customError");

/**
 * Singleton instance
 */
let instance;

class msentitypascalCQRS {
  constructor() {
    this.initHelloWorldEventGenerator();
  }




  //#endregion


}

/**
 * @returns {msentitypascalCQRS}
 */
module.exports = () => {
  if (!instance) {
    instance = new msentitypascalCQRS();
    console.log(`${instance.constructor.name} Singleton created`);
  }
  return instance;
};
