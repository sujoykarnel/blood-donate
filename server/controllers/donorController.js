import Donor from "../models/Donor.js";

// get donor
export const getDonors = (req, res) => {
  Donor.find({})
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

// post donor
export const createDonor = (req, res) => {
  const donor = new Donor(req.body);
  const savedDonor = donor
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
