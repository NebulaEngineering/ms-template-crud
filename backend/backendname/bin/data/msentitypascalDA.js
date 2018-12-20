"use strict";

let mongoDB = undefined;
//const mongoDB = require('./MongoDB')();
const CollectionName = "msentitypascal";
const { CustomError } = require("../tools/customError");
const { map } = require("rxjs/operators");
const { of, Observable } = require("rxjs");

class msentitypascalDA {
  static start$(mongoDbInstance) {
    return Observable.create(observer => {
      if (mongoDbInstance) {
        mongoDB = mongoDbInstance;
        observer.next("using given mongo instance");
      } else {
        mongoDB = require("./MongoDB").singleton();
        observer.next("using singleton system-wide mongo instance");
      }
      observer.complete();
    });
  }

  static getmsentitypascalList$(filter, pagination) {
    const collection = mongoDB.db.collection(COLLECTION_NAME);

    const query = {
      businessId: filter.businessId
    };

    if (filter.businessId) {
      query.businessId = filter.businessId;
    }

    if (filter.name) {
      query["generalInfo.name"] = filter.name;
    }

    if (filter.creationTimestamp) {
      query.creationTimestamp = filter.creationTimestamp;
    }

    if (filter.creatorUser) {
      query.creatorUser = { $regex: filter.creatorUser, $options: "i" };
    }

    if (filter.modifierUser) {
      query.modifierUser = { $regex: filter.modifierUser, $options: "i" };
    }

    const cursor = collection
      .find(query)
      .skip(pagination.count * pagination.page)
      .limit(pagination.count)
      .sort({ timestamp: pagination.sort });

    return mongoDB.extractAllFromMongoCursor$(cursor);
  }

  /**
   * get hello world data
   * @param {string} type
   */
  static getHelloWorld$(evt) {
    return of(`{sn: Hello World ${Date.now()}}`).pipe(
      map(val => ({ sn: val }))
    );
  }
}
/**
 * @returns {HelloWorldDA}
 */
module.exports = HelloWorldDA;
