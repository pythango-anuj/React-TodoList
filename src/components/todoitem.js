import React from 'react'

export const TodoItem = (props) => {
    let mystyle = {
        maginBottom: "20px"
    }
    return (
        <div style={mystyle}>
            <h4 className="my-3">{props.todo.title}</h4>
            <p>{props.todo.dsc}</p>
            <h3 className="my-3">{props.todo.status}</h3>
            <row>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-sm btn-warning" onClick={()=>{props.onDelete(props.todo)}}>Edit</button>
            </row>
        </div>
    )
}

