import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const AboutData = [
    {
      id: 1,
      title: "Personal Information",
      description:
        "My name is Md Shah Aman Patwary, and I am a passionate and driven Frontend Developer based in Dhaka, Bangladesh. Originally from Chandpur, I discovered my love for technology early on, which ignited my journey into the dynamic world of web development. My expertise lies in creating responsive, user-focused, and visually captivating web applications. With a strong commitment to continuous learning and innovation, I am always eager to explore new technologies and push the boundaries of frontend development.",
      category: "personal",
      highlights: [
        "Focused on creating seamless user experiences with clean and efficient code.",
        "Dedicated to staying updated with the latest trends and tools in frontend development.",
        "Possess excellent problem-solving and teamwork skills.",
        "Passionate about sharing knowledge and contributing to the developer community.",
      ],
    },
    {
      id: 2,
      title: "Educational History",
      description:
        "I have a strong academic background in science and technology, which laid the foundation for my career in web development. My education reflects my dedication to learning and my ability to excel in technical disciplines.",
      category: "education",
      steps: [
        {
          id: 1,
          stepTitle: "Secondary School Certificate (SSC)",
          stepDescription:
            "Graduated in 2011 with a perfect GPA of 5.00, specializing in science. Developed a strong interest in technology and problem-solving during this time.",
        },
        {
          id: 2,
          stepTitle: "Higher School Certificate (HSC)",
          stepDescription:
            "Completed in 2013 with another perfect GPA of 5.00, further strengthening my knowledge in mathematics, physics, and computer science.",
        },
        {
          id: 3,
          stepTitle: "Honors in Computer Science and Engineering",
          stepDescription:
            "Earned a Bachelor's degree in 2020 with a CGPA of 3.22. Focused on core programming concepts, algorithms, and software development during my studies.",
        },
      ],
    },
    {
      id: 3,
      title: "Professional Experience",
      description:
        "Currently working as a Junior Web Developer since September 2023. My role involves developing responsive web applications, collaborating with designers to create pixel-perfect user interfaces, and optimizing websites for performance.",
      category: "experience",
      highlights: [
        "Translating design mockups into functional, interactive, and accessible web pages using React.js, Tailwind CSS, and modern JavaScript ES6+ features.",
        "Maintaining and enhancing the codebase for company projects, following best practices like code reviews and version control (Git).",
        "Working closely with backend developers to integrate APIs and ensure seamless functionality across the application stack.",
        "Implementing reusable and modular components to streamline development processes.",
      ],
    },
  ];

  const [toggle, setToggle] = useState("personal");

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="overflow-x-hidden px-[20px] md:px-[120px] bg-[#2f424d] flex flex-col justify-start md:justify-center items-start md:items-center pt-10 pb-5 relative">
      <motion.div
        className="relative flex flex-col w-full justify-between items-start md:items-center gap-3 mt-10 md:mt-5"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1
          className="font-bold text-3xl text-start md:text-center text-[#98dad9] uppercase"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="px-0 md:px-[150px] font-medium text-lg text-start md:text-center text-white mb-5"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          You can find a brief introduction about myself along with my
          educational background, professional experience, and personal
          interests. I have included some key details to give visitors an
          overview of who I am and what I am passionate about outside of coding.
        </motion.p>
        <section className="flex text-sm md:text-xl font-semibold gap-2">
          {["personal", "education", "experience"].map((category) => (
            <motion.div
              key={category}
              className={`text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg bg-white text-sm md:text-xl font-semibold ${
                toggle === category ? "bg-[#98dad9] text-[#2e424d]" : ""
              }`}
              onClick={() => setToggle(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.toUpperCase()}
            </motion.div>
          ))}
        </section>
      </motion.div>

      <motion.section
        className="overflow-hidden py-10 bg-[#2f424d]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.6 }}
      >
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <motion.div
              className="w-full lg:w-1/2"
              variants={slideIn}
              transition={{ delay: 0.8 }}
            >
              <div className="relative z-10 xl:w-8/12 mx-auto">
                <img
                  src="https://i.ibb.co/TryMX5V/1645327743217-Copy.jpg"
                  alt="my image"
                  className="hidden md:flex rounded-lg w-[500px] h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            {AboutData.filter((item) => item.category === toggle).map(
              (about) => (
                <motion.div
                  key={about.id}
                  className="w-full md:w-1/2 xl:w-5/12"
                  variants={fadeIn}
                  transition={{ delay: 0.9 }}
                >
                  <div>
                    <h2 className="mb-2 text-3xl font-semibold text-[#98dad9] sm:text-[40px]">
                      {about.title}
                    </h2>
                    <p className="mb-5 text-white">{about.description}</p>
                    {about.highlights && (
                      <ul className="list-disc ml-5 text-white">
                        {about.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    {about.steps && (
                      <div className="mt-5">
                        {about.steps.map((step) => (
                          <motion.div
                            key={step.id}
                            className="mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.2 * step.id,
                              duration: 0.8,
                            }}
                          >
                            <h3 className="text-xl font-bold text-[#98dad9]">
                              {step.stepTitle}
                            </h3>
                            <p className="text-white">{step.stepDescription}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
