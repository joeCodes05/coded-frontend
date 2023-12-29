import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import LeftBar from "./components/leftbar";
import Login from "./pages/login";
import SignUp from "./pages/signup";

const App = () => {
  return (
    <>
      <Router>
        <main className="lg:flex block font-poppins overflow-x-hidden">
          <Sidebar />
          <div className="lg:w-[50%] h-full lg:mx-auto w-screen">
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<SignUp />} path="/signup" />
            </Routes>
          </div>
          <LeftBar />
        </main>
      </Router>
    </>
  );
};

export default App;
