"use client";

import CustomButton from "@/components/_components/CustomButton";
import { TheamToggler } from "@/components/TheamToggler";
import { Card, CardContent } from "@/components/ui/card";

import { usePathname } from "next/navigation";
import villanCreation from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const NAV_ITEM = [
    {
      label: "Cloud",
      submenu: [
        { label: "Migration", href: "/" },
        { label: "Remote Work", href: "/" },
        { label: "App Modernisation", href: "/" },
      ],
    },
    {
      label: "Data & AI",
      submenu: [
        { label: "Analytics & Reporting", href: "/" },
        { label: "Copilot", href: "/" },
        { label: "Azure AI Foundary", href: "/" },
      ],
    },
    {
      label: "Modern Work",
      submenu: [
        { label: "Collaboration", href: "/" },
        { label: "Automation", href: "/" },
        { label: "Device Management", href: "/" },
      ],
    },
    {
      label: "Security",
      submenu: [
        { label: "Data Governance", href: "/" },
        { label: "Threat Protection", href: "/" },
        { label: "Security Operations", href: "/" },
        { label: "Security Compilance", href: "/" },
      ],
    },
  ];

  const handleMouseEnter = (label: string) => {
    setMenuOpen(label);
  };
  const handleMouseLeave = () => {
    setMenuOpen(null);
  };
  return (
    <Card className="top-0 sticky md:mx-auto z-30 xl:w-full flex-between py-1 px-1 md:px-4 mx-3">
      <Link href={"/"}>
        <Image src={villanCreation} alt="Logo" width={200} height={200} />
      </Link>

      <CardContent className="py-0 px-0 hidden gap-x-4 md:flex items-center">
        {NAV_ITEM.map((item, index) => {
          const isOpen = menuOpen === item.label;
          return (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Navigation Link */}
              <div className="px-2">
                <span className="relative pb-1 text-base cursor-pointer">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FA8B31] via-[#FC4950] to-[#2BB2E0] group-hover:w-full transition-all duration-300"></span>
                </span>
              </div>

              <div
                className={`absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out origin-top-left ${
                  isOpen
                    ? "opacity-100 visible scale-100 translate-y-0"
                    : "opacity-0 invisible scale-95 -translate-y-2"
                }`}
              >
                {item.submenu.map((subitem, subindex) => (
                  <Link
                    key={subindex}
                    href={subitem.href}
                    className="block px-4 py-3 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 border-b border-border last:border-b-0"
                  >
                    {subitem.label}
                  </Link>
                ))}
              </div>
            </div>
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
