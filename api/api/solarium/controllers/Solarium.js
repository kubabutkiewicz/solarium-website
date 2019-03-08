'use strict';

/**
 * Solarium.js controller
 *
 * @description: A set of functions called "actions" for managing `Solarium`.
 */

module.exports = {

  /**
   * Retrieve solarium records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.solarium.search(ctx.query);
    } else {
      return strapi.services.solarium.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a solarium record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.solarium.fetch(ctx.params);
  },

  /**
   * Count solarium records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.solarium.count(ctx.query);
  },

  /**
   * Create a/an solarium record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.solarium.add(ctx.request.body);
  },

  /**
   * Update a/an solarium record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.solarium.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an solarium record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.solarium.remove(ctx.params);
  }
};
