const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const userSchema = new Schema({
  googleId: String,

  Name: String,

  Email: String,

  Image: String,
});

moongoose.model('users', userSchema);
