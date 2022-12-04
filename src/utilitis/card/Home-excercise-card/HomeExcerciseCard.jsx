import React from "react";

function HomeExcerciseCard({ excerciseData }) {
  const { image, name, time, calories } = excerciseData;

  return (
    <>
      <div className="rounded-xl w-[32%]  hover:opacity-80 ease-in-out duration-70">
        <div className="w-full drop-shadow-2xl shadow-gray-800">
          <div className="relative">
            <img
              className="rounded-t-xl shadow-2xl shadow-gray-800 w-full"
              src={image}
              alt="excercise"
            />
            <div className="pl-4">
              <div className=" mt-[-35px] flex justify-between">
                <div className="font-semibold text-[50px]">{name}</div>
                <div className="flex self-center box-border px-4 py-2 bg-black rounded-2xl text-[20px] font-semibold opacity-95">
                  {time}
                </div>
              </div>
              <div>{calories} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeExcerciseCard;
