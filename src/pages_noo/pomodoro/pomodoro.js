import React, { useState, useEffect } from 'react';
import "./pomodoro.css";
import logo from './imagens/noo.png';
import clock from './imagens/clock.png';
import fire from './imagens/fire.png';
import home from  './imagens/home.png';
import usuario from './imagens/usuario.png';

function Pomodoro() {
  const [intervalTime, setIntervalTime] = useState(10); 
  const [timeLeft, setTimeLeft] = useState(intervalTime * 60); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(intervalTime * 60);
  };

  const calculateBarWidth = () => {
    const percentage = (timeLeft / (intervalTime * 60)) * 100;
    return `${percentage}%`;
  };

  return (
    <div className="App">
      <header>
        <h2>Sexta-Feira, 22 de Dezembro</h2>
        <h1>Boa noite, Mateus!</h1>
      </header>

      <hr />

      <main>
        <section className="top">
          <div>
            <img src={logo} alt="Logo Nootropic" />
          </div>

          <div className="top-2">
            <h1>Pomodoro</h1>
            <p>Produtividade para conquistar seus objetivos.</p>
          </div>
        </section>

        <section className="principal">
          <section className="relogio">
            <div className="config">
              <p>Tempo dos Intervalos: <input type="number" value={intervalTime} onChange={(e) => setIntervalTime(parseInt(e.target.value, 10))} /> min</p>
            </div>

            <div className="temporizador">
              <div className="cronometro">
                <div className="barra" style={{ width: calculateBarWidth() }}></div>
              </div>
              <div className='tempo'>
                {`${Math.floor(timeLeft / 60).toString().padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`}
              </div>

              <div className="embaixo">
                {isRunning ? (
                  <button onClick={handlePause}>Pausar</button>
                ) : (
                  <button onClick={handleStart}>Iniciar</button>
                )}
                <button onClick={handleReset}>Resetar</button>
              </div>
            </div>
          </section>
        </section>

        <section className="bottom">
          <p>Pomodoro é uma técnica de gerenciamento de tempo que consiste em dividir o trabalho em blocos de tempo de 25 minutos, seguidos de pequenos intervalos.</p>
        </section>
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

export default Pomodoro;
