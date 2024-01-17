import React from "react";
import decor from "@/public/assets/images/decor.jpg";
import electronics from "@/public/assets/images/electronics.jpg";
import exercise from "@/public/assets/images/exercise.jpg";
import kids from "@/public/assets/images/kids.jpeg";
import shoes from "@/public/assets/images/shoes.jpg";
import lazy from "@/public/assets/images/lazy.png";
import workoutClothes from "@/public/assets/images/workout-clothes.jpg";

import Image from "next/image";

const Feed = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 grid-rows-4 gap-3 h-[80vh] [&>*]:rounded-3xl [&>*]:overflow-hidden [&>*]:relative [&>*]:after:content-none [&>*]:after:absolute [&>*]:after:left-0 [&>*]:after:top-0 [&>*]:after:w-full [&>*]:after:h-full [&>*]:after:opacity-0 [&>*]:after:transition-all [&>*]:cursor-pointer [&>*]:shadow-md">
        <div className="image-con col-span-2">
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
          <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute left-5 bottom-3 font-bold text-3xl">
            Home Decor
          </p>
        </div>
        <div className="image-con col-span-2">
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
          <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute left-5 bottom-3 font-bold text-3xl">
            Workout clothes
          </p>
        </div>
        <div className="image-con row-span-3">
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
          <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute md:left-5 left-2 bottom-3 font-bold text-3xl [writing-mode:tb-rl] -rotate-180 md:rotate-0 md:[writing-mode:horizontal-tb]">
            Kids
          </p>
        </div>
        <div className="image-con row-span-3">
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
          <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute md:left-5 left-2 bottom-3 font-bold text-3xl [writing-mode:tb-rl] -rotate-180 md:rotate-0 md:[writing-mode:horizontal-tb]">
            Shoes
          </p>
        </div>
        <div className="image-con ">
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
          <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute left-5 bottom-3 font-bold text-3xl">
            Electronics
          </p>
        </div>
        <div className="image-con ">
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
          <p className="text-white inline-block pb-[2px] bg-right-bottom bg-[0% 2px] bg-no-repeat un z-10 absolute left-5 bottom-3 font-bold text-3xl">
            Exercise and Fitness
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
