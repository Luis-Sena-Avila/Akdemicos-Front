import React, { useState } from 'react'
import "../Styles/Home.css"
import { Latex } from 'react-latex';


const Home = () => {
  const [mostrardrop,setmostrardrop]=useState(false)
  const toggleMostrar = () => {
    setmostrardrop(!mostrardrop);
  };
  return (
    <div className='dropdown_list'>
        <div className="dropdown_link" onClick={toggleMostrar}>
           <img className={`lista ${mostrardrop ? 'rotar' : ''}`} src="/public/bx-chevron-right.svg" alt="lista" />
           <span className='dropcapitulo'>Curso</span>
        </div>
        <ul className={mostrardrop ? 'dropdown_sub_mos':"dropdown_sub"}>
          <li className='subtema'>tema 1</li>
          <li className='subtema'>tema 2</li>
          <li className='subtema'>tema 3</li>
          <li className='subtema'>tema 4</li>
        </ul>


    </div>
  );
}

export default Home