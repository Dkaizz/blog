const express = require('express');
const newRouter = express.Router();

const newsController = require('../app/controllers/NewsController');

newRouter.use('/', newsController.index);

module.exports = newRouter;
