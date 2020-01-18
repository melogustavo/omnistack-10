const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsrray = require('../utils/parseStringAsArray')

// Os controllers geralmente tem cinco nomes que damos
//index (mostrar lista), show (mostrar 1), store (salvar), update, destroy (deletar)

module.exports = {

  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },



  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      //colocando o async la em cima e usando esse await vc faz com que a aplicacao espere receber a resposta para entao continuar

      // conceito de desestruturacao
      //se o name nao existir, ele vai criar com o valor em login
      const { name = login, avatar_url, bio } = apiResponse.data;

      //trim serve para retirar espacos antes e depois de uma string
      const techsArray = parseStringAsrray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        //como as outras, o nome da propriedade eh a mesma que a variavel, vc nao precisa fazer igual fez para a propriedade techs abaixo
        techs: techsArray,
        location
      })
    }



    //ADICIONAR UPDATE

    //ADICIONAR DELETE



    return response.json(dev);
  }
}