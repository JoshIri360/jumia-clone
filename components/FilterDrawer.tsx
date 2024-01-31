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
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);

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
                value={minValue}
              />
              <div className="text-3xl font-medium">-</div>
              <Input
                type="number"
                placeholder="Max"
                className="w-[30%]"
                value={maxValue}
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
                  value={minRating}
                />
                <div className="text-3xl font-medium">-</div>
                <Input
                  type="number"
                  placeholder="Max"
                  className="w-[30%]"
                  value={maxRating}
                />
              </div>
              <div className="mt-4">
                <Slider
                  className="mt-1"
                  defaultValue={[minRating, maxRating]}
                  onValueChange={(value) => {
                    setMinRating(value[0]);
                    setMaxRating(value[1]);
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
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
}
