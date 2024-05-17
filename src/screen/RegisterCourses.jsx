import React from "react";
import Container from "../components/shared/Container";
import {
  FaChevronCircleDown,
  FaChevronDown,
  FaFire,
  FaGraduationCap,
  FaQuestion,
} from "react-icons/fa";
import level100 from "../assets/images/100.jpg";
import level200 from "../assets/images/200.jpg";
import level300 from "../assets/images/300.jpg";
import level400 from "../assets/images/400.jpg";
import level500 from "../assets/images/500.jpg";
import level600 from "../assets/images/600.jpg";

const RegisterCourses = () => {
  return (
    <Container>
      <div className="bg-gray-200 text-neutral px-3 pb-4">
        <div className="flex flex-col justify-center items-center mt-4 w-36 h-36 mx-auto rounded-full px-3 py-3 shadow-lg">
          <h2 className="">UNIBEN Logo</h2>
        </div>
        <div className="">
          <h2 className="text-center font-bold text-2xl py-3">
            Register your courses
          </h2>
        </div>
        <div className="divider"></div>
        <div className="">
          <div className="py-3 px-3 flex justify-between items-center bg-[#004AAD] text-white rounded-md">
            <div className="flex justify-center items-center space-x-3 ">
              <FaGraduationCap
                color="#000"
                size={30}
                className="bg-white px-1 rounded-md"
              />
              <div className="">
                <h2>Physical Science</h2>
                <p className="text-gray-500">Edit Faculty</p>
              </div>
            </div>
            <div className="">
              <FaChevronDown
                color="#000"
                className="bg-white px-1 rounded-md"
                size={30}
              />
            </div>
          </div>
          <div className="py-3 px-3 flex justify-between items-center bg-[#004AAD] text-white rounded-md my-2">
            <div className="flex justify-center items-center space-x-3 ">
              <FaGraduationCap
                color="#000"
                size={30}
                className="bg-white px-1 rounded-md"
              />
              <div className="">
                <h2>Computer Science</h2>
                <p className="text-gray-500">Edit Department</p>
              </div>
            </div>
            <div className="">
              <FaChevronDown
                color="#000"
                className="bg-white px-1 rounded-md"
                size={30}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex justify-center items-center text-neutral text-2xl">
            <FaFire />
            <h2 className="">Select level</h2>
          </div>
          <FaQuestion
            className="px-3 bg-gray-400 font-bold rounded"
            size={40}
            color="#fff"
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="relative ">
            <img src={level100} alt="" className="w-full h-36 object-cover" />
            <div className="absolute bottom-2 left-0 flex justify-center items-center">
              <FaChevronCircleDown size={40} color="green" className="p-1" />
              <p className="text-xl font-bold text-white">100 Level</p>
            </div>
          </div>
          <div className="relative ">
            <img src={level200} alt="" className="w-full h-36 object-cover" />
            <div className="absolute bottom-2 left-0 flex justify-center items-center">
              <FaChevronCircleDown size={40} color="green" className="p-1" />
              <p className="text-xl font-bold text-white">200 Level</p>
            </div>
          </div>
          <div className="relative ">
            <img src={level300} alt="" className="w-full h-36 object-cover" />
            <div className="absolute bottom-2 left-0 flex justify-center items-center">
              <FaChevronCircleDown size={40} color="pink" className="p-1" />
              <p className="text-xl font-bold text-white">300 Level</p>
            </div>
          </div>
          <div className="relative ">
            <img src={level400} alt="" className="w-full h-36 object-cover" />
            <div className="absolute bottom-2 left-0 flex justify-center items-center">
              <FaChevronCircleDown size={40} color="pink" className="p-1" />
              <p className="text-xl font-bold text-white">400 Level</p>
            </div>
          </div>
          <div className="relative ">
            <img src={level500} alt="" className="w-full h-36 object-cover" />
            <div className="absolute bottom-2 left-0 flex justify-center items-center">
              <FaChevronCircleDown size={40} color="pink" className="p-1" />
              <p className="text-xl font-bold text-white">500 Level</p>
            </div>
          </div>
          <div className="relative ">
            <img src={level600} alt="" className="w-full h-36 object-cover" />
            <div className="absolute bottom-2 left-0 flex justify-center items-center">
              <FaChevronCircleDown size={40} color="pink" className="p-1" />
              <p className="text-xl font-bold text-white">600 Level</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterCourses;
