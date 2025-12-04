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
    bloodGroup: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    divisionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Origin",
      required: true,
    },
    districtId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Uom",
      required: true,
    },
    upazilaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Uom",
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
