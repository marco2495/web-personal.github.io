import './App.css';
import background from './svg_para_el_fondo.svg';  // Asegúrate de proporcionar la ruta correcta
function App() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    opacity: "3%",
  }

  return (
    <div className="App" >
      <header className="App-header" style= {backgroundStyle}>
      </header>
    </div>
  );
}

export default App;
