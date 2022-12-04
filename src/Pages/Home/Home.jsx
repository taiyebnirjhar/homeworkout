import React from "react";
import ExcerciseList from "../../components/Excercise-List/ExcerciseList";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import PopularExcercise from "../../components/Popular-excercise/PopularExcercise";
import WorkoutPrograme from "../../components/Workout-programe/WorkoutPrograme";

function Home() {
  return (
    <div className=" py-8 px-4 2xl:max-w-[77%]  mx-auto">
      <Navbar />
      <Hero />
      <PopularExcercise />
      <WorkoutPrograme />
      <ExcerciseList />
      <Footer />
    </div>
  );
}

export default Home;
