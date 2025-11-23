"use client";

import CustomButton from "@/components/_components/CustomButton";
import { TheamToggler } from "@/components/TheamToggler";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import villanCreation from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const path = usePathname();

  const NAV_ITEM = [
    { label: "What we do", href: "/showcase" },
    { label: "Service", href: "#service" },
    { label: "Become a partner", href: "#about-us" },
    { label: "About Us", href: "#guarantees" },
  ];

  return (
    <Card className="top-5 sticky md:mx-auto z-30 xl:w-10/12 flex-between py-1 px-1 md:px-4 mx-3">
      <Link href={"/"}>
        <Image src={villanCreation} alt="Logo" width={200} height={200} />
      </Link>

      <CardContent className="py-0 px-0 hidden gap-x-4 md:flex items-center">
            {NAV_ITEM.map((item, index) => {
              return (
                <Link key={index} href={item.href} className="px-2">
                  <span className="relative pb-1 text-base cursor-pointer group">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FA8B31] via-[#FC4950] to-[#2BB2E0] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              );
            })}
        <CustomButton link="/meeting" className="text-base py-5 px-4">
          Contact
        </CustomButton>
      </CardContent>

      <TheamToggler />
    </Card>
  );
};

export default Header;
