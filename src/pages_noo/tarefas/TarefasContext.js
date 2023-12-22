import React, { createContext, useContext, useReducer } from 'react';

const TarefasContext = createContext();

export const TarefasProvider = ({ children }) => {
  const initialState = {
    tarefas: [],
  };

  const tarefasReducer = (state, action) => {
    switch (action.type) {
      case 'adicionar':
        return { tarefas: [...state.tarefas, { texto: action.payload, concluida: false }] };
      case 'remover':
        return { tarefas: state.tarefas.filter((_, index) => index !== action.payload) };
      case 'marcarConcluida':
        return {
          tarefas: state.tarefas.map((tarefa, index) => (index === action.payload ? { ...tarefa, concluida: !tarefa.concluida } : tarefa)),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(tarefasReducer, initialState);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
};

export const useTarefas = () => {
  const context = useContext(TarefasContext);
  if (!context) {
    throw new Error('useTarefas deve ser usado dentro de um TarefasProvider');
  }
  return context;
};
