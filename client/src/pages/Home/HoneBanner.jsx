import React from "react";
import Lottie from "lottie-react";
import lottieBanner from "../../assets/Lottie/bloodDonner.json";
import { MdBloodtype } from "react-icons/md";

const HomeBanner = () => {
  return (
    <div className="grid lg:grid-cols-2 shadow-md">
      <div>
        <Lottie animationData={lottieBanner} />
      </div>
      <div className="grid items-center">
        <div>
          <p className="flex items-center text-2xl font-bold">
            <MdBloodtype className="text-6xl text-red-600" /> 500+ Doner
          </p>

          <p className="flex items-center text-2xl font-bold">
            <MdBloodtype className="text-6xl text-red-600" /> 1000+ Donated
          </p>
          <p className="flex items-center text-2xl font-bold">
            <MdBloodtype className="text-6xl text-red-600" /> Quick Response
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
