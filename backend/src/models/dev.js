const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
});

//Esse primeiro nome é oq eu vai estar como nome da tabela no banco de dados
module.exports = mongoose.model('Dev', DevSchema);