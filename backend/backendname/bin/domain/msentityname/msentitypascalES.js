'use strict'

const {} = require("rxjs");
const { tap, mergeMap, catchError, map, mapTo } = require('rxjs/operators');


/**
 * Singleton instance
 */
let instance;

class msentitypascalES {

    constructor() {
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