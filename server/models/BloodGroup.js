import mongoose from "mongoose";

const bloodGroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "bloodGroups", timestamps: true }
);

bloodGroupSchema.index({ name: 1 }, { unique: true });

const bloodGroup = mongoose.model("bloodGroup", bloodGroupSchema);

bloodGroup.syncIndexes();

export default bloodGroup;
