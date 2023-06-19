
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
import Users from "../components/Adminitems/Users";



import SinglePage from "../components/singlePageComps/SinglePage";
import Login from "../components/LogIn";
import SignUp from "../components/SignUp";
import Payment from "../Pages/Payment/Payment";

import AddUser from "../components/Adminitems/AddUser";
import EditUser from "../components/Adminitems/EditUsers";
import GetVideos from "../components/Adminitems/GetVideos";
import AddVideo from "../components/Adminitems/AddVideos";






import ProfilePage from "../Pages/ProfilePage";


const AllRoute = () => {
  return (
    <Routes>
      <Route path="/singlePage" element={<SinglePage/>} />
      <Route path="/admin/dashboard" element={<DashBoard />} />
      <Route path="/admin/courses" element={<Courses />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/admin/edit/:id" element={<EditPage />} />
      <Route path="/admin/addCourse" element={<AddCourse />} />

    

      <Route path="/arivu" element={<UserDashboard />} />
      <Route path="/admin/discount" element={<Discount />} />
      <Route path="/admin/statistic" element={<Statistics />} />
      <Route path="/admin/giftcard" element={<GiftCard />} />
      <Route path="/admin/setting" element={<Setting />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/users/add" element={<AddUser />} />
      <Route path="/admin/users/edit/:id" element={<EditUser />} />
      <Route path="/admin/videos" element={<GetVideos />} />

      <Route path="/admin/videos/add/:courseId" element={<AddVideo />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AllRoute;
