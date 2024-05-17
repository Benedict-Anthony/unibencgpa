import React from "react";
import Container from "../shared/Container";
import BaseSlide from "./BaseSlide";
import thirdScreenImage from "../../assets/images/slide3-IQ-image_20240514_043705_0002.png";
import Progress from "../shared/Progress";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";

const ThirdSlide = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <BaseSlide
        image={thirdScreenImage}
        title={"Insight and Analysis"}
        text={
          "You've set goals for sure. Insights shows you how close or far off you"
        }
      />
      <div className="flex justify-between space-x-7 items-center mt-4 px-10">
        <Progress />
        <Button text={"Next"} onClick={() => navigate("/profile")} />
      </div>
    </Container>
  );
};

export default ThirdSlide;
