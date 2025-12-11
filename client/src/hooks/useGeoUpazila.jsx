import React, { useEffect, useState } from "react";
import { api } from "../api/api";

const useGeoUpazila = () => {
  const [geoUpazilas, setGeoUpazilas] = useState([]);

  useEffect(() => {
    api
      .get("/geoUpazilas")
      .then((res) => {
        if (res.data) {
          setGeoUpazilas(res.data);
        }
      })

      .catch((err) => console.log(err));
  }, []);

  return geoUpazilas;
};

export default useGeoUpazila;
