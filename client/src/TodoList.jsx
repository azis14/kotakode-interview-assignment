import React from "react";

export default function TodoList(props) {
  return (
    <div>
      <table style={{maxWidth:"500px", margin:"5vh auto", padding:"20px"}}>
      {props.tasks.map((task, i) => {
        return (
          <tr>
            <td style={{width:"70%"}} key={i}><i class="material-icons">work</i> {task.nama}</td>
            <td><button className="btn-floating red" onClick={() => {props.handleDelete(task.id)}}><i class="material-icons">delete</i></button></td>
            <td><button className="btn-floating" onClick={() => {props.handleUp(i)}}><i class="material-icons yellow">arrow_upward</i></button></td>
            <td><button className="btn-floating" onClick={() => {props.handleDown(i)}}><i class="material-icons">arrow_downward</i></button></td>
          </tr>
        );
      })}
      </table>
    </div>
  );
}
