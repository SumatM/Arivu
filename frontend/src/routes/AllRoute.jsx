
import Courses from "../components/Adminitems/Courses";
import DashBoard from "../components/Adminitems/DashBoard";
import EditPage from "../components/Adminitems/EditPage";
import AddCourse from "../components/Adminitems/AddCourse";
import LandingPage from "../Pages/LandingPage";
import PageNotFound from "../Pages/PageNotFound";
import UserDashboard from "../Pages/UserDashboard";

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Discount from "../components/Adminitems/Discount";
import Statistics from "../components/Adminitems/Statistics";
import Setting from "../components/Adminitems/Setting";
import GiftCard from "../components/Adminitems/GiftCard";

//import GoogleAuth from '../pages/GoogleAuth'
import SinglePage from '../components/SinglePage'
import Users from "../components/Adminitems/Users";




const AllRoute = () => {
  return (
    <Routes>
    {/* <Route path="/googleauth" element={<GoogleAuth/>} /> */}
      <Route path="/singlePage" element={<SinglePage/>} />
      <Route path="/admin/dashboard" element={<DashBoard />} />
      <Route path="/admin/courses" element={<Courses />} />
      <Route path="/admin/edit/:id" element={<EditPage />} />
      <Route path="/admin/addCourse" element={<AddCourse />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/admin/discount" element={<Discount/>} />
      <Route path="/admin/statistic" element={<Statistics/>} />
      <Route path="/admin/giftcard" element={<GiftCard/>} />
      <Route path="/admin/setting" element={<Setting/>} />
      <Route path="/admin/users" element={<Users/>} />
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
};

export default AllRoute;
