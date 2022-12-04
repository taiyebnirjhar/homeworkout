import React from "react";
import hero from "../../assets/hero-gym.png";

function Hero() {
  return (
    <>
      <section className="py-16 mb-8">
        <div className="flex justify-around">
          <div className="text-white font-semibold  flex flex-col mt-12 ml-[5rem]">
            <div className=" mb-10">
              <div className="bg-[#1A1A1A] flex gap-2 w-fit rounded-3xl p-2 ">
                <div className="text-[12px] rounded-2xl bg-[#25AB75] mb-[-1px] box-border px-2 py-[3px] flex self-center">
                  NEW
                </div>
                <div className="text-[14px] tracking-[0.5px] font-light opacity-90 leading-4 flex self-center px-3">
                  High Intensity workout to burn calories
                </div>
              </div>
            </div>
            <div>
              {/* <div>High Intensity workout to burn calories</div> */}
            </div>

            <div className="">
              <div className="text-[245px] leading-[188px] tracking-tight">
                <div>Cardio</div>
                <div>Exercise</div>
              </div>
              <div className="text-[16px] font-light tracking-widest opacity-80 my-16 ml-2 mr-24 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="flex gap-x-8 text-[20px]">
                <div className="bg-[#25AB75] hover:opacity-80 ease-in-out cursor-pointer duration-75 px-8 py-6 rounded-2xl">
                  Get Started
                </div>
                <div className="bg-[#1A1A1A]  hover:opacity-80  ease-in-out cursor-pointer duration-75 px-12 py-6 rounded-2xl">
                  Preview
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-white">
            <img className=" 2xl:w-[800px]" src={hero} alt="" srcSet="" />

            <div className="absolute top-[15%] left-[65%]">
              <div className="bg-[#1A1A1A] px-7 py-4 rounded-2xl leading-tight hover:opacity-80 cursor-pointer  mb-6">
                <div className="text-[48px] font-semibold text-[#FFE642]">
                  38:14
                </div>
                <div className="text-[16px] font-light opacity-80">TIME</div>
              </div>
              <div className="bg-[#1A1A1A] px-7 py-4 rounded-2xl leading-tight hover:opacity-80 cursor-pointer ">
                <div className="text-[48px] font-semibold text-[#FB1351]">
                  165
                </div>
                <div className="text-[16px] font-light opacity-80">
                  EST CALORIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

<section className="my-8 w-full">
  <div className="">
    <div>
      <div className="text-white font-semibold text-[50px] leading-[170] tracking-tight">
        Cardio Exercise
      </div>
    </div>

    {/* <div>
          
        </div> */}
  </div>
</section>;
