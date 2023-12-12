import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Pages/Header'
import Login from './Pages/Login'
import Home from './Pages/Home';

function App() {

  return (
    <HashRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
    </HashRouter>
  );    
  
}

export default App
