import { Card, CardContent, CardTitle } from "./ui/card";
import Link from "next/link";

const Footer = () => {
  return (
    <Card className="rounded-none bg-opacity-80 border-none outline outline-[0.1px] md:px-0 md:mx-auto outline-gray-100/40 ">
      <CardContent className="flex flex-col gap-2 md:flex-row md:justify-between py-6 items-center  ">
        <CardTitle className="flex md:justify-center gap-x-1 font-normal">
          © {new Date().getFullYear()} NimAi. All Rights Reserved.
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default Footer;
