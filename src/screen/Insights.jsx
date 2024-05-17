import React from "react";
import Container from "../components/shared/Container";
import logo from "../assets/images/logo.jpg";

const Insights = () => {
  return (
    <Container>
      <div className="px-3 bg-white text-neutral">
        <div className="flex flex-col justify-center items-center mt-4 w-16 h-16 mx-auto rounded-full shadow-lg">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-gray-800 font-bold py-4 text-center text-3xl">
          Insights and Analysis
        </h3>
        <div className="bg-blue-100 px-10 mb-5 pt-4 pb-40 rounded space-y-7">
          <div className="text-blue-700 flex justify-between items-center ">
            <h3 className="text-2xl font-semibold">Target CGPA</h3>
            <span className="font-bold">4.76</span>
          </div>
          <div className="text-yellow-700 flex justify-between items-center ">
            <h3 className="text-2xl font-semibold">Current CGPA </h3>
            <span className="font-bold ">4.26</span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-2xl">Subheading goes here</h3>
          <p className="py-4 text-neutral">
            Great performance in your first semester results
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Insights;
