import banner from "../../../assets/images/aman.png";
import resume from "../../../../public/Aman Resume.pdf";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  px-[20px] md:px-[100px] lg:px-[100px]  pt-10 pb-5 bg-[#2e424d]">
      <div className="order-last lg:order-1">
        <div className="text-white">
          <h2 className="text-xl md:text-3xl lg:text-xl py-2 font-semibold">
            Hi, I am
            <span className="text-[#98dad9] ml-2"> Shah Aman</span>
          </h2>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold py-4">
            A Frontend Web Developer
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
          <div className="flex mt-5 md:mt-10 gap-2">
            <Link to="/contact" rel="noreferrer">
              <button className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg bg-white text-sm md:text-xl font-semibold">
                HIRE ME
              </button>
            </Link>
            <Link href={resume} download target="_blank" rel="noreferrer">
              <button className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg bg-white text-sm md:text-xl font-semibold">
                RESUME
              </button>
            </Link>
            <Link to="/about" rel="noreferrer">
              <button className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg bg-white text-sm md:text-xl font-semibold">
                ABOUT ME
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end order-1">
        <div className=" flex items-center">
          <div className="inner-shadow rounded-full p-3 headerImage">
            <img
              className="shadow-lg rounded-lg"
              loading="lazy"
              src={banner}
              alt=""
              style={{
                width: "350px",
                height: "410px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
