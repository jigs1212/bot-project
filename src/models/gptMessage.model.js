import mongoose from "mongoose";

const GptMessageSchema = new mongoose.Schema(
  {
    gpt_response_message: {
      type: String,
      required: true,
    },
    chat_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
  },
  { timestamps: true }
);

export const GptMessage = mongoose.model("GptMessage", GptMessageSchema);
