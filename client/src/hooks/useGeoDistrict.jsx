import React, { useEffect, useState } from "react";

const useGeoDistrict = () => {
  const [geoDistricts, setGeoDistricts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/geoDistricts")
      .then((res) => res.json())
      .then((data) => setGeoDistricts(data))
      .catch((err) => console.log(err));
  }, []);

  return geoDistricts;
};

export default useGeoDistrict;
