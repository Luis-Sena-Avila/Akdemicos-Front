import "../Styles/CalculoDiferencial.css"
import React from "react"
import MathExpression from "../components/MathjExpresion"
import VideoModal from "../components/VideoModal" 
import Definiciones from "../components/Definiciones"

const CalculoDiferencial = () => {
    
    const videoUrl = "https://www.youtube.com/watch?v=bhUzBX7Ra1c";
    
    return (
      <div className='ContainerPrincipal'>
          <div className="indice">
            <h3>Contenido</h3>
          </div>

          <div className="contenido">
            <h2 className="titlePrincipal">Calculo Diferencial</h2>
            <h3 className="capitulo">1. Funciones</h3>

            <Definiciones definicion={<p className="texto">Una función es una relación en la que a cada elemento <img className="imagen" src="/public/x.svg" alt="x" /> de un conjunto llamado <b>Dominio</b> le corresponde uno y sólo un
            elemento llamado <img className="imagen" src="/public/fx.svg" alt="f(x)" /> de otro conjunto llamado <b>Rango</b>.</p>}/>
            

            <p className="texto"><span className="colorSubtitle">Prueba de la línea vertical</span>: Una curva en el plano xy representa una función de <img className="imagen" src="/public/x.svg" alt="x" /> si y sólo si toda línea vertical corta a la curva en máximo solo un punto.</p>
         
              <Definiciones definicion={<p className="texto"><span className="colorSubtitle"> Funciones definidas a tramos</span>: Las funciones definidas a tramos también llamadas funciones definidas por partes o seccionalmente
                definidas, son funciones que tienen formulas diferentes en diferentes partes de su dominio. <br /><img className="imagen" src="/public/impar.svg" alt="fimpar"/> gen" src="/public/x.svg" alt="x"/></p>  }/>
           
        <Definiciones definicion={<p className="texto"><span className="colorSubtitle"> Funciones creciente y decreciente</span>:<br/><b>Funcion creciente</b>: una función es creciente en un intervalo I si
        <br/><b>Funcion decreciente</b>: una función es creciente en un intervalo I si</p>}/>

        <Definiciones definicion={<p className="texto"><span className="colorSubtitle">Función par e impar</span> <br /><b>Función par</b>: Si una función cumple que <img className="imagen" src="/public/par.svg" alt="fpar" /> para todo <img className="imagen" src="/public/x.svg" alt="x" /> en su dominio, se dice que es Par. La grafica de una función par
        es simétrica respecto al eje y. <br/><b>Función Impar</b>: Si una función cumple que <img className="imagen" src="/public/impar.svg" alt="fimpar"/> para todo <img className="imagen" src="/public/x.svg" alt="x"/> en su dominio, se dice que es Impar. La gráfica de una función impar es simétrica respecto a el origen.</p>}/>
        

        
        
    

   














          </div>
      </div>

    )
  }
  export default CalculoDiferencial