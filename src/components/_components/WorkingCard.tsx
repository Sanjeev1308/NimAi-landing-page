import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import ShineBorder from "@/components/ui/shine-border";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const WorkCard = ({
  imageUrl,
  title,
  link,
  description,
  createrDetails,
}: {
  imageUrl: string;
  title: string;
  link: string;
  description: string;
  createrDetails: { img: string; name: string };
  idx: number;
}) => (
  <BlurFade inView className="bg-transparent">
    <ShineBorder
      borderRadius={10}
      className="md:shadow-xl p-0"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <Card className="bg-neutral-800">
        <Link href={link} target="_blank" rel="noreferrer">
          <CardContent className="px-4 pb-2">
            <Image
              width={200}
              height={200}
              className="w-full h-56 object-cover rounded-b-lg bg-[#FFFFFF]"
              src={imageUrl}
              alt={`${title} project preview`}
            />
          </CardContent>
        </Link>
        <CardFooter className="px-4 pb-0 flex-col">
          <CardContent className="flex items-center justify-between w-full p-0">
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      className="rounded-full border border-white"
                      src={createrDetails.img || "/images/owner.png"}
                      alt="Nim Ai"
                      width={24}
                      height={24}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{createrDetails.name || "Sahil Kumar Dev"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <CardTitle className="flex items-center gap-2 text-gray-200 text-xl font-medium line-clamp-1">
                {title}
              </CardTitle>
            </div>
            <Link href={link} target="_blank" rel="noreferrer">
              <Button className="group text-light-chai" variant="link">
                Live
                <ArrowRight
                  className="hover:opacity-60 underline transition-transform group-hover:translate-x-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </CardContent>
          <CardFooter className="w-full px-0 line-clamp-2 text-gray-300">
            {description}
          </CardFooter>
        </CardFooter>
      </Card>
    </ShineBorder>
  </BlurFade>
);
