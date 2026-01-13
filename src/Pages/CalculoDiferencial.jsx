import "../Styles/Temas.css"
import TodosCursos from "../components/TodosLosCursos";
import { useNavigate } from "react-router-dom";

const CalculoDiferencial = () => { 

    const navigate = useNavigate();    


    return (   
        <div className="containerTemas">
            
            <div className="nombreCurso">
                <h1>Cálculo Diferencial</h1>
            </div>

            <div className="containerListaTemas">
                <ul className="listaTemas">
                    <li onClick={() => navigate("/Cursos/CalculoDiferencial/Funciones")}>Funciones</li> 
                    <li>Derivadas</li>
                </ul>
                
            </div>

            <TodosCursos />

        </div>    
    )
}

export default CalculoDiferencial