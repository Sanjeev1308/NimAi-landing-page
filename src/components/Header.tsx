"use client";

import CustomButton from "@/components/_components/CustomButton";
import { TheamToggler } from "@/components/TheamToggler";
import { Card, CardContent } from "@/components/ui/card";

import { usePathname } from "next/navigation";
import villanCreation from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatedButton } from "./_components/AnimatedButton";

const Header: React.FC = () => {
  const path = usePathname();

  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [childOpen, setChildOpen] = useState<string | null>(null);

  const NAV_ITEM = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/",
    },
    {
      label: "Services",
      submenu: [
        {
          label: "Data & AI",
          childSubMenu: [
            { label: "Analytics & Reporting", href: "/" },
            { label: "Copilot", href: "/" },
            { label: "Azure AI Foundary", href: "/" },
          ],
        },
        {
          label: "Cloud",
          childSubMenu: [
            { label: "Migration", href: "/" },
            { label: "Remote Work", href: "/" },
            { label: "App Modernization", href: "/" },
          ],
        },
        {
          label: "Modern Work",
          childSubMenu: [
            { label: "Collaboration", href: "/" },
            { label: "Automation", href: "/" },
            { label: "Device Management", href: "/" },
          ],
        },
        {
          label: "Security",
          childSubMenu: [
            { label: "Data Governance", href: "/" },
            { label: "Threat Protection", href: "/" },
            { label: "Security Operations", href: "/" },
            { label: "Security Compilance", href: "/" },
          ],
        },
      ],
    },
    {
      label: "Contact",
      href: "/",
    },
  ];

  const handleMouseEnter = (label: string) => {
    setMenuOpen(label);
  };
  const handleMouseLeave = () => {
    setMenuOpen(null);
    setChildOpen(null);
  };
  return (
    <Card className="top-0 sticky md:mx-auto z-30 xl:w-full bg-transparent flex-between py-1 px-1 md:px-4 mx-3 border-none light:border-none">
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
              <Link href={"/"} className="px-2">
                <span className="relative pb-1 text-base cursor-pointer">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FA8B31] via-[#FC4950] to-[#2BB2E0] group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              {/* Sub Menu */}
              {item.submenu && (
                <div
                  className={`absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg overflow-visible transition-all duration-300 ease-out origin-top-left ${
                    isOpen
                      ? "opacity-100 visible scale-100 translate-y-0"
                      : "opacity-0 invisible scale-95 -translate-y-2"
                  }`}
                >
                  {item.submenu.map((subitem, subindex) => {
                    const isChildOpen = childOpen === subitem.label;
                    return (
                      <div
                        key={subindex}
                        className="relative group"
                        onMouseEnter={() => setChildOpen(subitem.label)}
                        onMouseLeave={() => setChildOpen(null)}
                      >
                        <div className="block px-4 py-3 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 border-b border-border last:border-b-0">
                          {subitem.label}
                        </div>

                        {/* Child Submenu */}
                        {subitem.childSubMenu && (
                          <div
                            className={`absolute top-0 left-full ml-1 w-56 bg-card border border-border rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out origin-top-left ${
                              isChildOpen
                                ? "opacity-100 visible scale-100 translate-y-0"
                                : "opacity-0 invisible scale-95 -translate-y-2"
                            }`}
                          >
                            {subitem.childSubMenu.map((child, i) => (
                              <Link
                                key={i}
                                href={child.href}
                                className="block px-4 py-3 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 border-b border-border last:border-b-0"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        {/* <CustomButton link="/meeting" className="text-base py-5 px-4">
          Contact
        </CustomButton> */}
      </CardContent>

      <TheamToggler />
    </Card>
  );
};

export default Header;
