import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Courses from '../components/Adminitems/Courses'
import DashBoard from '../components/Adminitems/DashBoard'
import EditPage from '../components/Adminitems/EditPage'
import AddCourse from '../components/Adminitems/AddCourse'
import GoogleAuth from '../pages/GoogleAuth'
import SinglePage from '../components/SinglePage'

const AllRoute = () => {
  return (
    <Routes>

      <Route path='/admin' element={<DashBoard/>} />
      <Route path='/admin/dashboard' element={<DashBoard/>} />
      <Route path="/admin/courses" element={<Courses/>} />
      <Route path="/admin/edit/:id" element={<EditPage/>} />
      <Route path='/admin/addCourse' element={<AddCourse/>}/>
      <Route path="/googleauth" element={<GoogleAuth/>} />
      <Route path="/singlePage" element={<SinglePage/>}

    </Routes>
  )
}

export default AllRoute
