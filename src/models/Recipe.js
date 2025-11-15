import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    ingredients: {
      type: [String],
      required: true
    },
    steps: {
        type: [String],
        required: true
    },
    difficult: {
        type: String,
        enum: ["easy", "medium", "difficult"],
        default: "easy"
    },
    prepTime: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        default: "Unknown"
    }
}, {timestamps: true});

export default mongoose.model("Recipe", RecipeSchema);