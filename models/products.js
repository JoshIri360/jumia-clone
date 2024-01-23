import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: false,
  },
  no_of_ratings: {
    type: Number,
    required: false,
  },
  discount_price: {
    type: Number,
    required: false,
  },
  actual_price: {
    type: Number,
    required: true,
  },
});

const Product = models.Product || model("Product", productSchema);

export default Product;