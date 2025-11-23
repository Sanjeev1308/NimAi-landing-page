import { WordPullUpDemo } from "./demos/word-pull-up-demo";
import { ServiceSlider } from "./_components/ServiceSlider";

const AboutUs = () => {
  return (
    <section>
      <WordPullUpDemo
        heading="Cloud, AI, Security & Modern Work Solutions"
        description="Comprehensive services designed to transform your business and drive growth"
      />

      <ServiceSlider speed="slow" pauseOnHover={true} className="mt-10" />
    </section>
  );
};

export default AboutUs;
