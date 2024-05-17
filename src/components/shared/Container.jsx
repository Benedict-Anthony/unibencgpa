import React from "react";

const Container = ({ children }) => {
  return (
    <section className="max-w-[480px] w-full mx-auto  bg-[#004AAD] text-white">
      {children}
    </section>
  );
};

export default Container;
