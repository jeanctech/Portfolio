import Logotipo from '../public/Logotipo.png'
import '../styles/Header.css'

function Header() {
  return (
    <>
      <div className="header">
        <div className="head">
          <a href="" className="head-link">
            <img src={Logotipo} alt="" className="head-img" width={50}/>
          </a>
        </div>
        <div className="header-nav">
          <a href="" className="nav-link">Inicio</a>
          <a href="" className="nav-link">Acerca</a>
          <a href="" className="nav-link">Habilidades</a>
          <a href="" className="nav-link">Proyectos</a>
          <a href="" className="nav-link">Contactos</a>
        </div>
      </div>
    </>
  )
}

export default Header
