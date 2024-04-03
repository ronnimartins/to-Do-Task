import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons'
// import {faTrash} from '@fortawesome/free-regular-svg-icons'


const ListaTask = ({tasks, handleDelete, handleComplete}) => {
    
    return(
        <div className="lista">
            <p style={{color:"white"}}>Tasks to do - {tasks.length}</p>
            {
                tasks.map((task,indiceTask)=>{
                    return(
                        <div key={indiceTask} className="taskItem">
                            <p>{task}</p>
                            <div className='actionIcons'>
                                <FontAwesomeIcon onClick={() => handleComplete(indiceTask)} icon={faCheck}/>
                                <FontAwesomeIcon onClick={() => handleDelete(indiceTask)} icon={faTrash} />

                            </div>

                        </div>
                    )
                })
            }
        </div>

    )
}

export default ListaTask;



    // const lista = [4, 8, 16]
    
    /* {
               lista.map((elementoDaLista, indiceDoElementoNaLista)=> {
                    return (
                     <p> Elemento {indiceDoElementoNaLista}: {elementoDaLista}</p>   
                    )
               })
            }  */