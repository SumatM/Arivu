import Courses from "../components/Adminitems/Courses";
import DashBoard from "../components/Adminitems/DashBoard";
import EditPage from "../components/Adminitems/EditPage";
import AddCourse from "../components/Adminitems/AddCourse";
import LandingPage from "../Pages/LandingPage";
import PageNotFound from "../Pages/PageNotFound";
import UserDashboard from "../Pages/UserDashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
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
import PrivateRoutes from "./PrivateRoutes";

const AllRoute = () => {
  return (
    <Routes>
      <Route
        path="/course/:id"
        element={
          <PrivateRoutes>
            <SinglePage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoutes>
            <DashBoard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/courses"
        element={
          <PrivateRoutes>
            <Courses />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/edit/:id"
        element={
          <PrivateRoutes>
            <EditPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/addCourse"
        element={
          <PrivateRoutes>
            <AddCourse />
          </PrivateRoutes>
        }
      />
      <Route
        path="/arivu"
        element={
          <PrivateRoutes>
            <UserDashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/discount"
        element={
          <PrivateRoutes>
            <Discount />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/statistic"
        element={
          <PrivateRoutes>
            <Statistics />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/giftcard"
        element={
          <PrivateRoutes>
            <GiftCard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/setting"
        element={
          <PrivateRoutes>
            <Setting />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/users"
        element={
          <PrivateRoutes>
            <Users />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/users/add"
        element={
          <PrivateRoutes>
            <AddUser />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/users/edit/:id"
        element={
          <PrivateRoutes>
            <EditUser />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/videos"
        element={
          <PrivateRoutes>
            <GetVideos />
          </PrivateRoutes>
        }
      />

      <Route
        path="/admin/videos/add/:courseId"
        element={
          <PrivateRoutes>
            <AddVideo />
          </PrivateRoutes>
        }
      />

      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/payment"
        element={
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <ProfilePage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AllRoute;
