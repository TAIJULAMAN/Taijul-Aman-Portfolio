import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col text-white bg-[#2e424d]  justify-center pt-10 pb-5 text-center">
      <h1 className="uppercase font-semibold text-3xl text-[#98dad9]">
        Md. Shah Aman Patwary
      </h1>
      <p className="font-sans">Email: mdshahamanpatwary@gmail.com</p>
      <div className="flex gap-5 py-5 justify-center items-center">
      <FaGithubSquare className="w-10 h-10"></FaGithubSquare>
      <FaLinkedin  className="w-10 h-10"></FaLinkedin>
      <FaFacebookSquare  className="w-10 h-10"></FaFacebookSquare>
      <FaHashnode className="w-10 h-10"></FaHashnode>

      </div>
      <p >
        {"\u00a9"} {new Date().getFullYear()} All right reserved by Shah Aman.{" "}
      </p>
    </div>
  );
};

export default Footer;
