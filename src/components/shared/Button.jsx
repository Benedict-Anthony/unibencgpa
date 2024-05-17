import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn bg-[#FF981B] border-none btn-sm rounded-sm hover:bg-none text-white"
    >
      {text}
    </button>
  );
};

export default Button;
