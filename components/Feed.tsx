import React from "react";
import decor from "@/public/assets/images/decor.jpg";
import electronics from "@/public/assets/images/electronics.jpg";
import exercise from "@/public/assets/images/exercise.jpg";
import kids from "@/public/assets/images/kids.jpeg";
import shoes from "@/public/assets/images/shoes.jpg";
import workoutClothes from "@/public/assets/images/workout-clothes.jpg";

import Image from "next/image";
import Link from "next/link";

const Feed = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 h-[110vh] sm:h-[80vh] [&>*]:rounded-3xl [&>*]:overflow-hidden [&>*]:relative [&>*]:after:content-none [&>*]:after:absolute [&>*]:after:left-0 [&>*]:after:top-0 [&>*]:after:w-full [&>*]:after:h-full [&>*]:after:opacity-0 [&>*]:after:transition-all [&>*]:cursor-pointer [&>*]:shadow-md [&>*]:image-con">
        <div className="sm:col-span-2 decor">
          <Link href="/category/home-decor">
            <Image
              src={decor}
              alt="decor"
              quality={40}
              placeholder="blur"
              fill
              style={{
                objectFit: "cover",
                transition: "all 0.5s ease all",
                objectPosition: "100% 80%",
              }}
            />
            <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute left-5 bottom-3 font-semibold text-2xl sm:font-bold sm:text-2xl md:text-3xl">
              Home Decor
            </p>
          </Link>
        </div>
        <div className="sm:col-span-2 workoutClothes">
          <Link href="/category/sportswear">
            <Image
              src={workoutClothes}
              alt="workoutClothes"
              quality={40}
              placeholder="blur"
              fill
              style={{
                objectFit: "cover",
                transition: "all 0.5s ease all",
                objectPosition: "100% 10%",
              }}
            />
            <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute left-5 bottom-3 font-semibold text-2xl sm:font-bold sm:text-2xl md:text-3xl">
              Workout clothes
            </p>
          </Link>
        </div>
        <div className="sm:row-span-3 kids">
          <Link href="/category/kids-fashion">
            <Image
              src={kids}
              alt="kids"
              quality={40}
              placeholder="blur"
              fill
              style={{
                objectFit: "cover",
                transition: "all 0.5s ease all",
              }}
            />
            <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute sm:left-5 left-2 bottom-3 font-semibold text-2xl sm:font-bold sm:text-2xl md:text-3xl sm:rotate-0 sm:[writing-mode:horizontal-tb]">
              Kids
            </p>
          </Link>
        </div>
        <div className="sm:row-span-3 shoes">
          <Link href="/category/shoes">
            <Image
              src={shoes}
              alt="shoes"
              quality={40}
              placeholder="blur"
              fill
              style={{
                objectFit: "cover",
                transition: "all 0.5s ease all",
              }}
            />
            <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute sm:left-5 left-2 bottom-3 font-semibold text-2xl sm:font-bold sm:text-2xl md:text-3xl sm:rotate-0 sm:[writing-mode:horizontal-tb]">
              Shoes
            </p>
          </Link>
        </div>
        <div className="sm:col-span-3 sm:row-span-2 exercise">
          <Link href="/category/exercise-and-fitness">
            <Image
              src={exercise}
              alt="exercise"
              quality={40}
              placeholder="blur"
              fill
              style={{
                objectFit: "cover",
                transition: "all 0.5s ease all",
                objectPosition: "100% 10%",
              }}
            />
            <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute left-5 bottom-3 font-semibold text-2xl sm:font-bold sm:text-2xl md:text-3xl">
              Exercise and Fitness
            </p>
          </Link>
        </div>
        <div className="sm:col-span-4 electronics">
          <Link href="/category/electronics">
            <Image
              src={electronics}
              alt="electronics"
              quality={40}
              placeholder="blur"
              fill
              style={{
                objectFit: "cover",
                transition: "all 0.5s ease all",
              }}
            />
            <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute left-5 bottom-3 font-semibold text-2xl sm:font-bold sm:text-2xl md:text-3xl">
              Electronics
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feed;
