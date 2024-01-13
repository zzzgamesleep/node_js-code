// SiteController.js

const Course = require('../models/Course');
const express = require('express');
const objectTransform = require('../../utils/objectTransform');

class courseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          course: objectTransform.mongooseToObject(course),
        });
      })
      .catch(next);
  }
  //Get /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }
  //Get /courses/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', {
          course: objectTransform.mongooseToObject(course),
        }),
      )
      .catch(next);
  }
  //Put/courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body, { new: true }) // { new: true } returns the updated document
      .then((course) => {
        if (!course) {
          return res.status(404).json({ message: 'Course not found' });
        }
        res.redirect('../me/store/courses');
      })
      .catch(next);
  }
  //Delete/courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  // Restore/course/:id
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  //Destroy/course/:id
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  //Post /courses/store

  store(req, res, next) {
    const formData = req.body;
    formData.image = `http://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    const course = new Course(formData);

    course
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {
        // Handle the error
      });
  }
}

module.exports = new courseController();
