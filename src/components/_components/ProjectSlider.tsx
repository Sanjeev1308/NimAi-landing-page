"use client"

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/utils/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type Project = {
  imageUrl: string;
  title: string;
  link: string;
  createrDetails: { img: string; name: string };
};

export const ProjectSlider = ({
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const topContainerRef = React.useRef<HTMLDivElement>(null);
  const bottomContainerRef = React.useRef<HTMLDivElement>(null);
  const topScrollerRef = React.useRef<HTMLUListElement>(null);
  const bottomScrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [topShuffled, setTopShuffled] = useState<Project[]>([]);
  const [bottomShuffled, setBottomShuffled] = useState<Project[]>([]);

  useEffect(() => {
    const shuffleArray = (array: Project[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setTopShuffled(shuffleArray(works));
    setBottomShuffled(shuffleArray(works));
    addAnimation();
  }, []);

  function addAnimation() {
    if (topScrollerRef.current && bottomScrollerRef.current) {
      [topScrollerRef, bottomScrollerRef].forEach((ref) => {
        const scrollerContent = Array.from(ref.current!.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          ref.current!.appendChild(duplicatedItem);
        });
      });

      if (topContainerRef.current && bottomContainerRef.current) {
        const duration =
          speed === "fast" ? "7s" : speed === "normal" ? "10s" : "15s";
        topContainerRef.current.style.setProperty(
          "--animation-duration",
          duration
        );
        bottomContainerRef.current.style.setProperty(
          "--animation-duration",
          duration
        );
        topContainerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
        bottomContainerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }

      setStart(true);
    }
  }

  const SliderContent = ({ items }: { items: Project[] }) => (
    <>
      {items.map((item, idx) => (
        <li key={idx}>
          <Card className="bg-neutral-800 min-w-56 min-h-fit">
            <Link href={item.link} target="_blank" rel="noreferrer">
              <CardContent className="px-4 pb-2">
                <Image
                  width={200}
                  height={200}
                  className="w-full h-32 object-cover rounded-b-lg bg-[#FFFFFF]"
                  src={item.imageUrl}
                  alt={`${item.title} project preview`}
                />
              </CardContent>
            </Link>
            <CardFooter className="px-4 pb-4 flex-col">
              <CardContent className="flex items-center justify-between w-full p-0">
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Image
                          className="rounded-full border border-white"
                          src={item.createrDetails.img || "/images/owner.png"}
                          alt="NimAi"
                          width={24}
                          height={24}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.createrDetails.name || "Sahil Kumar Dev"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <CardTitle className="flex items-center gap-2 text-gray-200 text-base font-medium line-clamp-1">
                    {item.title}
                  </CardTitle>
                </div>
              </CardContent>
            </CardFooter>
          </Card>
        </li>
      ))}
    </>
  );

  return (
    <div className={cn("space-y-7 min-w-full max-w-5xl py-8 md:py-2", className)}>
      <div
        ref={topContainerRef}
        className="scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_30%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <ul
          ref={topScrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-7 flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          <SliderContent items={topShuffled} />
        </ul>
      </div>

      <div
        ref={bottomContainerRef}
        className="scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_30%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <ul
          ref={bottomScrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-7 flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          <SliderContent items={bottomShuffled} />
        </ul>
      </div>
    </div>
  );
};

export default ProjectSlider;
