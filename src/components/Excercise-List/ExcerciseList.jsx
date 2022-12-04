import React, { useEffect, useState } from "react";
import ExcerciseListComp from "../../utilitis/Excercise-List-Comp/ExcerciseListComp";

function ExcerciseList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("../../../public/fakeData/ExcerciseList.json")
      .then((res) => res.json())
      .then((data) =>
        setList((prev) => {
          console.log(data, prev);
          return [...data];
        })
      );
  }, []);

  return (
    <section className="my-48 bg-black  text-white w-full">
      {list &&
        list.map((item, index) => {
          if (!item) {
            return;
          } else {
            return <ExcerciseListComp key={index + 1} listData={item} />;
          }
        })}
    </section>
  );
}

export default ExcerciseList;
