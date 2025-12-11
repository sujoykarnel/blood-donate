import mongoose from "mongoose";

const geoDivisionSchema = new mongoose.Schema(
  {
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
  { collection: "geoDivisions", timestamps: true }
);

geoDivisionSchema.index({ name: 1 }, { unique: true });

const geoDivision = mongoose.model("geoDivision", geoDivisionSchema);

geoDivision.syncIndexes();

export default geoDivision;
