import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo-sophie.png"
import "./Navbar.css"
import Auth from "../Auth";
import { useUser } from 'reactfire';

const NavBar = () => {
  const user = useUser();
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-ligth" >
        <NavLink className="navbar-brand" to="/"><img src={Logo} width="150" alt="SophieClothes" /> </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav padre">
            <li className="nav-item">
              <NavLink className="nav-link hijo1" to="/create">Agregar Stock</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hijo2" to="/Contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
        <div className="user">
          {user && <p>Usuario: {user.email} </p>}
          <Auth />
        </div>
      </nav>

    </div>
  )
}

export default NavBar
