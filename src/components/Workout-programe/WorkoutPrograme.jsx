import React from "react";
import underlineYellow from "../../assets/underlineYellow.png";
import BigGreenBtn from "../../utilitis/button/BigGreenBtn";

function WorkoutPrograme() {
  return (
    <section className="my-24 bg-black flex justify-center  text-white w-full">
      <div className="inline-flex justify-end w-full relative ">
        <div className="absolute left-[10%]  pointer-events-none select-none">
          <div className="text-[130px] font-semibold tracking-tighter leading-none mt-6 ">
            <div>Workout </div>
            <div> Program </div>
            <div>Made </div>
            <div>For You</div>
            <div>
              <img className="opacity-60 " src={underlineYellow} alt="" />
            </div>
          </div>
        </div>
        <div className="w-3/4  bg-[#1A1A1A] flex justify-end ">
          <div className=" p-24 pr-0 max-w-3xl">
            <div className="text-[32px] tracking-wider opacity-70 pb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing.
            </div>
            <BigGreenBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutPrograme;
