const express = require('express');
const NewsControllers = require('../app/controllers/NewsControllers');
const router = express.Router();
const siteController = require('../app/controllers/SiteControllers');

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
