import React, { useState } from 'react';
import usuario from './imagens/usuario.png';
import home from './imagens/home.png';
import clock from './imagens/clock.png';
import fire from './imagens/fire.png';
import { useTarefas } from './TarefasContext';

function Tarefas() {
  const { state, dispatch } = useTarefas();
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      dispatch({ type: 'adicionar', payload: novaTarefa });
      setNovaTarefa('');
    }
  };

  const removerTarefa = (index) => {
    dispatch({ type: 'remover', payload: index });
  };

  const marcarConcluida = (index) => {
    dispatch({ type: 'marcarConcluida', payload: index });
  };

  return (
    <div className="App">
      <header>
        <h2>Sexta-Feira, 22 de Dezembro</h2>
        <h1>Boa noite, Mateus!</h1>
      </header>

      <hr />

      <main>
        <form onSubmit={(e) => { e.preventDefault(); adicionarTarefa(); }}>
          <input
            type="text"
            placeholder="Título da tarefa"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>

        {state.tarefas.map((tarefa, index) => (
          <div className={`tarefa ${tarefa.concluida ? 'concluida' : ''}`} key={index}>
            <input type="checkbox" checked={tarefa.concluida} onChange={() => marcarConcluida(index)} />
            <h1 style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>{tarefa.texto}</h1>
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </div>
        ))}
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

          <a href="/metodos">
            <li>
              <img src={fire} alt="Ícone" />
              Métodos
            </li>
          </a>
        </ul>
      </aside>
    </div>
  );
}

export default Tarefas;

