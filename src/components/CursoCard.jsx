import { Link, Navigate, useNavigate } from "react-router-dom";
import "../Styles/CursosCard.css"

const CursoCard = ({Curso}) => {
  const navigate=useNavigate()
  const handleCurso=(data)=>{
    const path=data.target.parentElement.id.replace(/ /g,"")
    console.log(data.target.parentElement.id.replace(/ /g,"")) 
    navigate(`/cursos/${path}`)
  } 

  
    
    return (
        <div data-key={5} className="targetaCurso" onClick={handleCurso} id={Curso}>
             <div className="imagCurso">Imagen</div>
             <div className="nombreCurso">{Curso}</div>
        </div>
      );
    };
             
    export default CursoCard;