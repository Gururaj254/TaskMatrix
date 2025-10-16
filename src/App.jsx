import React from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import Progresstracker from './Components/Progresstracker'
import './assets/index.css'

export default function App() {
  return (
    <>
      <h1>Task Matrix</h1>
      <p>Friendly Task Manager Application</p>

      <TaskForm />
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </>
  )
}
