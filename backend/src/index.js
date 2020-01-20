const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://root:root@cluster0-xpbyl.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(cors())
//Serve para vc cadastrar dentro do express e ele entender requisições JSON... vc usa o use()para que ele esteja disponivel a todos os métodos
app.use(express.json());
app.use(routes);

server.listen(3333);











//Métodos get, post, put, delete

//tipos de parametros
//Query Params: geralmente eh nos gets... eh quando aparece no proprio url... usados para filtros, ordenação, oaginação etc...  request.query (para vc acessar essas informações)

//Route Params: usado nos métodos puts e delete, que eh quando vc quer mexer em um usuário e precisa enviar essa info... request.params  (para vc acessar essas informações)

//Body: utilizado mais dentro do post e do put... é o corpo aonde vai a informação... request.body (para vc acessar essas informações)

/* ANOTAÇÕES

app.get('/', (request, response) => {
  console.log(request.query);
  return response.json({ message: 'Hello OmniStack' });
});

app.delete('/users/:id', (request, response) => {
  console.log(request.params);
  return response.json({ message: 'Deletando' });
});

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Postando' });
});
*/