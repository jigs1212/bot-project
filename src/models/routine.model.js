import mongoose from "mongoose";

const RoutineSchema = new mongoose.Schema(
  {
    chat_thread_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatThread",
      required: true,
    },
    chat_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    daily_interval: {
      type: Number,
      required: true,
    },
    time_of_day: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

export const Routine = mongoose.model("Routine", RoutineSchema);
