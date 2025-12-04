import React from "react";
import LottieSingUp from "../../assets/Lottie/bloodDonor.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const SignUpDonor = () => {
  return (
    <div className=" grid lg:grid-cols-2 justify-center items-center">
      <div>
        <Lottie animationData={LottieSingUp}></Lottie>
      </div>
      <fieldset className="max-w-10/12 lg:max-w-md mx-auto m-4 p-4  rounded-2xl w-md shadow-red-600 shadow-2xl">
        <form className="grid gap-4">
          <label className="floating-label">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
              className="input input-md w-full"
            />
            <span>Name</span>
          </label>
          <label className="floating-label">
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              required
              className="input input-md w-full"
              pattern="^[0-9]{11}$"
              inputMode="numeric"
              minLength="11"
              maxLength="11"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              title="Phone number must be exactly 11 digits"
            />
            <span>Phone Number</span>
          </label>
          <fieldset className="fieldset border-base-300 rounded-box border p-4 w-full">
            <legend className="fieldset-legend">Present Location</legend>

            <label className="label">Division</label>
            <select defaultValue="Pick a Division" className="select w-full">
              <option disabled={true}>Pick a Division</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>

            <label className="label">District</label>
            <select defaultValue="Pick a District" className="select w-full">
              <option disabled={true}>Pick a District</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>

            <label className="label">Upazila</label>
            <select defaultValue="Pick a Upazila" className="select w-full">
              <option disabled={true}>Pick a Upazila</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </fieldset>
          <label className="floating-label">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
              className="input input-md w-full"
            />
            <span>Password</span>
          </label>
          <label className="floating-label">
            <input
              type="password"
              name="rePassword"
              placeholder="Re type Password"
              required
              className="input input-md w-full"
            />
            <span>Re-Password</span>
          </label>

          <div className="grid justify-items-center">
            <button className="btn bg-red-400 text-white w-full">
              Sign Up
            </button>
          </div>
          <div>
            <p>
              Are You A Donor ? Please{" "}
              <Link to={"/signInDonor"}>
                <button className="btn bg-red-600 text-white">
                  Sing In Donor
                </button>
              </Link>
            </p>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default SignUpDonor;
