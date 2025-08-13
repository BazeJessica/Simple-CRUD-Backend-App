const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProducSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Enter quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Enter price"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProducSchema);