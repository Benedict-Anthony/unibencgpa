import React from "react";
import Container from "../components/shared/Container";
import { FaAward, FaBell } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

const HomeProfile = () => {
  return (
    <Container>
      <div className="px-3">
        <div className="flex justify-between items-start px-5 py-10">
          <div className="font-bold text-xl">
            <h2>Hi</h2>
            <h2>Osapkpolor</h2>
          </div>
          <FaBell />
        </div>
        <div className="flex justify-between items-center px-5 pb-17">
          <h2 className="font-bold flex justify-start text-xl items-center ">
            <span> Your target</span>{" "}
            <BiChevronRight size={30} className="mt-1" />
          </h2>
          <div className="font-normal flex justify-between items-center ">
            <span>
              First class <br /> honour
            </span>
            <FaAward size={30} className="mt-1 text-[#FF981B]" />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="bg-[#004AAD] py-4">
          <div className="bg-gray-200 py-4 mx-3 rounded-md">
            <div className="flex justify-between items-center px-2">
              <div className="flex justify-center items-center gap-2">
                <FaBell className="text-neutral" />
                <h1 className="text-neutral font-normal text-xl">
                  Your targets
                </h1>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-500 mx-3 mt-4 rounded-lg">
          <div className="">
            <div className="bg-white py-5 text-neutral px-3 shadow-md rounded-md">
              <h2 className="font-bold text-3xl">
                One step at a time. you will get there!
              </h2>
              <div className="flex justify-between items-center mt-4 text-sm">
                <h4>Target CGPA: 4.76</h4>
                <h4>Current CGPA: --</h4>
              </div>
              <div className="flex justify-center items-center  mt-5">
                <div className="w-32 h-3 bg-[#FF981B] rounded-lg"></div>
                <p>0%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-neutral px-3 my-9">
          <h3 className="text-[#004AAD] text-3xl font-bold">Department</h3>
          <p className="text-md mt-2">Computer Science</p>
        </div>
        <div className="shadow py-3 rounded-md mx-3 text-neutral px-2">
          <div className="flex justify-between items-center px-2">
            <div className="flex justify-center items-center gap-2">
              <FaBell className="text-neutral" />
              <h1 className="text-neutral font-normal text-xl">
                Your Priority
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            </div>
          </div>
          <h2 className="font-bold text-3xl mt-5 mb-3">
            Be gentle <br /> with yourself
          </h2>
          <div className="mt-5 mb-3 shadow-lg space-y-10 p-3">
            <div className="flex justify-between items-center space-x-10">
              <h4 className="text-gray-400 text-xl">Read 5 hours a day</h4>
              <input
                type="checkbox"
                name=""
                id=""
                className="checkbox-primary checkbox"
                checked
              />
            </div>
            <div className="flex justify-between items-center space-x-10 rounded-md">
              <h4 className="text-gray-400 text-xl">
                Form a group reading of a about 5 student
              </h4>
              <input
                type="checkbox"
                name=""
                id=""
                className="checkbox-primary checkbox"
              />
            </div>
            <div className="flex justify-between items-center space-x-10">
              <h4 className="text-gray-400 text-xl">Attend class regularly</h4>
              <input
                type="checkbox"
                name=""
                id=""
                className="checkbox-primary checkbox"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeProfile;
