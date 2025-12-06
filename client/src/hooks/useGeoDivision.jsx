import React, { useEffect, useState } from "react";

const useGeoDivision = () => {
  const [geoDivisions, setGeoDivisions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/geoDivisions")
      .then((res) => res.json())
      .then((data) => setGeoDivisions(data))
      .catch((err) => console.log(err));
  }, []);

  return geoDivisions;
};

export default useGeoDivision;
