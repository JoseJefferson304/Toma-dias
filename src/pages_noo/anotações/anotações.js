import React, { useState } from 'react';
import usuario from './imagens/usuario.png';
import home from './imagens/home.png';
import clock from './imagens/clock.png';
import fire from './imagens/fire.png';

function Anotacoes() {
  const [anotacoes, setAnotacoes] = useState([]);
  const [novaAnotacao, setNovaAnotacao] = useState('');
  const [edicaoIndex, setEdicaoIndex] = useState(null);

  const adicionarAnotacao = () => {
    if (novaAnotacao.trim() !== '') {
      if (edicaoIndex !== null) {
        // Editar anotação existente
        const novasAnotacoes = [...anotacoes];
        novasAnotacoes[edicaoIndex] = novaAnotacao;
        setAnotacoes(novasAnotacoes);
        setEdicaoIndex(null);
      } else {
        // Adicionar nova anotação
        setAnotacoes([...anotacoes, novaAnotacao]);
      }
      setNovaAnotacao('');
    }
  };

  const editarAnotacao = (index) => {
    setNovaAnotacao(anotacoes[index]);
    setEdicaoIndex(index);
  };

  const removerAnotacao = (index) => {
    const novasAnotacoes = [...anotacoes];
    novasAnotacoes.splice(index, 1);
    setAnotacoes(novasAnotacoes);
  };

  return (
    <div className="App">
      <header>
        <h2>Sexta-Feira, 22 de Dezembro</h2>
        <h1>Boa noite, Mateus!</h1>
      </header>

      <hr />

      <main>
        <form onSubmit={(e) => { e.preventDefault(); adicionarAnotacao(); }}>
          <textarea
            placeholder="Digite sua anotação aqui..."
            value={novaAnotacao}
            onChange={(e) => setNovaAnotacao(e.target.value)}
          />
          <button type="submit">{edicaoIndex !== null ? 'Editar' : 'Adicionar'}</button>
        </form>

        <div className="anotacoes-container">
          {anotacoes.map((anotacao, index) => (
            <div className="anotacao" key={index} style={{ width: '75%', height: '75%', marginRight: '20px' }}>
              <textarea
                value={anotacao}
                readOnly
                style={{ width: '100%', boxSizing: 'border-box' }}
              />
              <button onClick={() => editarAnotacao(index)}>Editar</button>
              <button onClick={() => removerAnotacao(index)}>Remover</button>
            </div>
          ))}
        </div>
      </main>

      <aside>
        <div>
          <img src={usuario} alt="Foto de perfil" />
        </div>

        <ul>
          <a href="/tarefas">
            <li>
              <img src={home} alt="Ícone" />
              Minhas tarefas
            </li>
          </a>

          <a href="/pomodoro">
            <li>
              <img src={clock} alt="Ícone" />
              Pomodoro
            </li>
          </a>

          <a href="/anotações">
            <li>
              <img src={fire} alt="Ícone" />
              Anotações
            </li>
          </a>
        </ul>
      </aside>
    </div>
  );
}

export default Anotacoes;
