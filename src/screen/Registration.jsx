import React from "react";
import Container from "../components/shared/Container";
import logo from "../assets/images/logo.jpg";
const Registration = () => {
  return (
    <Container>
      <div className="bg-white text-neutral px-3">
        <div className="flex flex-col justify-center items-center mt-4 w-36 h-36 mx-auto rounded-full shadow-lg">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="">
          <h5 className="font-semibold py-3 text-xl">Hi,</h5>
          <p className="font-bold text-3xl text-primary">Osakpolor!</p>
          <div className="w-10 h-2 bg-primary rounded-sm mt-1"></div>
        </div>

        <div className="mt-6">
          <div className="card rounded">
            <div className="card-body bg-gray-100 rounded">
              <h2 className="text-gray-600 font-bold text-xl text-center">
                It all started with a goal
              </h2>
              <div className="w-full bg-[#fca233] px-4 py-6 rounded-lg">
                <div className="w-full bg-[#eee237] py-2 rounded-lg relative">
                  <div className="w-[80%] bg-white py-2 absolute top-0 bottom-0 left-0 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form action="" className="my-4 space-y-4">
          <select name="" id="" className="select w-full bg-primary text-white">
            <option>Select department</option>
            <option>Computer Science department</option>
            <option>Physics department</option>
            <option>Mathemactis department</option>
            <option>Geology department</option>
          </select>
          <select name="" id="" className="select w-full bg-primary text-white">
            <option>Physical Falculty</option>
            <option>Select Falculty</option>
            <option>Life Falculty</option>
            <option>Enginnering Falculty</option>
            <option>Eductaion Falculty</option>
          </select>
          <div className="flex flex-col items-center justify-center w-full">
            <button className="btn btn-outline text-primary px-5 rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Registration;
