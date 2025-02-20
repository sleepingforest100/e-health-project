import React from "react";

const Trusted = () => {
  return (
    <section className="mb-4">
      <div className="max-w-full md:max-w-[90%] lg:max-w-[75%] mx-auto flex flex-col space-y-8">
        <div className="text-[#343a40] font-bold text-3xl mx-auto">
        Trusted by leading healthcare providers in Kazakhstan
        </div>
        <div className="grid grid-cols-2 md:flex md:justify-around">
          <img className="w-28 h-28" src="assets/egov_logo.png" alt="" />
          <img className="w-28 h-28" src="assets/damumed_logo.jpg" alt="" />
          <img className="w-28 h-28" src="assets/invivo_logo.png" alt="" />
          <img className="w-28 h-28" src="assets/apteka_logo.png" alt="" />
          <img className="w-28 h-28" src="assets/logo.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
