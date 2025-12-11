import mongoose from "mongoose";

const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BloodGroup",
      required: true,
    },
    division_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeoDivision",
      required: true,
    },
    district_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GeoDistrict",
      required: true,
    },
    upazila_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GeoUpazila",
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "donors", timestamps: true }
);

donorSchema.index({ name: 1 }, { unique: true });

const donor = mongoose.model("donor", donorSchema);

donor.syncIndexes();

export default donor;
