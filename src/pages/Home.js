import React, { Suspense } from "react";
const Hero = React.lazy(() => import("../components/Hero/Hero"));
const Excercise = React.lazy(() => import("../components/Excercise/Excercise"));
const SearchBar = React.lazy(() => import("../components/SearchBar/SearchBar"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading..........</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading..........</div>}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={<div>Loading..........</div>}>
        <Excercise />
      </Suspense>
    </>
  );
};

export default Home;
