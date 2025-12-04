import mongoose from "mongoose";

const geoDistrictSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    division_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    bn_name: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "geoDistricts", timestamps: true }
);

geoDistrictSchema.index({ id: 1 }, { unique: true });

const geoDistrict = mongoose.model("geoDistrict", geoDistrictSchema);

geoDistrict.syncIndexes();

export default geoDistrict;
