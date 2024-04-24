import React, { useState, useEffect } from "react";
import banner from "../../../assets/images/aman.png";
import myFile from "../../../assets/cv/aman's cv.pdf";
// import "./Banner.css";

const Banner = () => {
  const [typingText, setTypingText] = useState("");
  const [index, setIndex] = useState(0);
  const texts = [
    "React Developer.",
    "Front End Developer.",
    "MERN Stack Developer.",
    "Responsive Web Designer.",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypingText(prevText => {
        const newIndex = (index + 1) % texts.length;
        const newText = texts[newIndex];
        setIndex(newIndex);
        return newText;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [index, texts]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 py-10 bg-[#2e424d]">
      <div className="pl-8 order-last lg:order-1">
        <div className="text-white">
          <h2 className="text-3xl lg:text-5xl py-2 font-semibold">
            Hi, I am
            <span className="text-[#98dad9] ml-2">Md.Shah Aman</span>
          </h2>
          <h2 className=" text-3xl lg:text-4xl  font-bold py-4">
            <span className="pr-4">A</span>
            {typingText}
          </h2>
          <p className="text-xl">
            Welcome! I am a motivated individual with a passion for learning and
            a knack for delivering top-notch results. With a positive attitude
            and a growth mindset, I thrive on challenges and am dedicated to
            making a meaningful contribution. Let us create something
            extraordinary together!
          </p>
          <div className="flex mt-8 gap-2">
            <button className="text-[#2e424d] hover:bg-[#98dad9] px-6 py-3 rounded-lg shadow-lg mt-4 bg-white font-medium">
              <a href="/contact" rel="noreferrer">
                HIRE ME
              </a>
            </button>
            <button className="text-[#2e424d] hover:bg-[#98dad9] px-6 py-3 rounded-lg shadow-lg mt-4 bg-white font-medium">
              <a href={myFile} download target="_blank" rel="noreferrer">
                RESUME
              </a>
            </button>
            <button className="text-[#2e424d] hover:bg-[#98dad9] px-6 py-3 rounded-lg shadow-lg mt-4 bg-white font-medium">
              <a href="/about" rel="noreferrer">
                ABOUT ME
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center order-1">
        <div className="mt-2 flex items-center">
          <div className="inner-shadow rounded-full p-3 headerImage">
            <img
              className="outer-shadow-0 rounded-full"
              src={banner}
              alt=""
              style={{
                width: "280px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;