const TodoItem = ({task, student, id, handleDelete, handlePut, isCompleted}) => {
    return (
        <>
            <li className="cards">
                Task: {task} <br/> Student: {student} 
                
                
                <input type="checkbox" 
                    checked={isCompleted}
                    onChange={() => {
                            handlePut({
                                task,
                                student,
                                id,
                                isCompleted: !isCompleted
                            })
                    }}
                className="form-check-input"/>
                
                <button onClick={()=> {
                    handleDelete(id);
                }} className="btn btn-danger" >DELETE</button>
            </li>
        </>
    )
}

export default TodoItem;