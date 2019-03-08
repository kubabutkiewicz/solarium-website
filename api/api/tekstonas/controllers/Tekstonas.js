'use strict';

/**
 * Tekstonas.js controller
 *
 * @description: A set of functions called "actions" for managing `Tekstonas`.
 */

module.exports = {

  /**
   * Retrieve tekstonas records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tekstonas.search(ctx.query);
    } else {
      return strapi.services.tekstonas.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tekstonas record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.tekstonas.fetch(ctx.params);
  },

  /**
   * Count tekstonas records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tekstonas.count(ctx.query);
  },

  /**
   * Create a/an tekstonas record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tekstonas.add(ctx.request.body);
  },

  /**
   * Update a/an tekstonas record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tekstonas.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tekstonas record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tekstonas.remove(ctx.params);
  }
};
