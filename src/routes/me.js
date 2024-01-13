const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeControllers');

// newsControllers.index
router.get('/store/courses', meController.storeCourses);
router.get('/trash/courses', meController.trashCourse);

module.exports = router;
