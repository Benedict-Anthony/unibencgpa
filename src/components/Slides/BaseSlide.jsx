import React from "react";

const BaseSlide = ({ image, text, title }) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col w-full px-3">
        <div className="w-52 h-52 rounded-full shadow-xl mb-4 relative">
          <div className="bg-yellow-700 w-44 h-44 absolute right-0 mt-4 rounded-full blur-[80px] backdrop-blur-3xl"></div>
          <img
            src={image}
            alt="first screen"
            className="w-full h-full object-cover drop-shadow-lg mb-4"
          />
        </div>
      </div>
      <div className="card border border-gray-200 rounded-md">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default BaseSlide;
