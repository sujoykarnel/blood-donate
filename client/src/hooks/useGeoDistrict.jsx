import React, { useEffect, useState } from "react";
import { api } from "../api/api";

const useGeoDistrict = () => {
  const [geoDistricts, setGeoDistricts] = useState([]);

  useEffect(() => {
    api
      .get("/geoDistricts")
      .then((res) => {
        if (res.data) {
          setGeoDistricts(res.data);
        }
      })

      .catch((err) => console.log(err));
  }, []);

  return geoDistricts;
};

export default useGeoDistrict;
