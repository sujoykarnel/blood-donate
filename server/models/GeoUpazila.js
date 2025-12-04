import mongoose from "mongoose";

const geoUpazilaSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    district_id: {
      type: String,
      required: true,
    },
    bn_name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "geoUpazilas", timestamps: true }
);

geoUpazilaSchema.index({ id: 1 }, { unique: true });

const geoUpazila = mongoose.model("geoUpazila", geoUpazilaSchema);

geoUpazila.syncIndexes();

export default geoUpazila;
