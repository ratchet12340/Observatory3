'use strict';

var express = require('express');
var controller = require('./static.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/email', controller.email);

module.exports = router;
