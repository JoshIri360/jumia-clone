"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import logo from "@/public/assets/images/jumia-logo.png";
import logoLight from "@/public/assets/images/jumia-logo-light.png";
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
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { useSession, getSession } from "next-auth/react";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const navBar = React.useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <nav className="flex items-center justify-between responsive-width py-2">
      <Link href="/">
        <div className="w-36">
          {
            <Image
              src={theme === "light" ? logo : logoLight}
              alt="Jumia"
              layout="responsive"
              width={200}
              height={50}
            />
          }
        </div>
      </Link>

      <div
        className={`col-span-4 justify-self-end gap-2 hidden md:flex ${
          open ? "flex flex-col" : "flex-row"
        }`}
        ref={navBar}
      >
        <div className="flex gap-3">
          <Input
            placeholder="Search products, brands and categories"
            className="w-48 md:w-[20vw] lg:w-[35vw] text-primary"
          />
          <Button>Search</Button>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!px-2">
                <div className="flex flex-center gap-1 text-primary">
                  <User />
                  {session
                    ? `Hi, ${session?.user?.name?.split(" ")[0]}`
                    : "My Account"}
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="[&>*]:!w-full [&>*]:!text-nowrap [&>*]:!justify-start [&>*]:cursor-pointer">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1 text-primary">
                    <User />
                    My Account
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1 text-primary">
                    <Package2 />
                    Orders
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1 text-primary">
                    <Heart />
                    Saved Items
                  </div>
                </NavigationMenuLink>
                {session && (
                  <NavigationMenuLink
                    className={`flex flex-col pt-1 py-3 items-center justify-center`}
                  >
                    <Button>Sign Out</Button>
                  </NavigationMenuLink>
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!px-2">
                <div className="flex flex-center gap-1 text-primary">
                  <HelpCircle />
                  Help
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="[&>*]:!w-full [&>*]:!text-nowrap [&>*]:!justify-start [&>*]:cursor-pointer">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1 text-primary">
                    Help Center
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1 text-primary">
                    Place an order
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <div className="flex items-center gap-1 text-primary">
                    Payment options
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div
                className={`${navigationMenuTriggerStyle()} flex flex-center gap-1 text-primary px-4 cursor-pointer`}
              >
                <ShoppingCart />
                Cart
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>

      <div
        className="md:hidden flex items-center justify-end col-start-5 pr-2 cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Button variant={"outline"} className="px-2 py-2">
          <Menu strokeWidth={2} size={25} />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
