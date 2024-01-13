const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const moment = require('moment-timezone');
const mongooseDelete = require('mongoose-delete');

const Course = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
  },
  { timestamps: true },
);
//Add plugin
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});
mongoose.plugin(slug);

// Override the toObject and toJSON methods to format non-timestamp date fields in the 'Asia/Ho_Chi_Minh' time zone
Course.options.toObject = Course.options.toJSON = {
  transform: function (doc, ret) {
    // Exclude createdAt and updatedAt from formatting
    // Format createdAt and updatedAt fields
    if (ret.createdAt) {
      ret.createdAt = moment(ret.createdAt).tz('Asia/Ho_Chi_Minh').format();
    }
    if (ret.updatedAt) {
      ret.updatedAt = moment(ret.updatedAt).tz('Asia/Ho_Chi_Minh').format();
    }
    // Format other date fields if needed
    // Example: ret.someDateField = moment(ret.someDateField).tz('Asia/Ho_Chi_Minh').format();

    return ret;
  },
};

module.exports = mongoose.model('Course', Course);
