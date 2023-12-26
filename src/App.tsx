import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TaskTracker from "./pages/taskTracker";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Router>
        <main className="flex bg-light h-screen overflow-hidden font-poppins">
          <Sidebar />
          <Navbar />
          <div className="md:w-[80%] w-full">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<TaskTracker />} path="/task-tracker" />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
};

export default App;
