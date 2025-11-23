import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  link?: string;
  target?: string;
  className?: string;
  linkClassName?: string;
  children: React.ReactNode;
}

const CustomButton = ({
  link,
  target,
  variant,
  children,
  className,
  linkClassName,
}: CustomButtonProps) => {
  return (
    <Link href={link || "/"} className={linkClassName} target={target}>
      <Button
        variant={variant}
        className={`${className}
          -mt-1 hover:bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)] border-2 transition duration-200 
          hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
          hover:dark:shadow-[1px_1px_rgba(255,255,255),1px_1px_rgba(255,255,255),1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_0px_0px_rgba(255,255,255)]
        `}
      >
        {children}
      </Button>
    </Link>
  );
};

export default CustomButton;
