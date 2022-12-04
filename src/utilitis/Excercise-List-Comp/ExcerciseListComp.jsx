import React from "react";

function ExcerciseListComp({ listData }) {
  const { index, name, videos } = listData;

  return (
    <div className="text-white w-full flex self-center justify-between pt-20 pb-8 border-b-2 border-gray-700 opacity-80">
      <div className="text-[25px] flex self-center"> {index}</div>
      <div>
        <div className="text-[50px] w-[447px]">{name}</div>
        <div className="text-[14px]">{videos} videos</div>
      </div>
      <div className="flex self-center">
        <i className="fa-solid text-[25px] fa-arrow-right-long text-white"></i>
      </div>
    </div>
  );
}

export default ExcerciseListComp;
