const Course = require('../models/Course');
const express = require('express');
const objectTransform = require('../../utils/objectTransform');

class MeController {
  // [GET] /news
  storeCourses(req, res, next) {
    Course.find() // Change this line
      .then((courses) =>
        res.render('me/storeCourses', {
          courses: objectTransform.multipleMongoObject(courses),
        }),
      )
      .catch(next);
  }
  trashCourse(req, res, next) {
    Course.findWithDeleted({ deleted: true }) // Change this line
      .then((courses) =>
        res.render('me/trash-course', {
          courses: objectTransform.multipleMongoObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
