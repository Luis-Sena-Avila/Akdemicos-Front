import "../Styles/CalculoDiferencial.css"
import React, { useRef, useState } from "react"
import VideoModal from "../components/VideoModal" 
import Definiciones from "../components/Definiciones"
import CompDropdown from "../components/CompDropdown"
import ListCursos from "../utils/Cursos.json"
const CalculoDiferencial = () => {
    
    const videoUrl = "https://www.youtube.com/watch?v=bhUzBX7Ra1c";
    
    
    const objeto={capitulo:"Funciones", secciones:["Definiciones","Funciones Basicas"]}   
    const referencia1=useRef(null)
    const funciones=useRef(null)
         
    return (
      <div className="maxContenedor">
        <div className='ContainerPrincipal'>
          <div className="indice">
            <div className="fijo">
              <h3 className="indiceName">Contenido</h3>
              {ListCursos[0].Cursos[0].temas.map((tema)=><CompDropdown funciones={funciones} referencia1={referencia1} desplegar={tema}/>)}     
            </div>                         
          </div>

          <div className="contenido">
            <h2 className="titlePrincipal">Calculo Diferencial</h2>
            <h3 className="capitulo" ref={funciones}>1. Funciones</h3>          
        
            <Definiciones definicion={<p className="textoDef">Una función es una relación en la que a cada elemento <img className="imagen" src="/public/x.svg" alt="x" /> de un conjunto llamado <b>Dominio</b> le corresponde uno y sólo un
            elemento llamado <img className="imagen" src="/public/fx.svg" alt="f(x)" /> de otro conjunto llamado <b>Rango</b>.</p>}/>

            <div className="containerImaDes">
              <div>
                <img className="imagenDef" src="/public/ConFun.svg" alt="conFun" />
              </div>
              <div >
                <h4 className="description" >Diagrama de conjuntos de una función.</h4>
              </div>
            </div>
            

            <div className="texto"><span className="colorSubtitle">Prueba de la línea vertical</span>: Una curva en el plano xy 
            representa una función de <img className="imagen" src="/public/x.svg" alt="x" /> si y sólo si toda línea 
            vertical corta a la curva en máximo un punto.</div>
         
            <div className="wrapImagen">
              <div className="containerImaDes">
                <div>
                  <img className="imagenDef" src="/public/PruebaRVecfun.svg" alt="vert1" />
                </div>
                <div >
                  <h4 className="description" >Representa una función.</h4>
                </div>
              </div>

              <div className="containerImaDes">
                <div>
                  <img className="imagenDef" src="/public/PruebaRVecNofun.svg" alt="vert2" />
                </div>
                <div >
                  <h4 className="description" >No representa una función.</h4>
                </div>
              </div>
            </div>
            
            
            <Definiciones definicion={<div className="textoDef"><span className="colorSubtitle"> Funciones definidas a tramos</span>: Las funciones definidas a tramos también llamadas funciones definidas por partes o seccionalmente
                definidas, son funciones que tienen formulas diferentes en diferentes partes de su dominio. <br /><div className="containerImagenDef"><img className="imagenCenter" src="/public/partes.svg" alt="atramos"/></div></div>  }/>
           
            <Definiciones definicion={<div className="textoDef"><span className="colorSubtitle"> Funciones creciente y decreciente</span>:<br/><b>Funcion creciente</b>: una función es creciente en un intervalo I si <br/> <div className="containerImCreciente"><img className="imagen" src="/public/creciente.svg" alt="creciente"/></div>
            <b>Funcion decreciente</b>: una función es creciente en un intervalo I si <br /><div className="containerImCreciente"><img src="/public/decreciente.svg" alt="decreciente"/></div></div>}/>


            <div className="wrapImagen">
              <div className="containerImaDes">
                <div>
                  <img className="imagenDef" src="/public/Creciente_1.svg" alt="vert1" />
                </div>
                <div >
                  <h4 className="description" >Función creciente.</h4>
                </div>
              </div>

              <div className="containerImaDes">
                <div>
                  <img className="imagenDef" src="/public/Decreciente_1.svg" alt="vert2" />
                </div>
                <div >
                  <h4 className="description" >Función decreciente.</h4>
                </div>
              </div>
            </div>


            <Definiciones definicion={<div className="textoDef"><span className="colorSubtitle">Función par e impar</span> <div className="contaTextDef"><b>Función par</b>: Si una función cumple que <img className="imagen" src="/public/par.svg" alt="fpar" /> para todo <img className="imagen" src="/public/x.svg" alt="x" /> en su dominio, se dice que es Par. La grafica de una función par
        es simétrica respecto al eje y. </div> <div className="contaTextDef"><b>Función Impar</b>: i una función cumple que <img className="imagen" src="/public/impar.svg" alt="fimpar"/> para todo <img className="imagen" src="/public/x.svg" alt="x"/> en su dominio, se dice que es Impar. La gráfica de una función impar es simétrica respecto a el origen.</div></div>}/>
        
        <div className="wrapImagen">
              <div className="containerImaDes">
                <div>
                  <img className="imagenDef" src="/public/FunPar.svg" alt="par" />
                </div>
                <div >
                  <h4 className="description" >Función creciente.</h4>
                </div>
              </div>

              <div className="containerImaDes">
                <div>
                  <img className="imagenDef" src="/public/FunImpar.svg" alt="Impar" />
                </div>
                <div >
                  <h4 className="description" >Función decreciente.</h4>
                </div>
              </div>
            </div>     




        {/* ------------------------------------------seccion funciones basicas-------------------------------------------------------------- */}

        <h2 className="seccion" ref={referencia1}>1.1 Funciones Básicas</h2>

        <div>
        <h3 className="subsection">Funciones Polinómicas </h3>

          <div className="texto">Las funciones polinómicas tienen la forma <div className="containerImCreciente"><img src="/public/polinomica.svg" alt="polinomica"/></div> donde n ≥ 0, los a<sub>n</sub> son llamados coeficientes del polinomio y n el grado del poliniomio. El dominio de toda función polinómica es 
          <b> ℝ</b>. A continuación se estudiaran las principales funciones polinómicas.</div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Constante</span> : La función constante es una función polinómica de grado 0 y su grafica es una recta horizontal <div className="fconstante"><img src="/public/fconstante.svg" alt="constante" /></div></div>

          <div className="containerImaDes">
            <div>
              <img className="imagenDef" src="/public/FunConstante.svg" alt="constante" />
            </div>
            <div >
                <h4 className="description" >Función constante.</h4>
            </div>
          </div>


          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Lineal</span> : La función lineal es una función polinómica de 1<sup>er</sup> grado y su gráfica es una linea recta. La ecuación en la forma
          pendiente-intercepto de una función lineal es <div className="containerImCreciente"><img src="/public/flineal.svg" alt="flineal" /></div>Donde m es la pendiente de la recta y mide el grado de inclinación de ésta, y b es el intercepto de la recta con el eje y. Si m &lt; 0 la recta es decreciente, si m  &gt; 0 la recta es creciente y si m es indefinida la reccta es vertical (Una recta vertical no es una función de x).
          <br /> <br />Puesto que por dos puntos diferentes puede pasar una y solo una recta, entonces, dados dos puntos <img className="imagen" src="/public/puntosP.svg" alt="puntos" />, la
          pendiente de de la recta que pasa por dichos puntos viene dada por:<div className="containerImCreciente"><img src="/public/pendiente.svg" alt="pendiente"/></div> <br />Si x<sub>1</sub> = x<sub>2</sub> la pendiente es indefinida y la recta es vertical. <br />La ecuación en la forma punto-pendiente de esta recta se escribe como <div><img src="/public/flineal_1.svg" alt="" /></div>
          </div>

          <div className="wrapImagen">
            <div className="containerImaDes">
              <div>
                <img className="imagenDef" src="/public/FunRecta.svg" alt="constante" />
              </div>
              <div >
                  <h4 className="description" >Función lineal con pendiente positiva.</h4>
              </div>
            </div>

            <div className="containerImaDes">
            <div>
              <img className="imagenDef" src="/public/FunRectaNegativa.svg" alt="constante" />
            </div>
            <div >
                <h4 className="description" >Función lineal con pendiente negativa.</h4>
            </div>
          </div>
          </div>

          


          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Cuadrática</span> : La función cuadrática es una funcion polinomica de 2<sup>do</sup> grado y tiene la forma <div className="containerImCreciente"><img src="/public/cuadratica.svg" alt="" /></div>
          La grafica de una función cuadrática es una parabola concaba hacia arriba si a &gt; 0 y concaba hacia abajo si a &lt; 0, y su vértice estará ubicado en el punto <img className="imagen" src="/public/vertice.svg" alt="vertice" /> y será simétritrica respecto a la linea vertical <img className="imagen" src="/public/rsimetrica_1.svg" alt="simetrica"  />
          </div>

          <div className="wrapImagen">
            <div className="containerImaDes">
              <div>
                <img className="imagenDef" src="/public/ParabolaPositiva.svg" alt="conArriba" />
              </div>
              <div >
                  <h4 className="description" >Parábola concaba hacia arriba.</h4>
              </div>
            </div>

            <div className="containerImaDes">
            <div>
              <img className="imagenDef" src="/public/ParabolNegativa.svg" alt="conAbajo" />
            </div>
            <div >
                <h4 className="description" >Parábola concaba hacia abajo.</h4>
            </div>
          </div>
          </div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Cúbica</span> : El polinomio cúbico 
          es una función polinómica de 3<sup>er</sup> grado y tiene la forma <div className="containerImCreciente"><img src="/public/cubica.svg" alt="" /></div></div>
          <div className="containerImaDes">
              <div>
                <img className="imagenDef" src="/public/Policubico.svg" alt="conArriba" />
              </div>
              <div >
                  <h4 className="description" >Polinomio cúbico.</h4>
              </div>
            </div>
        </div>
        
        <div>
          <h3 className="subsection">Funciones Potencia </h3>

          <div className="texto">Son funciones de la forma <div><img src="/public/potencia.svg" alt="potencia"/></div> 
          Si a = n , donde n es un entero positivo se obtienes las funciones polinomicas con un solo término.
          </div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Identidad</span> : 
          Función potencia con a = 1.
          <div className="fconstante"><img src="/public/identidad.svg" alt="identidad" /></div></div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Cuadrática</span> : 
          Función potencia con a = 2.
          <div className="fconstante"><img src="/public/cuadratica_1.svg" alt="cuadratica_1" /></div></div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Cúbica</span> : 
          Función potencia con a = 3.
          <div className="fconstante"><img src="/public/cubica_1.svg" alt="cubica_1" /></div></div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Potencia de grado 4</span> : 
          <div className="fconstante"><img src="/public/potencia4.svg" alt="cubica_1" /></div></div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Potencia de grado 5</span> : 
          <div className="fconstante"><img src="/public/potencia5.svg" alt="cubica_1" /></div></div>

          <div className="texto"><span className="colorComent">Comentario</span> : Las gráficas de las funciones potencia 
          de grado par son similares a la de la parábola y = x<sup>2</sup>, mientras que las de las de grado impar (exceptuando la degrado 1) 
          se asemejan a la de y = x<sup>3</sup>.
          </div>

          <div className="texto">
          Si a = 1/n donde n es un entero positivo, se obtiene las funciones raíz <img className="imagen" src="/public/raices.svg" alt="raices" /> 
          </div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función raíz cuadrada</span> :
          Es una función potencia con a = 1/2 , su dominio es <img className="imagen" src="/public/domrRcuad.svg" alt="dominioR2" />.
          <div className="fconstante"><img src="/public/Rcuadrada.svg" alt="Rcuadrada" /></div></div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función raíz cúbica</span> :
          Es una función potencia con a = 1/3 , su dominio es <b> ℝ</b>. 
          <div className="fconstante"><img src="/public/Rcubica.svg" alt="Rcubica" /></div></div>

          <div className="texto"><span className="colorComent">Comentario</span> : Las gráficas de las funciones de raices 
          pares son similares a la de <img className="imagen" src="/public/RcuadradaTex.svg" alt="RcuadradaTex" /> y su dominio también es <img className="imagen" src="/public/domrRcuad.svg" alt="dominioRpares" /> , 
          mientras que las de las raices impares se asemejan a la de  <img className="imagen" src="/public/RcubicaTex.svg" alt="RcubicaTex" />.
          </div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función raíz cúbica</span> :
          Es una función potencia con a = 1/3 , su dominio es <b> ℝ</b>. 
          <div className="fconstante"><img src="/public/Rcubica.svg" alt="Rcubica" /></div></div>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Función recíproca</span> :
          Es una función potencia con a = -1 , su dominio es <img className="imagen" src="/public/domiReciproc.svg" alt="domiReciproc" />. 
          <div className="fconstante"><img src="/public/FReciproca.svg" alt="FReciproca" /></div></div>     
        

      
        </div>

        <div><h3 className="subsection">Función valor absoluto </h3></div>


        <div><h3 className="subsection">Funciones trigonométricas </h3>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Seno</span> :
                La función seno es la razón entre la ordenada y la magnitud del vector posición.
                <div className="fconstante"><img src="/public/seno.svg" alt="seno" /></div>
                <div className="fconstante"><img src="/public/DomRanseno.svg" alt="omranseno" /></div>
              </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Coseno</span> :
                La función coseno es la razón entre la absisa y la magnitud del vector posición.
                <div className="fconstante"><img src="/public/coseno.svg" alt="coseno" /></div>
                <div className="fconstante"><img src="/public/DomRanseno.svg" alt="donCos" /></div>
              </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Tangente</span> :
                La función tangente es la razón entre la ordenada y la absisa.
                <div className="fconstante"><img src="/public/tangente.svg" alt="tan" /></div>
                <div className="fconstante"><img src="/public/domRantangente.svg" alt="dontan" /></div>
              </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Cosecante</span> :
                La función cosecante es la función reciproca del la función seno.
                <div className="fconstante"><img src="/public/cosecante.svg" alt="csc" /></div>
                <div className="fconstante"><img src="/public/domcosecante.svg" alt="domcsc" /></div>
                <div className="fconstante"><img src="/public/Rancosecante.svg" alt="domcsc" /></div>
                <div className="fconstante"><img src="/public/periodo2pi.svg" alt="domcsc" /></div>
              </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Secante</span> :
                La función secante es la función reciproca del la función coseno.
                <div className="fconstante"><img src="/public/secante.svg" alt="sec" /></div>
                <div className="fconstante"><img src="/public/domsecante.svg" alt="domsec" /></div>
                <div className="fconstante"><img src="/public/Ransecante.svg" alt="ransec" /></div>
                <div className="fconstante"><img src="/public/periodo2pi.svg" alt="persec" /></div>
              </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Cotangente</span> :
                La función cotangente es la función reciproca del la función tangente.
                <div className="fconstante"><img src="/public/cotangente.svg" alt="cot" /></div>
                <div className="fconstante"><img src="/public/domcotangente.svg" alt="domcot" /></div>
                <div className="fconstante"><img src="/public/Rancotangente.svg" alt="domcot" /></div>
                <div className="fconstante"><img src="/public/periodopi.svg" alt="percot" /></div>
              </div>


        </div> 

        <div><h3 className="subsection">Funciones hiperbólicas </h3>

          <div className="texto"><div className="item"></div><span className="colorSubtitle">Seno hiperbólico</span> 
              <div className="fconstante"><img src="/public/senoHiperbolico.svg" alt="senoH" /></div>
              <div className="fconstante"><img src="/public/DomsenoHiperbolico.svg" alt="senoHiperbolico" /></div>
            </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Coseno hiperbólico</span> :
              <div className="fconstante"><img src="/public/cosenoHiperbolico.svg" alt="cosenoH" /></div>
              <div className="fconstante"><img src="/public/DomcosenoHiperbolico.svg" alt="cosenoHiperbolico" /></div>      
            </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Tangente hiperbólica</span> 
              <div className="fconstante"><img src="/public/TanHiperbolica.svg" alt="tan" /></div>
              <div className="fconstante"><img src="/public/DomTanHiperbolica.svg" alt="dontan" /></div>
            </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Cosecante hiperbólica</span> 
              <div className="fconstante"><img src="/public/CscHiperbolica.svg" alt="csc" /></div>
              <div className="fconstante"><img src="/public/DomCscHiperbolica.svg" alt="domcsc" /></div>
              <div className="fconstante"><img src="/public/RanCscHiperbolica.svg" alt="domcsc" /></div>
            </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Secante hiperbólica</span> 
              <div className="fconstante"><img src="/public/SecHiperbolica.svg" alt="sec" /></div>
              <div className="fconstante"><img src="/public/DomSecHiperbolica.svg" alt="domsec" /></div>
            </div>

            <div className="texto"><div className="item"></div><span className="colorSubtitle">Cotangente hiperbólica</span> 
              <div className="fconstante"><img src="/public/CotHiperbolica.svg" alt="cot" /></div>
              <div className="fconstante"><img src="/public/DomCotHiperbolica.svg" alt="domcot" /></div>
              <div className="fconstante"><img src="/public/RanCotHiperbolica.svg" alt="domcot" /></div>
            </div>
          
          
          </div> 
        
         <div><h3 className="subsection">1.2 Combinación de funciones </h3></div>

         <div><h3 className="subsection">1.3 Transformación de funciones </h3></div>

         <div><h3 className="capitulo" >2. Límites y Continuidad </h3></div>

         <div><h3 className="capitulo" >3. Derivada y Aplicaciones </h3></div>
         




        </div>   
      </div>
    </div>
      
      
    )
  }
  export default CalculoDiferencial