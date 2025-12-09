import React from "react";
import { Link } from "react-router";
import LottieSignIn from "../../assets/Lottie/heartBeatPulse.json";
import Lottie from "lottie-react";

const SignInDonor = () => {
  return (
    <div className=" grid  justify-center items-center">
      <fieldset className="max-w-10/12 lg:max-w-md mx-auto m-4 p-4  rounded-2xl w-md shadow-red-600 shadow-2xl">
        <div className="flex justify-center ite">
          <Lottie  animationData={LottieSignIn}></Lottie>
        </div>
        <form className="grid gap-4">
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

          <div className="grid justify-items-center">
            <button className="btn btn-neutral w-full">Sign In</button>
          </div>
          <div>
            <p>
              Are You Want To Donate ? Please{" "}
              <span className="link">
                <Link to={"/signUpDonor"}>
                  <button className="btn bg-red-600 text-white">
                    Become A Donor
                  </button>
                </Link>
              </span>
            </p>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default SignInDonor;
