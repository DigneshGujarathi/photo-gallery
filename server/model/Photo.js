const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
  photo: {
    type: Buffer
  },
  tag: {
    type: String
  }
});

PhotoSchema.methods.toJSON = function () {
  const result = this.toObject();
  delete result.photo;
  delete result.tag;
  return result;
};

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
