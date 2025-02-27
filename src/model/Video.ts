import { Schema, model } from "mongoose";

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    comments: {
      type: [{ user: String, body: String }],
      trim: true,
    },
    reactions: {
      likes: Number,
      dislikes: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Video", videoSchema);
