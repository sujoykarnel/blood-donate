import GeoUpazila from "../models/GeoUpazila.js";

// get geoUpazila
export const getGeoUpazilas = (req, res) => {
  GeoUpazila.find({})
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

// post geoUpazila
export const createGeoUpazila = (req, res) => {
  const geoUpazila = new GeoUpazila(req.body);
  const savedGeoUpazila = geoUpazila
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
