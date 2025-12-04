import React from 'react';

const Donors = () => {
    return (
      <div>
        <fieldset className=" lg:flex justify-between gap-2 fieldset border-base-300 rounded-box border p-4 w-full shadow-xl shadow-red-400">
          <legend className="fieldset-legend">Present Location</legend>
          <fieldset className="lg:w-3/12">
            <label className="label">Blood Group</label>
            <select defaultValue="Pick a Blood Group" className="select w-full">
              <option disabled={true}>Pick a Blood Group</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </fieldset>

          <fieldset className="lg:w-3/12">
            <label className="label">Division</label>
            <select defaultValue="Pick a Division" className="select w-full">
              <option disabled={true}>Pick a Division</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </fieldset>

          <fieldset className="lg:w-3/12">
            <label className="label">District</label>
            <select defaultValue="Pick a District" className="select w-full">
              <option disabled={true}>Pick a District</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </fieldset>

          <fieldset className="lg:w-3/12">
            <label className="label">Upazila</label>
            <select defaultValue="Pick a Upazila" className="select w-full">
              <option disabled={true}>Pick a Upazila</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </fieldset>
        </fieldset>
            <div className="divider divider-error"></div>
            <div>
                @TODO: Add Donor Card
            </div>
      </div>
    );
};

export default Donors;