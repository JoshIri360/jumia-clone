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
  const [goal, setGoal] = useState(350);
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <DrawerContent>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Filter Documents</DrawerTitle>
          <DrawerDescription>Filter documents by price (₦).</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
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
