
import Navbar from "./components/organisms/NavBar";
import "./App.css"
function App() {


  return (
      <div className="App">
          <Navbar />

          <section className="hero">
              <h1>PokeDex</h1>
              <p>prueba</p>
          </section>

          <section className="content-section" id="inicio">
              <h2>Inicio</h2>
              <p>Contenido de la sección de inicio...</p>
          </section>

          <section className="content-section" id="servicios">
              <h2>Servicios</h2>
              <p>Contenido de la sección de servicios...</p>
          </section>

          <section className="content-section" id="nosotros">
              <h2>Nosotros</h2>
              <p>Contenido de la sección nosotros...</p>
          </section>

          <section className="content-section" id="contacto">
              <h2>Contacto</h2>
              <p>Contenido de la sección de contacto...</p>
          </section>
      </div>
  )
}

export default App
