import { AnimatedButton } from "./_components/AnimatedButton";
import CustomButton from "./_components/CustomButton";
// import ServiceItem from "./_components/ServiceCard";
import { Cover } from "./ui/cover";
import { TextScramble } from "./ui/text-scramble";
// import OrbitalServices from "./_components/HeroAnimation";
import AnimationTesting from "./_components/AnimationTesting";

const services = ["Cloud", "Data and AI", "Security", "Modern Work"];

const HeroSection = () => {
  return (
    <main className="mt-14 lg:mt-15 space-y-4 lg:space-y-8">
      <div className=" flex flex-col lg:flex-row sm:flex-col sm:justify-center">
        <div className="lg:w-[60%]">
          <h1 className="text-2xl md:text-6xl font-semibold max-w-7xl mx-auto md:text-center relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-10 text-center">
            <Cover>
              <TextScramble duration={2} characterSet="ZBVJBDFVZJFJSBVDKBK">
                Design Intelligent Cloud Solution
              </TextScramble>
            </Cover>
            <Cover>
              <TextScramble duration={2} characterSet="ZBVJBDFVZJFJSBVDKBK">
                At NimAi
              </TextScramble>
            </Cover>
            <br />
            {/* <span className="text-lg md:text-2xl font-normal text-gray-600 dark:text-gray-400">
          that power modern infrastructure with precision and reliability.
        </span> */}
          </h1>

          <div className="md:flex md:justify-center items-center gap-x-4 mt-6">
            <div className="flex items-center gap-x-4 md:gap-x-3 w-full md:w-fit">
              {/* <CustomButton
            target="_blank"
            variant={"outline"}
            className="py-7 px-10 md:px-7 mb-4 md:mb-0"
            link="https://www.linkedin.com/in/axis-buddy/"
          >
            <FaLinkedin size={32} />
          </CustomButton> */}

              <CustomButton
                linkClassName="w-full md:w-fit"
                className="py-7 px-10 md:px-16 md:text-xl w-full mb-4 md:mb-0"
                link="tel:8960973119"
              >
                Book a Call
              </CustomButton>
            </div>
            <div className="flex items-center gap-x-4 md:gap-x-3 w-full md:w-fit sm:ml-5">
              <AnimatedButton>Explore Now</AnimatedButton>
            </div>

            {/* <CustomButton
            target="_blank"
            link="https://wa.me/918960973119"
            className="py-7 px-10 md:px-7 mb-4 md:mb-0"
          >
            <FaWhatsapp />
          </CustomButton> */}
          </div>
        </div>
        <div className="lg:w-[40%]  lg:mt-1 w-[100%] flex justify-center sm:mt-8">
          {/* <OrbitalServices /> */}
          <AnimationTesting />
        </div>
      </div>

      {/* <div
        className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 items-center text-left md:justify-items-center md:mx-auto pt-6 md:mt-16"
        id="service"
      >
        {services.map((service, index) => (
          <ServiceItem key={index} text={service} />
        ))}
      </div> */}
    </main>
  );
};

export default HeroSection;
