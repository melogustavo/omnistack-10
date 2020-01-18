const Dev = require('../models/dev');
const parseStringAsrray = require('../utils/parseStringAsArray')


module.exports = {

  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsrray(techs);

    const devs = await Dev.find({
      techs: {
        //esse in eh um operador do mongo, existe uma lista de outros query operators que ele tem que vc pode usar
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          // 10000 metros = 10km
          $maxDistance: 10000,
        },
      },
    });
    return response.json({ devs });
  }


}