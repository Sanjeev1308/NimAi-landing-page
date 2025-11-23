"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  label: string;
  suffix?: string;
};

const stats: StatItem[] = [
  { value: 50, label: "Projects Completed", suffix: "+" },
  { value: 30, label: "Happy Clients", suffix: "+" },
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 100, label: "Team Members", suffix: "%" },
];

const AnimatedCounter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const increment = value / 50;
          const timer = setInterval(() => {
            setCount((prev) => {
              const next = prev + increment;
              if (next >= value) {
                clearInterval(timer);
                return value;
              }
              return next;
            });
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector(`[data-counter="${value}"]`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span data-counter={value} className="text-4xl md:text-6xl font-bold">
      {Math.floor(count)}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-8 md:py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl md:text-center font-medium" >
          Our Impact
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 md:mb-16">
          Trusted by businesses worldwide to deliver excellence
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-100 dark:bg-accent hover:shadow-lg transition-shadow duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 mt-3 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;