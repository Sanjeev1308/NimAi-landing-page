"use client";

import { PiCheckBold } from "react-icons/pi";
import { FaCloud, FaBrain, FaShieldAlt, FaBriefcase } from "react-icons/fa";
import BoxReveal from "@/components/magicui/box-reveal";
import { TextShimmerWave } from "../ui/text-shimmer-wave";

const iconMap: { [key: string]: React.ReactNode } = {
  Cloud: <FaCloud className="text-xl text-blue-500" />,
  "Data and AI": <FaBrain className="text-xl text-purple-500" />,
  Security: <FaShieldAlt className="text-xl text-green-500" />,
  "Modern Work": <FaBriefcase className="text-xl text-orange-500" />,
};

const ServiceItem = ({ text }: { text: string }) => (
  <BoxReveal boxColor={"#ff851a"} duration={0.5}>
    <div className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
      {iconMap[text] || <PiCheckBold className="text-xl text-blue-500" />}
      <TextShimmerWave
        duration={3}
        spread={1}
        zDistance={1}
        scaleDistance={1.1}
        rotateYDistance={20}
      >
        {text}
      </TextShimmerWave>
    </div>
  </BoxReveal>
);

export default ServiceItem;
