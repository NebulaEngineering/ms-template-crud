'use strict'

const {} = require("rxjs");
const { tap, mergeMap, catchError, map, mapTo } = require('rxjs/operators');
const msentitypascalDA = require('../../data/msentitypascalDA');


/**
 * Singleton instance
 */
let instance;

class msentitypascalES {

    constructor() {
    }


    /**
     * Persists the business on the materialized view according to the received data from the event store.
     * @param {*} businessCreatedEvent business created event
     */
    handlemsentitypascalCreated$(msentitycamelCreatedEvent) {  
        const msentitycamel = msentitycamelCreatedEvent.data;
        return msentitypascalDA.createmsentitypascal$(msentitycamel)
        .mergeMap(result => {
            return broker.send$(MATERIALIZED_VIEW_TOPIC, `msentitypascalUpdatedSubscription`, result.ops[0])        
        });
    }

}



/**
 * @returns {msentitypascalES}
 */
module.exports = () => {
    if (!instance) {
        instance = new msentitypascalES();
        console.log(`${instance.constructor.name} Singleton created`);
    }
    return instance;
};