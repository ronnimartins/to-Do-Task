import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


const FormularioNewTask = ({addTask}) => {
    const [nomeTarefa, setNomeTarefa] = useState("");
    const onChangeName = (event) => {
        setNomeTarefa (event.target.value)
    }
    const onAdicionarClick =() => {
        addTask(nomeTarefa);
        setNomeTarefa('')
    }

    return(
        <div>
            <input className="addTarefas"
                type="text" 
                value={nomeTarefa} 
                placeholder="Digite o nome da tarefa" 
                onChange={onChangeName}
            />
            <button className="addButton" onClick={onAdicionarClick}>
                <FontAwesomeIcon icon={faPlus} color="#FFF" />
            </button>
        </div>
    )
}

export default FormularioNewTask;