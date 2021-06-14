import React from 'react';
import { useState } from 'react';

export const Addtodo = (props) => {
    let addtodostyle={
        marginLeft:"",
        borderRadius:"10px"
        }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState("Select a Status");
    

    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc || status==='Select a Status'){
            alert("Any box cannot be empty.");
        }
        else{
        props.addTodo(title,desc,status);
        }
        setTitle("");
        setDesc("");
        setStatus("Select a Status");
    }
    const [items] = React.useState([
        {label:'Select a Status',value:'Select a Status'},
        {label:'Yet to Start',value:'Yet to Start'},
        {label:'In Progress',value:'In Progress'},
        {label:'Completed',value:'Completed'}
    ])
    return (
        <div className="container bg-success my-2" style={addtodostyle}>
            <h3 className="text-light">Add a Todo</h3>
            <div className="conatainer bg-success">
                <form className="" onSubmit={submit}>
                <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <label htmlFor="status" className="form-label">Status</label><br/>
                <div className="btn-group"> 
                    <select id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                    {items.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                    </select>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary my-3">Add Todo</button>
            </form>
            </div>
        </div>
    )
}
