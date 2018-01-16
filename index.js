'use strict'

const debug = require('debug')
const { name } = require('./package.json')

/**
 * Template class for a new module.
 * @type {RepoName}
 */
module.exports = class RepoName {

  /**
   * Create a new instance of the module.
   * @param {!Object} [options={}] - The options for the module.
   */
  constructor(options = {}) {
    this._debug = debug(name)
    this.options = options
  }

  /**
   * Placeholder method for the module.
   * @param {!string} [bar=baz] - Parameter to return, defaults to 'bar'.
   * @returns {string} - A string 'bar'.
   */
  foo(bar = 'bar') {
    return bar
  }

}
