import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { styles } from "../styles";
import myImage from "../assets/aditya/me.jpg";

const Hero = () => {
  return (
    <section
      className={`mt-[76px] relative w-full h-auto flex flex-col `}
    >
      {/* Text Section */}
      <div className={` ${styles.paddingX} flex flex-row gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Adrian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* Spline Model */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <Spline scene="https://prod.spline.design/aD7eegTvJhhZ7AdK/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
