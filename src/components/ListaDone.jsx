const ListaDone = ({tasks}) => {
    
    return(
        <div className="lista">
            <p style={{color:"white"}}>Done - {tasks.length}</p>
            {
                tasks.map((task,indiceTask)=>{
                    return(
                        <div key={indiceTask} className="taskItem done">
                            <p>{task}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}
export default ListaDone;

