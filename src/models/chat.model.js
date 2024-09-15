import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    chat_thread_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatThread",
      required: true,
    },
    user_message: {
      type: String,
      required: true,
    },
    gpt_message_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GptMessage",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model("Chat", ChatSchema);
