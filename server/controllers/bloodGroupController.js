import BloodGroup from "../models/BloodGroup.js";

// get bloodGroup
export const getBloodGroups = (req, res) => {
  BloodGroup.find({})
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

// post bloodGroup
export const createBloodGroup = (req, res) => {
  const bloodGroup = new BloodGroup(req.body);
  const savedBloodGroup = bloodGroup
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
