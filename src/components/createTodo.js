import React from 'react';
import { useForm } from "react-hook-form";
import "./style.css"

export default function CreateTodo( {handleCreate} ) {
     const { register, handleSubmit } = useForm();

     
    const onSubmit = (values) => {
        handleCreate(values);
    }

    return (
        <div className="container-form">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label htmlFor="task">Task</label>
                <input id="task" {...register("task")} placeholder="Task" className="form-control"/>

                <label htmlFor="student">Student</label>
                <input id="student" {...register("student")} placeholder="student" className="form-control"/>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}
