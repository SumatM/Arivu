import { Routes } from "react-router-dom";
import AllRoute from "./routes/AllRoute";
import AdminNavbar from "./components/AdminNavbar";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useState } from "react";
import ToggleButton from "./Toggle";

function App() {


  
  return (
    <div className="App">
      <AllRoute />
    </div>
  );
}

export default App;
