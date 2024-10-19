import { useState, useEffect } from "react";
import banner from "../../../assets/images/aman.png";
import resume from "../../../../public/Aman Resume.pdf";

const Banner = () => {
  const [typingText, setTypingText] = useState("");
  const [index, setIndex] = useState(0);
  const texts = [
    "React Js Developer.",
    "Front End Developer.",
    "MERN Stack Developer.",
    "Responsive Web Designer.",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypingText(() => {
        const newIndex = (index + 1) % texts.length;
        const newText = texts[newIndex];
        setIndex(newIndex);
        return newText;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [index, texts]);

  return (
    <div className="relative overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  px-[20px] md:px-[100px] lg:px-[100px]  pt-16 md:pt-32 bg-[#2e424d]">
      <div className="order-last lg:order-1">
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl lg:text-5xl py-2 font-semibold">
            Hi, I am
            <span className="text-[#98dad9] ml-2">Md.Shah Aman</span>
          </h2>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold py-4">
            <span className="pr-4">A</span>
            {typingText}
          </h2>
          <p className="text-xl">
            Welcome! I am excited to thrive in a dynamic and challenging
            environment where I can continuously develop my skills through both
            individual initiative and collaborative teamwork. My goal is to make
            a meaningful impact on the organization while pursuing personal
            growth driven by passion, creativity, and a commitment to
            excellence. With a strong focus on innovation and resilience, I look
            forward to contributing to projects that inspire progress and
            success.
          </p>
          <div className="flex mt-10 gap-2">
            <button className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg mt-4 bg-white text-sm md:text-xl font-semibold">
              <a href="/contact" rel="noreferrer">
                HIRE ME
              </a>
            </button>
            <button className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg mt-4 bg-white text-sm md:text-xl font-semibold">
              <a href={resume} download target="_blank" rel="noreferrer">
                RESUME
              </a>
            </button>
            <button className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg mt-4 bg-white text-sm md:text-xl font-semibold">
              <a href="/about" rel="noreferrer">
                ABOUT ME
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end order-1">
        <div className=" flex items-center">
          <div className="inner-shadow rounded-full p-3 headerImage">
            <img
              className="outer-shadow-5 rounded-lg"
              src={banner}
              alt=""
              style={{
                width: "350px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
