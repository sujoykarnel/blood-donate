import React, { useEffect, useState } from "react";

const useGeoUpazila = () => {
  const [geoUpazilas, setGeoUpazilas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/geoUpazilas")
      .then((res) => res.json())
      .then((data) => setGeoUpazilas(data))
      .catch((err) => console.log(err));
  }, []);

  return geoUpazilas;
};

export default useGeoUpazila;
