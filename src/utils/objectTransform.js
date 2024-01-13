// objectTransform.js
module.exports = {
  multipleMongoObject: function (mongooeseArray) {
    return mongooeseArray.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
