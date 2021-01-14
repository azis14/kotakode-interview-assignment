import React from "react";

export default function TodoList(props) {
  let todolist;

  if(props.tasks.length !== 0) {
    todolist = (
      <table style={{maxWidth:"500px", margin:"5vh auto", padding:"20px"}}>
        <thead>
          <tr className="green">
            <th style={{textAlign:"center"}}>Task</th>
            <th style={{textAlign:"center"}}>Delete</th>
            <th style={{textAlign:"center"}}>Up</th>
            <th style={{textAlign:"center"}}>Down</th>
          </tr>
        </thead>
        {props.tasks.map((task, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td style={{width:"70%"}}><i className="material-icons">work</i> {task.nama}</td>
                <td><button className="btn-floating red" onClick={() => {props.handleDelete(task.id)}}><i className="material-icons">delete</i></button></td>
                <td><button className="btn-floating" onClick={() => {props.handleUp(i)}}><i className="material-icons yellow">arrow_upward</i></button></td>
                <td><button className="btn-floating" onClick={() => {props.handleDown(i)}}><i className="material-icons">arrow_downward</i></button></td>
              </tr>
            </tbody>
          );
        })}
      </table>
    )
  }

  else {
    todolist = (
      <h5 style={{color:"gray"}}>There is no task to do</h5>
    )
  }

  return (
    <div>
      {todolist}
    </div>
  );
}
