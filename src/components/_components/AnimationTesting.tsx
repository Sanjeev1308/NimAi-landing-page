"use client";
import React, { useEffect, useState } from "react";
import "./AnimationTesting.css";
// import defaultImage from "@/assets/Default.png";
import Image from "next/image";

const AnimationTesting: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalDuration = 8000; // Complete orbit in 8 seconds
    const framesPerSecond = 60;
    const degreesPerFrame = 360 / ((totalDuration / 1000) * framesPerSecond);

    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => {
        const newRotation = (prevRotation + degreesPerFrame) % 360;

        // Determine which service is active based on rotation angle
        // Adjusted ranges so services activate when dot actually reaches them
        // Top (service 1): 340-360 or 0-20
        // Right (service 2): 70-110
        // Bottom (service 3): 160-200
        // Left (service 4): 250-290
        if (
          (newRotation >= 340 && newRotation < 360) ||
          (newRotation >= 0 && newRotation < 20)
        ) {
          setActiveService(1); // Top
        } else if (newRotation >= 70 && newRotation < 110) {
          setActiveService(2); // Right
        } else if (newRotation >= 160 && newRotation < 200) {
          setActiveService(3); // Bottom
        } else if (newRotation >= 250 && newRotation < 290) {
          setActiveService(4); // Left
        } else {
          setActiveService(null); // No service active
        }

        return newRotation;
      });
    }, 1000 / framesPerSecond);

    return () => clearInterval(rotateInterval);
  }, []);

  return (
    <>
      <div className="orbital-container">
        <div className="orbit border-#002133 dark:border-#64C8FF4D"></div>

        <div className="paint-gradient-fill"></div>
        {/* Rotating Dot */}
        <div
          className="rotating-dot"
          style={{
            transform: `translate(-50%, -50%) rotate(${
              rotation - 90
            }deg) translateX(${isMobile ? 115 : 150}px)`,
          }}
        />

        {/* Services */}
        <div
          className={`service bg-black dark:bg-white service-1 ${
            activeService === 1 ? "active" : ""
          }`}
        >
          <div className="w-full h-auto flex justify-center">
            <Image
              src="/images/hero/data.png"
              alt="photo"
              width={500}
              height={300}
              className="w-[75%]  h-auto"
            />
          </div>

          <span className="service-label text-black dark:text-white">
            Data & AI
          </span>
        </div>

        <div
          className={`service bg-black dark:bg-white service-2 ${
            activeService === 2 ? "active" : ""
          }`}
        >
          <span className="service-icon">
            {" "}
            <div className="w-full h-auto flex justify-center">
              <Image
                src="/images/hero/cloud.png"
                alt="photo"
                width={800}
                height={600}
                className="w-[75%]  h-auto"
              />
            </div>
          </span>
          <span className="service-label">Cloud</span>
        </div>

        <div
          className={`service bg-black dark:bg-white service-3 ${
            activeService === 3 ? "active" : ""
          }`}
        >
          <span className="service-icon">
            {" "}
            <div className="w-full h-auto flex justify-center">
              <Image
                src="/images/hero/security.png"
                alt="photo"
                width={800}
                height={600}
                className="w-[75%]  h-auto"
              />
            </div>
          </span>
          <span className="service-label">Security</span>
        </div>

        <div
          className={`service bg-black dark:bg-white service-4 ${
            activeService === 4 ? "active" : ""
          }`}
        >
          <span className="service-icon">
            {" "}
            <div className="w-full h-auto flex justify-center">
              <Image
                src="/images/hero/modern.png"
                alt="photo"
                width={800}
                height={600}
                className="w-[70%]  h-auto"
              />
            </div>
          </span>
          <span className="service-label">Modern Work</span>
        </div>

        {/* Center core */}
        <div className="center-circle">
          <div
            className={`light-beam ${
              activeService ? "active beam-" + activeService : ""
            }`}
          ></div>

          <div className="w-full h-auto">
            <Image
              src="/images/hero/Default.png"
              alt="photo"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationTesting;
