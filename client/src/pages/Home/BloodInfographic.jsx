import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import O_Group from "../../assets/Images/o_group.png";
import A_Group from "../../assets/Images/a_group.png";
import B_Group from "../../assets/Images/b_group.png";
import AB_Group from "../../assets/Images/ab_group.png";
import Blood_cell from "../../assets/Images/blood_cell.png";
import Did_you_know from "../../assets/Images/did_you_know.png";

const BloodInfographic = () => {
  return (
    <div>
      <SectionTitle title="Blood inforgraphic"></SectionTitle>
      <div className="mb-4 font-bold">
        <p className="text-center">
          Blood is essential for life. Donating regularly not only helps
          maintain a safe and steady blood supply, but also ensures that
          patients facing accidents, surgeries, childbirth complications, or
          chronic illnesses receive lifesaving support when they need it most.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="border-r-2 lg:border-dashed lg:border-red-600">
          <div className="grid items-center justify-center">
            <img width={200} src={O_Group} alt="O_Group" />
          </div>
          <div className="p-4">
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start font-bold">Universal Donor (O–)</p>
            </div>
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start">Can donate to all blood groups.</p>
            </div>
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start">Most common blood group worldwide.</p>
            </div>
          </div>
        </div>
        <div className="border-r-2 lg:border-dashed lg:border-red-600">
          <div className="grid items-center justify-center">
            <img width={200} src={A_Group} alt="O_Group" />
          </div>
          <div className="p-4">
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start">
                Can donate to <span className="font-bold">A</span> and{" "}
                <span className="font-bold">AB</span>.
              </p>
            </div>
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start">
                Can receive from <span className="font-bold">A</span> and{" "}
                <span className="font-bold">O</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="border-r-2 lg:border-dashed lg:border-red-600">
          <div className="grid items-center justify-center">
            <img width={200} src={B_Group} alt="O_Group" />
          </div>
          <div className="p-4">
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start">
                Can donate to <span className="font-bold">B</span> and{" "}
                <span className="font-bold">AB</span>.
              </p>
            </div>
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start">
                Can receive from <span className="font-bold">B</span> and{" "}
                <span className="font-bold">O</span>.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid items-center justify-center">
            <img width={200} src={AB_Group} alt="O_Group" />
          </div>
          <div className="p-4">
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start font-bold">
                Universal Recipient (AB–/AB+)
              </p>
            </div>
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start">Can receive blood from all groups.</p>
            </div>
            <div className="flex items-start">
              <BiSolidDonateBlood className="text-2xl text-red-600 mr-2" />
              <p className="text-start">
                Can donate only to <span className="font-bold">AB</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div>
          <img className="w-full" src={Blood_cell} alt="Blood_cell" />
        </div>
        <div>
          <img className="w-full" src={Did_you_know} alt="Did_you_know" />
        </div>
      </div>
    </div>
  );
};

export default BloodInfographic;
