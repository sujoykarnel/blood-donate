import Donor from "../models/Donor.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const saltRounds = 10;

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
export const createDonor = async (req, res) => {
  const hashPasswowd = await bcrypt.hash(req.body.password, saltRounds);
  const newDonor = { ...req.body, password: hashPasswowd };
  const donor = new Donor(newDonor);

  const savedDonor = donor
    .save()
    .then((data) => {
      if (data.phone) {
        const userData = {
          _id: data._id,
          name: data.name,
          phone: data.phone,
        };
        const token = jwt.sign(userData, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const { password, ...donorWithoutPassword } = data.toObject();
        console.log("token", token, donorWithoutPassword);
        res
          .cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send(donorWithoutPassword);
      }
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
