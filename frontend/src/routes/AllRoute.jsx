import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Courses from '../components/items/Courses'
import DashBoard from '../components/items/DashBoard'
import EditPage from '../components/items/EditPage'

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/courses" element={<Courses/>} />
      <Route path="/" element={<DashBoard/>} />
      <Route path="/edit" element={<EditPage/>} />
    </Routes>
  )
}

export default AllRoute
