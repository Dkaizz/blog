const express = require('express');
const SiteController = require('../app/controllers/SiteController');
const siteRoute = express.Router();

siteRoute.use('/', SiteController.index);

module.exports = siteRoute;
