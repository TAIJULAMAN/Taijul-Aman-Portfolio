import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[20px] md:px-[100px] flex flex-col text-white bg-[#2e424d]  justify-center pt-10 pb-5 text-center">
      <h1 className="uppercase font-semibold text-xl md:text-3xl text-[#98dad9]">
        Md. Shah Aman Patwary
      </h1>
      <p className="font-sans">Email: mdshahamanpatwary@gmail.com</p>
      <div className="flex gap-5 py-5 justify-center items-center">
       <Link to="https://github.com/TAIJULAMAN"  target="_blank">
       <FaGithubSquare className="w-10 h-10"></FaGithubSquare>
       </Link>
       <Link to="https://www.linkedin.com/in/shahamanpatwary/"  target="_blank">
       <FaLinkedin  className="w-10 h-10"></FaLinkedin>
       </Link>
      <Link to="https://www.facebook.com/taijulamanbsl/"  target="_blank">
      <FaFacebookSquare  className="w-10 h-10"></FaFacebookSquare>
      </Link>
      <Link to="https://hashnode.com/@ShahAman"  target="_blank">
      <FaHashnode className="w-10 h-10"></FaHashnode>
      </Link>
      

      </div>
      <p >
        {"\u00a9"} {new Date().getFullYear()} All right reserved by Shah Aman.{" "}
      </p>
    </div>
  );
};

export default Footer;
