import React from "react";
import style from "./SectionOne.module.scss";
const SectionOne = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.text}>
          <h2>Fashion Sale</h2>
          <h1>Minimal Menz Style</h1>
          <p>Consectetur adipisicing elit. Laborum fuga incidunt <br /> laboriosam voluptas iure, delectus dignissimos facilis neque <br /> nulla earum.</p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
