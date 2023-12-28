import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import LeftBar from "./components/leftbar";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <Router>
        <main className="flex font-poppins">
          <Sidebar />
          <div className="lg:w-[50%] mx-auto w-full">
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Login />} path="/login" />
            </Routes>
          </div>
          <LeftBar />
        </main>
      </Router>
    </>
  );
};

export default App;
