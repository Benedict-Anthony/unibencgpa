import React from "react";
import Container from "../components/shared/Container";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";

const CGPACalculator = () => {
  return (
    <Container>
      <div className="bg-white text-neutral">
        <div className="flex flex-col justify-center items-center mt-4 w-36 h-36 mx-auto rounded-full shadow-lg">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className=" text-neutral">
          <h2 className="text-center font-bold text-2xl py-3">
            Calculate CGPA
          </h2>
        </div>
        <div className="grid grid-cols-4 py-5 px-2 border mb-4 rounded-sm shadow-sm">
          <h1 className="text-xl font-bold">100 Level</h1>
          <h1 className="text-xl font-bold">200 Level</h1>
          <h1 className="text-xl font-bold">300 Level</h1>
          <h1 className="text-xl font-bold">400 Level</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <div className="bg-[#004AAD] py-4 text-xl font-bold mt-5 rounded-t-lg text-center">
              <h2>1st Semester</h2>
            </div>
            <div className="w-full">
              <table className="table text-neutral text-xl bg-[#87acdc] rounded-none">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Credits</th>
                    <th>Grads</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-100">
                  <tr className="text-neutral text-[17px]">
                    <td>CSC211</td>
                    <td>3</td>
                    <td>
                      <FaChevronDown />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="">
            <div className="bg-[#004AAD] py-4 text-xl font-bold mt-5 rounded-t-lg text-center">
              <h2>2nd Semester</h2>
            </div>
            <div className="">
              <table className="table text-neutral text-xl bg-[#87acdc] rounded-none">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Credits</th>
                    <th>Grads</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-100">
                  <tr className="text-neutral text-[17px]">
                    <td>CSC211</td>
                    <td>3</td>
                    <td>
                      <FaChevronDown />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 py-6 px-3 mt-6">
          <div className="flex justify-center items-center space-x-4">
            <button className="btn bg-red-700 text-white btn-md px-8">
              GPA
            </button>
            <h3 className="text-neutral border-b-0 border-b-gray-600">4.76</h3>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <button className="btn bg-red-700 text-white  px-8">GPA</button>
            <h3 className="text-neutral border-b-0 border-b-gray-600">--</h3>
          </div>
        </div>

        <div className="px-7 py-6 border-neutral flex flex-col justify-center items-center bg-neutral w-80 rounded-md mb-4 mx-auto ">
          <button className="btn btn-md px-12 bg-red-700 rounded-lg border-none text-white">
            Calculate CGPA
          </button>
          <h2 className="font-bold text-white py-5">4.76</h2>
        </div>
      </div>
    </Container>
  );
};

export default CGPACalculator;
