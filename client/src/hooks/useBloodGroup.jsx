import React, { useEffect, useState } from "react";

const useBloodGroup = () => {
  const [bloodGroups, setBloodGroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bloodGroups")
      .then((res) => res.json())
      .then((data) => setBloodGroups(data))
      .catch((err) => console.log(err));
  }, []);

  return bloodGroups;
};

export default useBloodGroup;
