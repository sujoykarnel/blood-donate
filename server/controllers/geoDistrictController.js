import GeoDistrict from "../models/GeoDistrict.js";

// get geoDistrict
export const getGeoDistricts = (req, res) => {
  GeoDistrict.find({})
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

// post geoDistrict
export const createGeoDistrict = (req, res) => {
  const geoDistrict = new GeoDistrict(req.body);
  const savedGeoDistrict = geoDistrict
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
