"use client";
import React, { useCallback, useEffect, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Selectsort = () => {
  const router = useRouter();
  let path = usePathname();
  const searchParams = useSearchParams();
  const sortBy = useMemo(
    () => [
      "Popularity",
      "Price: Low to High",
      "Price: High to Low",
      "Product Rating",
    ],
    []
  );
  const [selected, setSelected] = React.useState("loading...");

  useEffect(() => {
    if (searchParams.has("sort")) {
      switch (searchParams.get("sort")) {
        case "price-low-to-high":
          setSelected("Price: Low to High");
          break;
        case "price-high-to-low":
          setSelected("Price: High to Low");
          break;
        case "product-rating":
          setSelected("Product Rating");
          break;
        default:
          setSelected("Popularity");
      }
    }
  }, [searchParams]);

  return (
    <Select
      onValueChange={(value) => {
        setSelected(value);
        router.push(
          `${path}?sort=${value
            .replace(":", "")
            .replace(/ /g, "-")
            .toLowerCase()}`
        );
      }}
      value={selected}
      defaultValue="Popularity"
    >
      <SelectTrigger className="w-[180px] h-9 border-0 hover:bg-secondary">
        <SelectValue placeholder={sortBy[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          {sortBy.map((item) => (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selectsort;
