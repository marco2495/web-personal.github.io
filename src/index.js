import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import Navbar from './nav-bar-vertical';
import { RedNeuronal } from './red-neuronal';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Home() {
  return (
    <main className='z-1'>

      {/* Resto del contenido */}
      <Navbar/>
      {/* Contenido de RedNeuronal como fondo */}
      <RedNeuronal />
    </main>
  );
}

root.render(
  <Home/>
);


