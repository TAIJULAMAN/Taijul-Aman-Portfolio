import banner from "../../../assets/images/aman.png";
import resume from "/Aman's Resume.pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-[20px] md:px-[100px] lg:px-[100px] pt-10 pb-5 bg-[#2e424d]">
      {/* Text Section */}
      <motion.div
        className="order-last lg:order-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-white">
          <motion.h2
            className="text-xl md:text-3xl lg:text-xl py-2 font-semibold"
            variants={childVariants}
          >
            Hi, I am <span className="text-[#98dad9] ml-2"> Shah Aman</span>
          </motion.h2>
          <motion.h2
            className="text-xl md:text-3xl lg:text-4xl font-bold py-4"
            variants={childVariants}
          >
            A Frontend Web Developer
          </motion.h2>
          <motion.p className="text-xl" variants={childVariants}>
            Welcome! I am excited to thrive in a dynamic and challenging
            environment where I can continuously develop my skills through both
            individual initiative and collaborative teamwork. My goal is to make
            a meaningful impact on the organization while pursuing personal
            growth driven by passion, creativity, and a commitment to
            excellence.
          </motion.p>
          <motion.div
            className="flex mt-5 md:mt-10 gap-2"
            variants={childVariants}
          >
            <Link to="/contact" rel="noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg bg-white text-sm md:text-xl font-semibold"
              >
                HIRE ME
              </motion.button>
            </Link>
            <a href={resume} download target="_blank" rel="noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg bg-white text-sm md:text-xl font-semibold"
              >
                RESUME
              </motion.button>
            </a>
            <Link to="/about" rel="noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg bg-white text-sm md:text-xl font-semibold"
              >
                ABOUT ME
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex justify-end order-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div
          className="inner-shadow rounded-full p-3 headerImage"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img
            className="shadow-lg rounded-lg"
            loading="lazy"
            src={banner}
            alt="Portrait of Shah Aman"
            style={{
              width: "350px",
              height: "380px",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
