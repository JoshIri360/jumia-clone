import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Filter } from "lucide-react";
import Selectsort from "@/components/Selectsort";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { id: "exercise-and-fitness" },
    { id: "electronics" },
    { id: "lingerie" },
    { id: "clothing" },
    { id: "kids-fashion" },
    { id: "home-decor" },
    { id: "shoes" },
    { id: "sportswear" },
    { id: "watches" },
    { id: "yoga" },
    { id: "home-entertainment" },
    { id: "heating-cooling-appliances" },
    { id: "school-bags" },
    { id: "furniture" },
    { id: "washing-machines" },
  ];
}

const sortBy = [
  "Popularity",
  "Newest Arrivals",
  "Price: Low to High",
  "Price: High to Low",
  "Product Rating",
];

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="bg-secondary w-full h-full flex items-center flex-col">
      <div className="responsive-width z-0 text-sm my-3">
        <span className="hover:underline">
          <Link href="/">Home</Link>
        </span>{" "}
        &gt;{" "}
        <span className="hover:underline">
          {id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " ")}
        </span>
      </div>
      <div className="responsive-width z-0 bg-background flex-1 rounded-2xl overflow-hidden flex-col">
        <div className="bg-background flex justify-between items-center px-10 py-3 border-b border-secondary">
          <p className="text-2xl font-semibold">
            {id.charAt(0).toUpperCase() + id.replace(/-/g, " ").slice(1)}
          </p>
          <div className="h-fit flex gap-2">
            <Selectsort />
            <Drawer>
              <DrawerTrigger>
                <div className="p-2 h-9 w-9 border border-input rounded-sm flex items-center justify-center hover:bg-secondary">
                  <Filter />
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
