import React from "react";

function Navbar() {
  return (
    <div className="bg-[#000000] text-white">
      <div className="flex justify-between ">
        <div className="text-lg font-semibold">WORKOUT</div>
        <div className="flex gap-x-16 font-normal text-[12px] tracking-widest leading-3 opacity-95 self-center">
          <div>EXERCISES</div>
          <div>TRAINERS</div>
          <div>PRICING</div>
          <div>LOGIN</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
