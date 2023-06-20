'use strict';

/**
 * anti-spam-protection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::anti-spam-protection.anti-spam-protection');
