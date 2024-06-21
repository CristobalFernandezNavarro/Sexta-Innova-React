import React from 'react'
import logo from '../images/IconDiscord.png'

export const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-primary '>
        <a href= "#">
            <img src= {logo} height="100" alt="no encontrada"/>
        </a>
        <h1 color="white">Sexta innova</h1>
        <button type= "button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className= "collapse navbar-collapse" id= "navbarCollapse">
          <div className="navbar-nav ms-auto">
            <h4><a className= "nav-item nav-link" style={{color:"white"}} href= "">INICIO</a></h4>
            <h4><a className= "nav-item nav-link" style={{color:"white"}} href= "">MENU</a></h4>
            <h4><a className= "nav-item nav-link" style={{color:"white"}} href= "">ACERCA DE</a></h4>
            <h4><a className= "nav-item nav-link" style={{color:"white"}} href= "">PROVEEDORES</a></h4>
          </div>
        </div>
      </nav> 
    </header>
  )
}


