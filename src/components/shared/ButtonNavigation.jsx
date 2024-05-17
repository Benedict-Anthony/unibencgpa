import React from "react";
import { BiCalendar } from "react-icons/bi";
import { FaCalculator, FaHome, FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";

export const ButtonNavigation = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return (
    <Container>
      <div className="bg-gray-200 py-4  ">
        <div className="bg-[#004AAD] py-3 px-2">
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              className="flex justify-center items-center flex-col"
            >
              <FaHome
                className="bg-white p-1 rounded-full"
                size={40}
                color="#004AAD"
              />
              <p className="text-gray-200 text-sm font-semibold text-center">
                Home
              </p>
            </Link>
            <Link
              to={"/registration"}
              className="flex justify-center items-center flex-col"
            >
              <BiCalendar
                className="bg-white p-1 rounded-full"
                size={40}
                color="#004AAD"
              />
              <p className="text-gray-200 text-sm font-semibold text-center">
                Course Reg
              </p>
            </Link>
            <Link
              to={"/calculator"}
              className="flex justify-center items-center flex-col"
            >
              <FaCalculator
                className="bg-white p-1 rounded-full"
                size={40}
                color="#004AAD"
              />
              <p className="text-gray-200 text-sm font-semibold text-center">
                CGPA
              </p>
            </Link>
            <Link
              to={"/insight"}
              className="flex justify-center items-center flex-col"
            >
              <FaStar
                className="bg-white p-1 rounded-full"
                size={40}
                color="#004AAD"
              />
              <p className="text-gray-200  text-sm font-semibold text-center">
                Insight
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
