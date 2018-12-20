"use strict";

const msentitypascalCQRS = require("./msentitypascalCQRS")();
const msentitypascalES = require("./msentitypascalES")();

module.exports = {
  /**
   * @returns {HelloWorldCQRS}
   */
  msentitypascalCQRS,
  /**
   * @returns {HelloWorldES}
   */
  msentitypascalES
};
