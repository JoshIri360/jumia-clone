"use client";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

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
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Input } from "./ui/input";

type SliderProps = React.ComponentProps<typeof Slider>;

export function FilterDrawer() {
  const [goal, setGoal] = useState(350);

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
              <Input type="number" placeholder="Min" className="w-[30%]" />
              <div className="text-3xl font-medium">-</div>
              <Input type="number" placeholder="Max" className="w-[30%]" />
            </div>
            <div className="mt-4">
              <Slider
                className="mt-1"
                defaultValue={[25, 50]}
                max={100}
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
