import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavbarTailwind from './components/nav-bar';
const root = ReactDOM.createRoot(document.getElementById('root'));
const MiComponente = () => {
  return (
    <div>
      <NavbarTailwind />
      <App />
    </div>
  );
};
root.render(
  <MiComponente/>
);


