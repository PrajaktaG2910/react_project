import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screen/Home'
import Course from './Screen/Course'
import Topic from './Screen/Topic'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
       <Route path="/courses/:id" element={<Topic />} />

     </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default App