import React from "react";
import Container from "../shared/Container";
import firstScreenImage from "../../assets/images/slide1-tracker-image_20240514_043705_0000.png";
import Button from "../shared/Button";
import Progress from "../shared/Progress";
import BaseSlide from "./BaseSlide";

const FirstSlide = ({ onClick }) => {
  return (
    <Container>
      <BaseSlide
        image={firstScreenImage}
        text={
          "Tracking your academic performance just got better I promise. Hang  on tight!"
        }
        title={"Academic Tracker"}
      ></BaseSlide>
      <div className="flex justify-between space-x-7 items-center mt-4 px-10">
        <Progress />
        <Button text={"Next"} onClick={onClick} />
      </div>
    </Container>
  );
};

export default FirstSlide;
