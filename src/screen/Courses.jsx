import React from "react";
import Container from "../components/shared/Container";
import { FaBackward } from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
const Courses = () => {
  return (
    <Container>
      <div className="bg-gray-100 px-3 py-1">
        <div className="flex justify-between items-center">
          <div className="p-5 shadow-lg rounded-full w-20 h-20 flex flex-col items-center justify-center font-bold text-xl text-neutral">
            Uniben
          </div>
          <div className="text-xl font-bold text-neutral">
            <h2>200 level</h2>
            <span className="text-gray-500 font-normal text-sm">
              Edit course
            </span>
          </div>
        </div>
        <div className=" border-primary border-2 rounded-lg px-10 py-4 mt-8 relative">
          <ul className="list-item list-disc text-neutral text-xl">
            <li>
              You must register all Core and Mandatory courses for each
              semester. and at least 3 credits of elective
            </li>
            <li>
              The total number of credit load should not exceed 50 credits for a
              session
            </li>
          </ul>
          <div className=" absolute top-0 -mt-5 z-30">
            <IoInformation color="#004AAD" size={30} />
          </div>
          <div className="border-2 absolute top-0 border-gray-400 w-20 h-1 -mt-1 z-20 left-3 rounded-md"></div>
        </div>
        <div className="bg-[#004AAD] py-4 text-xl font-bold mt-5 rounded-t-lg text-center">
          <h2>200 Level First Semester</h2>
        </div>
        <div className="">
          <table className="table text-neutral text-xl bg-[#87acdc] rounded-none">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Credits</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              <tr className="text-neutral text-[17px]">
                <td>CSC211</td>
                <td>System Programming in Pascal</td>
                <td>3</td>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="checkbox checkbox-primary"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-yellow-500 py-4 text-xl font-bold mt-5 rounded-t-lg text-center">
          <h2>200 Level Second Semester</h2>
        </div>
        <div className="">
          <table className="table text-neutral text-xl bg-yellow-50 rounded-none">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Credits</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              <tr className="text-neutral text-[17px]">
                <td>CSC211</td>
                <td>System Programming in Pascal</td>
                <td>3</td>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="checkbox checkbox-primary"
                  />
                </td>
              </tr>
              <tr className="text-neutral text-[17px]">
                <td>CSC215 </td>
                <td>System Programming in Pascal</td>
                <td>3</td>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="checkbox checkbox-primary"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-error italic">* elective courses</div>
          <div className="mt-7 px-10">
            <div className="flex justify-between items-center">
              <button className="btn btn-outline btn-md text-[#004AAD]">
                <FaBackward /> Back
              </button>
              <div className="w-[2px] h-9 bg-neutral"></div>
              <button className="btn btn-primary  btn-md bg-[#004AAD] text-white px-8">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Courses;
