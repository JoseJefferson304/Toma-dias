import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pomodoro from './pages_noo/pomodoro/pomodoro';
import Tarefas from './pages_noo/tarefas/tarefas';

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                 <Route path="/pomodoro" element={< Pomodoro />} />
                 <Route path="/tarefas" element={< Tarefas />} />
             </Routes>
        </div>
    );
}
export default MyRoutes;