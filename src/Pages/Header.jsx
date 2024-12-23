import React from 'react'
import "../Styles/Header.css"
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [MostrarCursos, setMostrarCursos] = useState(false)
  const [MostrarMenu, setMostrarMenu] = useState(false)
  const location = useLocation(); // Obtenemos la ubicación actual de la URL
  const menuItems = document.querySelectorAll('.amima');
  useEffect(() => {
    if (location.pathname.includes('/home')) {
      menuItems.forEach(i => i.classList.remove('active'));
      document.getElementById('home').classList.add('active')
    } else if (location.pathname.includes('/proyectos')) {
      menuItems.forEach(i => i.classList.remove('active'));
      document.getElementById('home').classList.add('active')
    } else if (location.pathname.includes('/cursos')) {
      menuItems.forEach(i => i.classList.remove('active'));
      document.getElementById('cursos').classList.add('active')
    }else{
      menuItems.forEach(i => i.classList.remove('active'));
      document.getElementById('home').classList.add('active') 
    }
  }, [location]); 
 
  const actualizarAnchoVentana = () => {
    setAnchoPantalla(window.innerWidth);
  };


  useEffect(() => {
    window.addEventListener('resize', actualizarAnchoVentana);
    return () => {
      window.removeEventListener('resize', actualizarAnchoVentana);
    };
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mostrarCursos=()=>{
    setMostrarCursos(~MostrarCursos)
  }
  const mostrarMenu=()=>{
    setMostrarMenu(~MostrarMenu)
    setMostrarCursos(false)
  }

  return (
    <header>
        
        <div className='conten-principal'>
          <div className='principal'>
              <div className='redes'>
                  <ul>
                      <li><a href=""></a><i className='bx bxl-facebook'></i></li>
                      <li><a href=""><i className='bx bxl-instagram'></i></a></li>
                      <li><a href=""></a><i className='bx bxl-youtube'></i></li>
                  </ul>
              </div> 
              <div className='entrar'>
                <Link to={"/login"}> {anchoPantalla<350?<div><i className='bx bx-log-in'></i></div>: <div>Acceder a mi cuenta</div> }</Link>
              </div>
          </div>
        </div>
        

        <div className={  isScrolled ? 'div-secundario scrolled ' : 'div-secundario'}>
        <div className='secundario'>
          <Link to={"/"} ><div className='logo'><img src="/public/Akademicos.svg" alt="Logo" /></div></Link>
        
          <nav>
            {anchoPantalla<769 ?( 
            <div className='menu-barr'><i onClick={mostrarMenu} className='bx bx-menu'></i>
            <div className={MostrarMenu? 'horizontal1':'ocultar-menu'}>
                <ul className='vertical1'>
                  <li>Home</li>
                  <li>Proyectos</li>
                  <li onClick={mostrarCursos}>Cursos</li>
                  <li>Libros</li>
                  <li>Sobre mi</li>
                  <li>Tienda</li>
                </ul>
              </div>
              </div> 
            
            
            ):(<ul className='menu-horizontal'>
              <li><Link to={""} ><span className='amima' id='home'>Home</span></Link></li>
              <li><Link to={""} ><span className='amima' id='proyectos'>Proyectos</span></Link></li>
              <li><Link to={"/cursos"} ><span className='amima' id='cursos'>Cursos</span></Link></li>              
              <li><Link to={""} ><span className='amima'>Libros</span></Link></li>
              <li><Link to={""} ><span className='amima'>Sobre mi</span></Link></li>
              <li><Link to={""} ><span className='amima'>Tienda</span></Link></li>
            </ul>)}
            
          </nav>
        </div>
        </div>
        
      
    </header>
  );
};

export default Header;
