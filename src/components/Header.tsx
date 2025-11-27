"use client";
import { TheamToggler } from "@/components/TheamToggler";
import { Card, CardContent } from "@/components/ui/card";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { usePathname } from "next/navigation";
import villanCreation from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const path = usePathname();

  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [childOpen, setChildOpen] = useState<string | null>(null);
  const [sticky, setSticky] = useState(false);
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const NAV_ITEM = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/" },
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
    { label: "Contact", href: "/" },
  ];

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    setMenuOpen(label);
  };
  const handleMouseLeave = () => {
    setMenuOpen(null);
    setChildOpen(null);
  };

  return (
    <>
      <Card
        className={`top-0 sticky md:mx-auto z-30 xl:w-full bg-transparent flex-between 
        px-1 md:px-4 mx-3 transition-all duration-200 
        ${
          sticky
            ? "pt-1 shadow-lg bg-white dark:bg-[#000000]"
            : "shadow-none md:pt-4 border-none pt-2"
        }`}
      >
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
                <Link href={item.href ?? "/"} className="px-2">
                  <span className="relative pb-1 text-base cursor-pointer">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FA8B31] via-[#FC4950] to-[#2BB2E0] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>

                {item.submenu && (
                  <div
                    className={`absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg transition-all duration-300 origin-top-left ${
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
                          <div className="block px-4 py-3 text-sm hover:bg-accent border-b last:border-b-0">
                            {subitem.label}
                          </div>

                          {subitem.childSubMenu && (
                            <div
                              className={`absolute top-0 left-full ml-1 w-56 bg-card border border-border rounded-lg shadow-lg transition-all duration-300 origin-top-left ${
                                isChildOpen
                                  ? "opacity-100 visible scale-100 translate-y-0"
                                  : "opacity-0 invisible scale-95 -translate-y-2"
                              }`}
                            >
                              {subitem.childSubMenu.map((child, i) => (
                                <Link
                                  key={i}
                                  href={child.href}
                                  className="block px-4 py-3 text-sm hover:bg-accent border-b last:border-b-0"
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
        </CardContent>

        <div className="flex items-center gap-2">
          <TheamToggler />

          <button
            className="md:hidden block text-2xl"
            onClick={() => setMobileDrawer(true)}
          >
            <IoMenu />
          </button>
        </div>
      </Card>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-[#000000] shadow-xl z-50 
  transform transition-transform duration-300 md:hidden
  ${mobileDrawer ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => {
            setMobileDrawer(false);
            setMenuOpen(null);
            setChildOpen(null);
          }}
        >
          ✖
        </button>

        <div className="mt-16 flex flex-col gap-4 px-6">
          {NAV_ITEM.map((item, index) => {
            const isOpen = menuOpen === item.label;

            return (
              <div key={index}>
                <button
                  onClick={() =>
                    item.submenu
                      ? setMenuOpen(isOpen ? null : item.label)
                      : setMobileDrawer(false)
                  }
                  className="w-full flex justify-between items-center text-base py-2 border-b border-border"
                >
                  {item.label}
                  {item.submenu && (
                    <span>
                      {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </span>
                  )}
                </button>

                {isOpen && item.submenu && (
                  <div className="ml-3 mt-2 flex flex-col gap-2 border-l border-border pl-3">
                    {item.submenu.map((sub, subindex) => {
                      const isChildOpen = childOpen === sub.label;

                      return (
                        <div key={subindex}>
                          <button
                            onClick={() =>
                              setChildOpen(isChildOpen ? null : sub.label)
                            }
                            className="w-full flex justify-between items-center py-1 text-sm"
                          >
                            {sub.label}
                            <span>
                              {isChildOpen ? (
                                <IoIosArrowDown />
                              ) : (
                                <IoIosArrowUp />
                              )}
                            </span>
                          </button>

                          {isChildOpen && (
                            <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                              {sub.childSubMenu.map((child, childindex) => (
                                <Link
                                  key={childindex}
                                  href={child.href}
                                  onClick={() => setMobileDrawer(false)}
                                  className="py-1 text-sm text-muted-foreground hover:text-foreground"
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
        </div>
      </div>
    </>
  );
};

export default Header;
