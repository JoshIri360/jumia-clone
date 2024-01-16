"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Logo from "@/public/assets/images/jumia-logo.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Heart,
  HelpCircle,
  Menu,
  Package2,
  ShoppingCart,
  User,
} from "lucide-react";

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const navBar = React.useRef<HTMLDivElement>(null);

  return (
    <nav className="flex items-center justify-between responsive-width py-3">
      <div className="w-36">
        <Image
          src={Logo}
          width={Logo.width}
          height={Logo.height}
          alt="Logo"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div
        className="col-span-4 justify-self-end gap-2 hidden md:flex"
        ref={navBar}
      >
        <div className="flex gap-3">
          <Input
            placeholder="Search products, brands and categories"
            className="w-48 md:w-[20vw] lg:w-[35vw]"
          />
          <Button>Search</Button>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!px-2">
                <div className="flex flex-center gap-1">
                  <User />
                  Account
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="[&>*]:!w-full [&>*]:!text-nowrap [&>*]:!justify-start [&>*]:cursor-pointer">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1">
                    <User />
                    My Account
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1">
                    <Package2 />
                    Orders
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1">
                    <Heart />
                    Saved Items
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!px-2">
                <div className="flex flex-center gap-1">
                  <HelpCircle />
                  Help
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="[&>*]:!w-full [&>*]:!text-nowrap [&>*]:!justify-start [&>*]:cursor-pointer">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1">Help Center</div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1">Place an order</div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1">Payment options</div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div
                className={`${navigationMenuTriggerStyle()} flex flex-center gap-1 px-4 cursor-pointer`}
              >
                <ShoppingCart />
                Cart
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div
        className="md:hidden flex items-center justify-end col-start-5 pr-2 cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Menu strokeWidth={2.5} size={30} />
      </div>
    </nav>
  );
};

export default Nav;
