import React from "react";
import Lottie from "lottie-react";
import lottieBanner from "../../assets/Lottie/bloodDonner.json";
import { MdBloodtype } from "react-icons/md";
import { Link } from "react-router";

const HomeBanner = () => {
  return (
    <div className="grid lg:grid-cols-2 shadow-md ">
      <div>
        <Lottie animationData={lottieBanner} />
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="p-4">
          <p className="flex items-center text-2xl font-bold">
            <MdBloodtype className="text-6xl text-red-600" /> 500+ Donor
          </p>

          <p className="flex items-center text-2xl font-bold">
            <MdBloodtype className="text-6xl text-red-600" /> 1000+ Donated
          </p>
          <p className="flex items-center text-2xl font-bold">
            <MdBloodtype className="text-6xl text-red-600" /> Quick Response
          </p>
        </div>
        <div>
          <Link to="donors">
            <button className="btn btn-neutral text-nowrap">
              Find A Donor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
