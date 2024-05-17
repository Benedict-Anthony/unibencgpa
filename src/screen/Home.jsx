import React, { useState } from "react";
import FirstSlide from "../components/Slides/FirstSlide";
import SecondSlide from "../components/Slides/SecondSlide";
import ThirdSlide from "../components/Slides/ThirdSlide";
import Container from "../components/shared/Container";

const Home = () => {
  const [screenSlides, setScreenSlides] = useState("slideOne");

  return (
    <Container>
      <div className="py-5  ">
        {screenSlides === "slideOne" ? (
          <FirstSlide onClick={() => setScreenSlides("slideTwo")} />
        ) : screenSlides === "slideTwo" ? (
          <SecondSlide onClick={() => setScreenSlides("slidethree")} />
        ) : screenSlides === "slidethree" ? (
          <ThirdSlide />
        ) : null}
      </div>
    </Container>
  );
};

export default Home;
