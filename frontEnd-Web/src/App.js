import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

import DevItem from './components/DevItem'
import DevForm from './components/DevForm'



function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }


  return (
    <div id="app">
      <aside>
        <strong className="">Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div >
  );
}

export default App;
















/*
ALGUNS COMENTARIOS INICIAIS FEITO NA AULA



import React, { useState } from 'react';

// Tudo no React eh baseado nos 3 conceitos abaixo:
// Componente: funcao que retorna algum conteudo html, css ou JS que ta relacionado a vizualizacao... o function App() eh um componente... primeira letra sempre maiuscula... padrao eh ter apenas um componente por arquivo
// Propriedade: Informacoes que um componente Pai passa para o componente filho
// Estado: Informacoes mantidas pelo componente (conceito sobre imutabilidade,  vc nunca altera a informacao, vai sempre instanciar uma nova)


function App() {
  const [counter, setCounter] = useState(0);

  function incrementarCounter() {
    setCounter(counter + 1);
  }

  return (
    //vc pode usar esse abrir e fechar para nao ter que colocar tudo dentro de uma div
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementarCounter}>Incrementar</button>
    </>
  );
}

export default App;

*/