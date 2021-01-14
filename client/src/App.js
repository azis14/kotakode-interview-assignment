import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id:0,
        nama:"Cuci Baju",
      },
      {
        id:1,
        nama:"Masak Nasi",
      },
    ]
  );
  
  const [countId, setCountId] = useState(1);

  const [task, setTask] = useState("");

  function handleInput(event) {
    const inputValue = event.target.value;
    setTask(inputValue);
  }

  function handleSubmit() {
    if(task !== "") {
      tasks.push({id: countId + 1, nama: task});
      setTask("");
      setCountId(countId + 1);
    }
    console.log(tasks);
  }

  function handleDelete(id) {
    const newList = tasks.filter((task) => task.id !== id);

    setTasks(newList);
  }

  function handleUp(i) {
    if(i !== 0) {
      let newTasks = [...tasks];
      let temp = tasks[i - 1];
      newTasks[i - 1] = tasks[i];
      newTasks[i] = temp;

      setTasks(newTasks);
    }


    console.log(tasks);
  }
  
  function handleDown(i) {
    if(i !== tasks.length - 1) {
      let newTasks = [...tasks];
      let temp = tasks[i + 1];
      newTasks[i + 1] = tasks[i];
      newTasks[i] = temp;
  
      setTasks(newTasks);
    }
  
    console.log(tasks);
  }

  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <div style={{width:"300px", margin:"auto"}}>
        <label htmlFor="input">Tambah Pekerjaan</label>
        <input placeholder="input" className="validate" onChange={(event) => {handleInput(event)}} value={task}/>
        <button className="btn-floating btn-large waves-effect waves-light blue" onClick={() => {handleSubmit()}}><i class="material-icons">add</i></button>
      </div>
      
      <h2>List Pekerjaan Rumah</h2>

      <TodoList
        tasks= {tasks} 
        handleDelete = {handleDelete}
        handleUp = {handleUp}
        handleDown = {handleDown}
      />

    </div>
  );
}

export default App;
