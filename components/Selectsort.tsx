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
import queryString from "query-string";

const Selectsort = () => {
  const router = useRouter();
  let path = usePathname();
  const searchParams = useSearchParams();

  const params: { [key: string]: string } = {};

  // Iterate over searchParams.entries()
  for (const [key, value] of searchParams.entries()) {
    // Append each key-value pair to the path
    if (key !== "sort") {
      params[key] = value;
    }
  }

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
  }, [searchParams]);

  const createUrl = (sort: string) => {
    return queryString.stringifyUrl({ url: path, query: { ...params, sort } });
  };

  return (
    <Select
      onValueChange={(value) => {
        setSelected(value);
        router.push(
          createUrl(
            value === "Price: Low to High"
              ? "price-low-to-high"
              : value === "Price: High to Low"
              ? "price-high-to-low"
              : value === "Popularity"
              ? "popularity"
              : value === "Product Rating"
              ? "product-rating"
              : ""
          )
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
