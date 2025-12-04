import GeoDivision from "../models/GeoDivision.js";

// get geoDivision
export const getGeoDivisions = (req, res) => {
  GeoDivision.find({})
    .populate()
    .skip()
    .limit()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ err, message: "Item not found." });
    });
};

// post geoDivision
export const createGeoDivision = (req, res) => {
  const geoDivision = new GeoDivision(req.body);
  const savedGeoDivision = geoDivision
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
