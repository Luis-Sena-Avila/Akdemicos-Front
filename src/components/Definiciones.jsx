import "../Styles/Generales.css"
const Definiciones = ({definicion}) => {
    
    return (
        <div className="definicion">
             <div className="def">Definición</div>
             <p className="texdef">{definicion}</p>
        </div>
      );
    };
             
    export default Definiciones;