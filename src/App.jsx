import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Pages/Header'
import Login from './Pages/Login'
import Home from './Pages/Home';
import Cursos from './Pages/Cursos';
import AboutMe from './Pages/AboutMe';
import CalculoDiferencial from './Pages/CalculoDiferencial';
import TemasFunciones from './Pages/Funciones';
import Footer from './Pages/Footer';
import CompEjercicios from './components/CompEjercicios';

function App() {

  return (
    <HashRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path='/Cursos' element={<Cursos/>}/>
          <Route path='/Proyectos' element={<CompEjercicios/>}/>
          <Route path='/About-me' element={<AboutMe/>}/>
          <Route path='/Cursos/CalculoDiferencial' element={<CalculoDiferencial/>}/>
          <Route path='/Cursos/CalculoDiferencial/Funciones' element={<TemasFunciones/>}/>
        </Routes>
      <Footer/>      
    </HashRouter>
  );    
  
}

export default App
