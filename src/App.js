import React from 'react';
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { TarefasProvider } from './pages_noo/tarefas/TarefasContext';

function App() {
  return (
    <Router>
      <TarefasProvider>
        <Routes />
      </TarefasProvider>
    </Router>
  );
}

export default App;
