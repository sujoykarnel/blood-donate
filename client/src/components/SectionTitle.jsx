import React from "react";

const SectionTitle = ({ title = "Section Title" }) => {
  return (
    <div className="bg-red-200 uppercase font-bold text-3xl py-5 text-red-600 my-4">
      <h2 className="">{title}</h2>
    </div>
  );
};

export default SectionTitle;
