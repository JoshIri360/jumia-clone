"use client";
import React from "react";
import { Button } from "./ui/button";

const AddToCartButton = () => {
  return (
    <Button
      className="mt-2 font-bold w-full"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      ADD TO CART
    </Button>
  );
};

export default AddToCartButton;
