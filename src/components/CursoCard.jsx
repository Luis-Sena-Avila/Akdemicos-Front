import "../Styles/CursosCard.css"

const CursoCard = ({Curso}) => {
    console.log(Curso);
    
      return (
        <div className="targetaCurso">
             <div className="imagCurso">Imagen</div>
             <div>{Curso}</div>
        </div>
      );
    };
             
    export default CursoCard;