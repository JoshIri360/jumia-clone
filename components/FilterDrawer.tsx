"use client";
import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "./ui/input";

export function FilterDrawer({
  minPrice,
  maxPrice,
}: {
  minPrice: number;
  maxPrice: number;
}) {
  const minRating = 0;
  const maxRating = 5;

  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);
  const [minRatingValue, setMinRatingValue] = useState(minRating);
  const [maxRatingValue, setMaxRatingValue] = useState(maxRating);

  const checkValue = (
    value: number,
    upperBound: number,
    lowerBound: number
  ) => {
    return value >= lowerBound && value <= upperBound;
  };

  return (
    <DrawerContent>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Filter Products</DrawerTitle>
          <DrawerDescription>
            Filter products by price (₦) and ratings.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <div>
            <div className="flex justify-between items-center">
              <Input
                type="number"
                placeholder="Min"
                className="w-[30%]"
                defaultValue={minPrice}
                onChange={(e) =>
                  checkValue(Number(e.target.value), maxPrice, minPrice) &&
                  setMinValue(Number(e.target.value))
                }
              />
              <div className="text-3xl font-medium">-</div>
              <Input
                type="number"
                placeholder="Max"
                className="w-[30%]"
                defaultValue={maxPrice}
                onChange={(e) =>
                  checkValue(Number(e.target.value), maxPrice, minPrice) &&
                  setMaxValue(Number(e.target.value))
                }
              />
            </div>
            <div className="mt-4">
              <Slider
                className="mt-1"
                defaultValue={[minPrice, maxPrice]}
                onValueChange={(value) => {
                  setMinValue(value[0]);
                  setMaxValue(value[1]);
                }}
                min={minPrice}
                max={maxPrice}
                step={1}
              />
            </div>
            <div className="pt-5">
              <p className="mb-1">Ratings</p>
              <div className="flex justify-between items-center">
                <Input
                  type="number"
                  placeholder="Min"
                  className="w-[30%]"
                  defaultValue={minRating}
                  value={minRatingValue}
                  onChange={(e) =>
                    checkValue(Number(e.target.value), maxRating, minRating) &&
                    setMinRatingValue(Number(e.target.value))
                  }
                />
                <div className="text-3xl font-medium">-</div>
                <Input
                  type="number"
                  placeholder="Max"
                  className="w-[30%]"
                  defaultValue={maxRating}
                  value={maxRatingValue}
                  onChange={(e) =>
                    checkValue(Number(e.target.value), maxRating, minRating) &&
                    setMaxRatingValue(Number(e.target.value))
                  }
                />
              </div>
              <div className="mt-4">
                <Slider
                  className="mt-1"
                  defaultValue={[minRating, maxRating]}
                  value={[minRatingValue, maxRatingValue]}
                  onValueChange={(value) => {
                    setMinRatingValue(value[0]);
                    setMaxRatingValue(value[1]);
                  }}
                  min={0}
                  max={5}
                  step={1}
                />
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button
            onSubmit={() => {
              console.log("Filtering products...");
              console.log("Min Price:", minValue);
              console.log("Max Price:", maxValue);
              console.log("Min Rating:", minRating);
              console.log("Max Rating:", maxRating);
            }}
          >
            Submit
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
}
