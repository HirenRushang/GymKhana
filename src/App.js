import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const ExcerciseDetail = lazy(() => import("./pages/ExcerciseDetail"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/excercise/:id" element={<ExcerciseDetail />} />
       
      </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
