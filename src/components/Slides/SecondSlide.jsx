import React from "react";
import BaseSlide from "./BaseSlide";
import Progress from "../shared/Progress";
import secondScreenImage from "../../assets/images/slide2-calculator-image_20240514_043705_0001.png";
import Button from "../shared/Button";
import Container from "../shared/Container";

const SecondSlide = ({ onClick }) => {
  return (
    <Container>
      <BaseSlide
        image={secondScreenImage}
        title={"CGPA Calculator"}
        text={
          "As a Uniben student, CGPA calculation is now less of a hassle trust me!"
        }
      />
      <div className="flex justify-between space-x-7 items-center mt-4 px-10">
        <Progress />
        <Button text={"Next"} onClick={onClick} />
      </div>
    </Container>
  );
};

export default SecondSlide;
