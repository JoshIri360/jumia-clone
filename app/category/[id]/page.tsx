import { Button } from "@/components/ui/button";
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
import { Filter, Star, StarHalf } from "lucide-react";
import Selectsort from "@/components/Selectsort";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import shoes from "@/public/assets/images/shoes.jpg";

export function generateStaticParams() {
  return [
    { id: "cardio-equipment" },
    { id: "clothing" },
    { id: "electronics" },
    { id: "exercise-and-fitness" },
    { id: "furniture" },
    { id: "heating-and-cooling-appliances" },
    { id: "home-decor" },
    { id: "home-entertainment-systems" },
    { id: "international-toy-store" },
    { id: "kids-fashion" },
    { id: "lingerie-and-nightwear" },
    { id: "refurbished-and-pen-box" },
    { id: "school-bags" },
    { id: "shoes" },
    { id: "sportswear" },
    { id: "stem-toys-store" },
    { id: "toys-gifting-store" },
    { id: "value-bazaar" },
    { id: "washing-machines" },
    { id: "watches" },
    { id: "yoga" },
  ];
}

const sortBy = [
  "Popularity",
  "Newest Arrivals",
  "Price: Low to High",
  "Price: High to Low",
  "Product Rating",
];

interface Product {
  name: string;
  category: string;
  image: string;
  link: string;
  ratings: number;
  no_of_ratings: number;
  discount_price: number;
  actual_price: number;
}

export default async function Page({ params }: { params: { id: string } }) {
  const res = await axios.get(
    `http://localhost:3000/api/category/${params.id}/products`,
    {
      params: {
        page: "0",
        limit: "20",
      },
    }
  );

  const products: Product[] = res.data.products;

  const { id } = params;
  return (
    <div className="bg-secondary w-full h-full flex items-center flex-col">
      <div className="responsive-width z-0 text-sm my-3">
        <span className="hover:underline">
          <Link href="/">Home</Link>
        </span>{" "}
        &gt;{" "}
        <span className="hover:underline cursor-pointer">
          {id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </span>
      </div>
      <div className="sm:responsive-width z-0 bg-background flex-1 rounded-2xl rounded-b-none overflow-hidden flex-col flex items-center">
        <div className="w-full border-b border-secondary flex justify-center">
          <div className="responsive-width sm:w-[min(95%,1250px)] bg-background flex items-center justify-between py-3">
            <p className="text-lg sm:text-2xl align-middle leading-9 font-semibold">
              {id
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}{" "}
            </p>
            <div className="h-fit flex gap-2">
              <Selectsort />
              <Drawer>
                <DrawerTrigger asChild>
                  {/* <div className="filter p-2 h-9 w-9 border border-input rounded-md flex items-center justify-center hover:bg-secondary">
                    <Filter />
                  </div> */}
                  <Button variant={"outline"} size={"icon"} className="h-9">
                    <Filter size={18} />
                  </Button>
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
        <div className="flex responsive-width sm:w-[min(95%,1250px)] justify-center py-7">
          <div className="grid gap-3 sm:gap-5 md:gap-6 lg:gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between w-full">
            {products.map((data: Product, i: number) => (
              <div
                key={i}
                className="bg-secondary rounded-xl flex justify-between flex-col items-center p-4"
              >
                <div className="[&>*]:text-left [&>*]:w-full w-full sm:h-[19] h-[17rem] flex flex-col items-center">
                  <div className="relative image-con bg-white overflow-hidden rounded-xl w-full h-[75%] transition-all">
                    <Image
                      className="un"
                      src={data.image}
                      alt="Shoes"
                      fill
                      style={{
                        objectFit: "contain",
                        transition: "all 0.5s ease all",
                      }}
                    />
                  </div>
                  <h4 className="text-xs font-semibold sm:text-sm mt-1 line-clamp-2 text-ellipsis">
                    {data.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    {data.discount_price && (
                      <h4 className="font-bold my-1">
                        ₦ {data.discount_price * 10}
                      </h4>
                    )}
                    <h4
                      className={`${
                        data.discount_price
                          ? "text-muted-foreground font-semibold my-1 text-sm line-through"
                          : "font-bold my-1"
                      }`}
                    >
                      ₦ {data.actual_price * 10}
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  {data.ratings && (
                    <div className="flex items-end">
                      {Array.from(
                        { length: Math.floor(data.ratings) },
                        (_, i) => (
                          <Star key={i} fill="#FD9903" strokeWidth={0} />
                        )
                      )}

                      {Array.from(
                        { length: 5 - Math.floor(data.ratings) },
                        (_, i) => (
                          <Star key={i} fill="gray" strokeWidth={0} />
                        )
                      )}

                      <p className="text-sm ml-2 text-muted-foreground font-semibold">
                        ({data.no_of_ratings})
                      </p>
                    </div>
                  )}
                  <Button className="mt-2 font-bold w-full">ADD TO CART</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
