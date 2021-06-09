import React, { useEffect, useState } from 'react'
import TodoItem from "./todoItem";
import CreateTodo from "./createTodo";
import { delet, get, post, put } from "../services/methodsHttp";
import "./style.css"

export default function TodoContainer () {
    const [ toDos, setToDos ] = useState([]);
    const [ newTodo, setNewTodo ] = useState(null);
    const [ todoIdToDelete, setTodoIdToDelete ] = useState(null);
    const [ todoToPut, setTodoToPut ] = useState(null);

    useEffect(()=> {
        get().then((resp) => {
            setToDos(resp.data.todos);
        })
    } , [])

    useEffect(()=>{
        if (newTodo){
            post(newTodo).then((resp) => {
                setToDos((prev) => [...prev, resp.data]);
                console.log(resp.data)
            })
        }
    },[newTodo])

    useEffect(()=>{
        if (todoIdToDelete) {
            delet(todoIdToDelete).then(() => {
                setToDos((prev) => prev.filter((value) => value.id !== todoIdToDelete));
            });
        }
    },[todoIdToDelete])

    useEffect(()=> {
        if (todoToPut) {
            put(todoToPut).then((resp) => {
                setToDos((prev) => prev.map((todo) => {
                        if (todo.id === resp.data.id) {
                            return resp.data;
                        }
                        return todo;
                    })
                )
            })
        }
    }, [todoToPut])

    const handleCreate = (newTodo) => {
        setNewTodo(newTodo);
    }

    const handleDelete = (todoId) => {
        setTodoIdToDelete(todoId);
    }

    const handlePut = (todoToPut) => {
        setTodoToPut(todoToPut);
        console.log(todoToPut)
    }

    let list = toDos.map((value) => {
        return (
            <TodoItem key={value.id} todo={value} isCompleted={value.isCompleted} task={value.task} student={value.student} id={value.id} handleDelete={handleDelete} handlePut={handlePut} />
        )
    })

    return (
     <div className="general-information">
         <CreateTodo handleCreate={handleCreate} />
         <ul  className="general-card">
            {list} 
         </ul>
     </div>
    )
}
