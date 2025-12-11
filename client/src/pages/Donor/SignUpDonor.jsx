import React, { useMemo, useState } from "react";
import LottieSingUp from "../../assets/Lottie/bloodDonor.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router";
import useGeoDivision from "../../hooks/useGeoDivision";
import useGeoDistrict from "../../hooks/useGeoDistrict";
import useGeoUpazila from "../../hooks/useGeoUpazila";
import useBloodGroup from "../../hooks/useBloodGroup";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const SignUpDonor = () => {
  const geoDivisions = useGeoDivision();
  const geoDistricts = useGeoDistrict();
  const geoUpazilas = useGeoUpazila();
  const bloodGroups = useBloodGroup();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    division_id: null,
    district_id: null,
    upazila_id: null,
    password: "",
    rePassword: "",
  });
  const [markCheckbox, setMarkCheckbox] = useState(false);
  const { donorSignUp, user } = useAuth();
  const navigate = useNavigate();

  // division options
  const divisionOptions = useMemo(() => {
    const uniqueDivisions = Array.from(
      new Map(
        geoDivisions?.map((item) => [
          item._id,
          { _id: item._id, name: item.name },
        ])
      ).values()
    ).sort((a, b) => a.name.localeCompare(b.name));
    return uniqueDivisions;
  }, [geoDivisions]);

  // district options filtered by selected division
  const districtOptions = useMemo(() => {
    if (!formData.division_id) return [];
    const filtered = geoDistricts.filter(
      (item) => item.division_id === formData.division_id
    );
    const uniqueDistrict = Array.from(
      new Map(
        filtered.map((item) => [item._id, { _id: item._id, name: item.name }])
      ).values()
    ).sort((a, b) => a.name.localeCompare(b.name));
    return uniqueDistrict;
  }, [geoDistricts, formData.division_id]);

  // upazila options filtered by selected district
  const upazilaOptions = useMemo(() => {
    if (!formData.district_id) return [];
    const filtered = geoUpazilas.filter(
      (item) => item.district_id === formData.district_id
    );
    const uniqueUpazila = Array.from(
      new Map(
        filtered.map((item) => [item._id, { _id: item._id, name: item.name }])
      ).values()
    ).sort((a, b) => a.name.localeCompare(b.name));
    return uniqueUpazila;
  }, [geoUpazilas, formData.district_id]);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle select changes for number values
  const handleSelectChange = (name) => (e) => {
    const value = e.target.value ? e.target.value : null;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // reset dependent fields
      ...(name === "division_id"
        ? { district_id: null, upazila_id: null }
        : {}),
      ...(name === "district_id" ? { upazila_id: null } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.rePassword) {
      Swal.fire({
        icon: "warning",
        title: "Password does't match!",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // stop form submission
    }
  

    donorSignUp(formData).then((res) => {
      if (res.data) {
        navigate("/");
      }
    });
  };

  return (
    <div className="grid lg:grid-cols-2 justify-center items-center">
      <div>
        <Lottie animationData={LottieSingUp}></Lottie>
      </div>
      <fieldset className="max-w-10/12 lg:max-w-md mx-auto m-4 p-4 rounded-2xl w-md shadow-red-600 shadow-2xl">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <label className="floating-label">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
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

          <label className="label">Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="select w-full"
            required
          >
            <option value="" disabled>
              Pick a Blood Group
            </option>
            {bloodGroups.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>

          <fieldset className="fieldset border-base-300 rounded-box border p-4 w-full">
            <legend className="fieldset-legend">Present Location</legend>

            <label className="label">Division</label>
            <select
              value={formData.division_id || ""}
              onChange={handleSelectChange("division_id")}
              className="select w-full"
              required
            >
              <option value="" disabled>
                Pick a Division
              </option>
              {divisionOptions.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>

            <label className="label">District</label>
            <select
              value={formData.district_id || ""}
              onChange={handleSelectChange("district_id")}
              className="select w-full"
              required
              disabled={!formData.division_id}
            >
              <option value="" disabled>
                Pick a District
              </option>
              {districtOptions.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>

            <label className="label">Upazila</label>
            <select
              value={formData.upazila_id || ""}
              onChange={handleSelectChange("upazila_id")}
              className="select w-full"
              required
              disabled={!formData.district_id}
            >
              <option value="" disabled>
                Pick a Upazila
              </option>
              {upazilaOptions.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </fieldset>

          <label className="floating-label">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              required
              //   pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
              className="input input-md w-full"
            />
            <span>Password</span>
          </label>

          <label className="floating-label">
            <input
              type="password"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              placeholder="Re type Password"
              required
              className="input input-md w-full"
            />
            <span>Re-Password</span>
          </label>

          <label className="label">
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              onChange={() => setMarkCheckbox(!markCheckbox)}
              checked={markCheckbox}
            />
            I accept the{" "}
            <span className="btn-link">
              <Link to={"/termsAndConditions"} target="_blank">
                Terms & Condition
              </Link>
            </span>
          </label>
          <div className="grid justify-items-center">
            <button
              className="btn btn-neutral text-white w-full"
              disabled={!markCheckbox}
            >
              Sign Up
            </button>
          </div>

          <div>
            <p>
              Are You A Donor ? Please{" "}
              <Link to={"/signInDonor"}>
                <button className="btn bg-red-600 text-white">
                  Sign In Donor
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
