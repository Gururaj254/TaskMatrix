import React, { useEffect } from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import Progresstracker from './Components/Progresstracker'
import './assets/index.css'
import { useState } from 'react'

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    localStorage.setItem("tasks", JSON.stringify(tasks ))
  });
  const addTask = (task) => {
    setTasks(...tasks,task);
  }
  return (
    <>
      <h1>Task Matrix</h1>
      <p>Friendly Task Manager Application</p>

      <TaskForm  addTask = {addTask}/>
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </>
  )
}
