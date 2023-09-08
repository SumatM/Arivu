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
import { AdminRoute } from "./AdminRoute";

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
            <AdminRoute>
              <DashBoard />
            </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/courses"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <Courses />
          </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/edit/:id"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <EditPage />
          </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/addCourse"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <AddCourse />
          </AdminRoute>
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
          <AdminRoute>
          <Discount />
          </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/statistic"
        element={
          <PrivateRoutes>
           <AdminRoute>
           <Statistics />
           </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/giftcard"
        element={
          <PrivateRoutes>
            <AdminRoute>
            <GiftCard />
            </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/setting"
        element={
          <PrivateRoutes>
           <AdminRoute>
           <Setting />
           </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/users"
        element={
          <PrivateRoutes>
            <AdminRoute>
            <Users />
            </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/users/add"
        element={
          <PrivateRoutes>
           <AdminRoute>
           <AddUser />
           </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/users/edit/:id"
        element={
          <PrivateRoutes>
            <AdminRoute>
            <EditUser />
            </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/videos"
        element={
          <PrivateRoutes>
           <AdminRoute>
           <GetVideos />
           </AdminRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/admin/videos/add/:courseId"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <AddVideo />
          </AdminRoute>
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
