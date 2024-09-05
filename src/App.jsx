import { useState } from 'react'
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreateTask from './pages/CreateTask'
import MyTask from './pages/MyTask'
import { Settings } from 'lucide-react'
import TaskCategories from './pages/TaskCategories'
import VitalTask from './pages/VitalTask'

function App() {



  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-task" element={<MyTask />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/task-categories" element={<TaskCategories />} />
            <Route path="/vital-task" element={<VitalTask />} />
            <Route path="/create-task" element={<CreateTask />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
