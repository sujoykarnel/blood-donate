import React, { useEffect, useState } from "react";
import { api } from "../api/api";

const useBloodGroup = () => {
  const [bloodGroups, setBloodGroups] = useState([]);

  useEffect(() => {
    api
      .get("/bloodGroups")
      .then((res) => {
        if (res.data) {
          setBloodGroups(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return bloodGroups;
};

export default useBloodGroup;
