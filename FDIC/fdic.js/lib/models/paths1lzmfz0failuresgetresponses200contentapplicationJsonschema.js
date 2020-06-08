/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Paths1lzmfz0failuresgetresponses200contentapplicationJsonschema.
 */
class Paths1lzmfz0failuresgetresponses200contentapplicationJsonschema {
  /**
   * Create a Paths1lzmfz0failuresgetresponses200contentapplicationJsonschema.
   * @property {object} [meta]
   * @property {number} [meta.total] Total query result count
   * @property {object} [meta.parameters] Query parameters supplied
   * @property {object} [meta.index]
   * @property {string} [meta.index.name] name of index used to retrieve data
   * @property {date} [meta.index.createTimestamp] date/time index was created
   * @property {array} [data]
   * @property {object} [totals]
   * @property {number} [totals.count] Total result count
   */
  constructor() {
  }

  /**
   * Defines the metadata of Paths1lzmfz0failuresgetresponses200contentapplicationJsonschema
   *
   * @returns {object} metadata of Paths1lzmfz0failuresgetresponses200contentapplicationJsonschema
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'paths·1lzmfz0·failures·get·responses·200·content·application-json·schema',
      type: {
        name: 'Composite',
        className: 'Paths1lzmfz0failuresgetresponses200contentapplicationJsonschema',
        modelProperties: {
          meta: {
            required: false,
            serializedName: 'meta',
            type: {
              name: 'Composite',
              className: 'Metadata'
            }
          },
          data: {
            required: false,
            serializedName: 'data',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          totals: {
            required: false,
            serializedName: 'totals',
            type: {
              name: 'Composite',
              className: 'Totals'
            }
          }
        }
      }
    };
  }
}

module.exports = Paths1lzmfz0failuresgetresponses200contentapplicationJsonschema;