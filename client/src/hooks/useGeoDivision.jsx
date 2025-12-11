import React, { useEffect, useState } from "react";
import { api } from "../api/api";

const useGeoDivision = () => {
  const [geoDivisions, setGeoDivisions] = useState([]);

  useEffect(() => {
    api
      .get("/geoDivisions")
      .then((res) => {
        if (res.data) {
          setGeoDivisions(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return geoDivisions;
};

export default useGeoDivision;
