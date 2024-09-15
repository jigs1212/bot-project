import mongoose from "mongoose";

const TriggerSchema = new mongoose.Schema(
  {
    routine_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Routine",
      required: true,
    },
    trigger_time: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Trigger = mongoose.model("Trigger", TriggerSchema);
