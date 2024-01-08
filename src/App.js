import React,{ useEffect, useState } from "react";
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((resultado) => resultado.json())
      .then((json) => {
        setNutri(json);
      });
    }

    loadApi();

  }, []);

  return (
    <div className="container">
      <h1>Requisição HTTP</h1>

      <header>

        <strong>React Nutri</strong>

      </header>

      {nutri.map( (item) => {
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"></img>
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <h4>Categoria: {item.categoria}</h4>
            <a className="botao">Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default App;
