import React, { useEffect, useState } from "react";
import HomeExcerciseCard from "../../utilitis/card/Home-excercise-card/HomeExcerciseCard";
import HomeExcerciseSkelton from "../../utilitis/card/Home-excercise-card/HomeExcerciseSkelton";

function PopularExcercise() {
  const [excercises, setExcercises] = useState([]);

  // const excercisesSkelton = () => {
  //   for (let i = 0; i < 6; i++) {
  //     return <HomeExcerciseSkelton />;
  //   }
  // };

  useEffect(() => {
    fetch("../../../public/fakeData/PopularExcercises.json")
      .then((res) => res.json())
      .then((data) => setExcercises(data));
  }, []);

  return (
    <section className="pt-8 mx-20  text-white w-full">
      <div className="flex   justify-between mb-8">
        <div className="text-[35px] font-semibold">PopularExcercise</div>
        <div className="text-[16px] hover:opacity-80 cursor-pointer mt-2 tracking-widest font-normal flex self-center">
          SEE MORE EXERCISES
        </div>
      </div>
      <div className="flex flex-wrap  gap-y-20 justify-between w-full">
        {excercises ? (
          excercises.map((items, index) => (
            <HomeExcerciseCard key={index} excerciseData={items} />
          ))
        ) : (
          <>
            <HomeExcerciseSkelton />
            <HomeExcerciseSkelton />
            <HomeExcerciseSkelton />
            <HomeExcerciseSkelton />
            <HomeExcerciseSkelton />
            <HomeExcerciseSkelton />
          </>
        )}
      </div>
    </section>
  );
}

export default PopularExcercise;
