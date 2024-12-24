import React, { useState } from 'react'
import "../Styles/Generales.css"
const CompDropdown = ({desplegar}) => {
    const [mostrardrop,setmostrardrop]=useState(false)
    const toggleMostrar = () => {
        setmostrardrop(!mostrardrop);
    };
    
    return (
        <div className='dropdown_list'>
            <div className="dropdown_link" onClick={toggleMostrar}>
               <img className={`lista ${mostrardrop ? 'rotar' : ''}`} src="/public/bx-chevron-right.svg" alt="lista" />
               <span className='dropcapitulo'>{desplegar.capitulo}</span>
            </div>
            <ul className={mostrardrop ? 'dropdown_sub_mos':"dropdown_sub"}>
                {desplegar.secciones.map((seccion)=><li className='subtema'>{seccion}</li>)}
            </ul>  
        </div>
      );
    }           
    export default CompDropdown;
    
