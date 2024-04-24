import PropTypes from "prop-types";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ openModal, setOpenModal }) => {
  const projects = [
    {
      id: 1,
      title: "Global Path Liquidators(user)",
      date: "Jan 2024 - April 2024",
      description:
        "Global Path Liquidators, an e-commerce platform, offers a diverse range of product categories, featuring pallet goods and beyond. With a unique twist, the platform hosts live auctions for select items, adding excitement and engagement for users. Additionally, they organize products into daily themed categories, providing customers with a curated shopping experience tailored to their interests and preferences.",
      image: "https://i.ibb.co/xgvhbTS/Global-Path-Liquidators.png",
      tags: ["React Js", "Typescript", "Redux"],
      category: "Full Stack",
      link: "https://global-path-liquidators-user.netlify.app/",
      member: [
        {
          name: "Md Shah Aman",
          img: "https://i.ibb.co/JcKp59Q/aman.jpg",
        },
        {
          name: "Mayin Uddin",
          img: "https://i.ibb.co/Nt79T4f/mayin.jpg",
        },
        {
          name: "khorshed Alam",
          img: "https://i.ibb.co/gZMYTSP/d3.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Global Path Liquidators(admin)",
      date: "Jan 2024 - April 2024",
      description:
        "Global Path Liquidators, an e-commerce platform, offers a diverse range of product categories, featuring pallet goods and beyond. With a unique twist, the platform hosts live auctions for select items, adding excitement and engagement for users. Additionally, they organize products into daily themed categories, providing customers with a curated shopping experience tailored to their interests and preferences.",
      image: "https://i.ibb.co/rk09Vq3/global-path-liquidators-1.png",
      tags: ["React Js", "Typescript", "Redux"],
      category: "Full Stack",
      link: "https://global-path-liquidators-admindt.netlify.app/",
      member: [
        {
          name: "Md Shah Aman",
          img: "https://i.ibb.co/JcKp59Q/aman.jpg",
        },
        {
          name: "Mayin Uddin",
          img: "https://i.ibb.co/Nt79T4f/mayin.jpg",
        },
        {
          name: "khorshed Alam",
          img: "https://i.ibb.co/gZMYTSP/d3.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Bicycle Odyssey",
      date: "Jun 2023 - Jul 2023",
      description:
        "A manufacturer company that produces Bicycle parts. A user can purchase cycle parts, seeorders, pay via master card, and the admin can manage user, product, and payment system andadd products and make an admin.",
      image: "https://i.ibb.co/YbhrCkn/Bicycle-Odyssey.png",
      tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Bootstrap"],
      category: "Mern Stack",
      link: "https://car-shop-client.web.app/",
    },
    {
      id: 4,
      title: "Classroom",
      date: "Apr 2023 - May 2023",
      description:
        "Classroom is your gateway to a world of limitless learning possibilities. With our cutting-edge eLearning platform, you can explore a vast library of courses, from academic subjects to practical skills, all designed to help you achieve your goals.",
      image:
        "https://i.ibb.co/qCPQ61Y/Classroom.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://classroom-three-beta.vercel.app/",
    
    },
    {
      id: 5,
      title: "Beat Store",
      date: "Apr 2023 - May 2023",
      description:
        "your premier destination for all things headphones. We specialize in providing top-quality headphones that cater to every audio enthusiast's needs and preferences. Whether you're a music lover, a gamer, or a professional audio engineer, we have the perfect pair of headphones for you.",
      image:
        "https://i.ibb.co/z7h7LVw/Beat-Store.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://audio-wares.vercel.app/",
    },
    {
      id: 6,
      title: "Medi Care",
      date: "Apr 2023 - May 2023",
      description:
        "A trusted online gateway to quality healthcare services. At MediCare, we prioritize your well-being by providing comprehensive information and resources to meet your healthcare needs..",
      image:
        "https://i.ibb.co/3StRM8w/Medi-Care.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://medi-care-self.vercel.app/",
    },
    {
      id: 7,
      title: "BBA CHA WALA",
      date: "Apr 2023 - May 2023",
      description:
        " your ultimate destination for exquisite coffee and tea experiences.we believe that every sip tells a story, and we're dedicated to bringing you the finest selection of handcrafted beverages that cater to every palate and occasion.",
      image:
        "https://i.ibb.co/PCH7f0P/BBA-CHAWALA.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://streamy-mug.vercel.app/",
    },
    {
      id: 8,
      title: "Mama Food",
      date: "Apr 2023 - May 2023",
      description:
        "we understand the importance of wholesome, nutritious food that nourishes both body and soul. That's why we're dedicated to bringing you a diverse menu of mouthwatering dishes crafted with love and care, just like Mama used to make.",
      image:
        "https://i.ibb.co/NKdqgDK/MAMA-FOOD.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://mama-food.vercel.app/",
    },
    {
      id: 8,
      title: "Tour Bazz",
      date: "Apr 2023 - May 2023",
      description:
        "we specialize in curating bespoke travel itineraries that cater to every adventurer's wanderlust. Whether you're dreaming of exploring exotic destinations, embarking on thrilling adventures, or immersing yourself in cultural treasures, we're here to turn your travel dreams into reality.",
      image:
        "https://i.ibb.co/YW8B3SS/Tour-Bazz.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://nomads-tour.vercel.app/",
    }
  ];

  const [toggle, setToggle] = useState("all");
  return (
    <div className="bg-[#2f424d] flex flex-col justify-center items-center pt-10 px-4 relative">
      <div className="relative flex flex-col w-full mx-w-[1100px] md:flex-col justify-between items-center gap-3 mt-10 md:mt-5">
        <h1 className="font-bold text-4xl text-center text-[#98dad9] uppercase">
          Projects
        </h1>
        <p className="font-medium text-lg text-center text-white mb-10">
          I have worked on a wide range of projects. From static to dynamic web
          apps. Here are some of my projects.
        </p>
        <section className="flex font-medium text-xl gap-10">
          <div
            className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#98dad9]"
            onClick={() => setToggle("all")}
          >
            ALL
          </div>
          <div
            className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#98dad9]"
            onClick={() => setToggle("Full Stack")}
          >
            Full Stack
          </div>
          <div
            className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#98dad9]"
            onClick={() => setToggle("Mern Stack")}
          >
            Mern Stack
          </div>
          <div
            className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#98dad9]"
            onClick={() => setToggle("Static Site")}
          >
            Static
          </div>
        </section>

        <div className="flex justify-center items-center gap-[28px] mt-10 flex-wrap">
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  openModal: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Projects;
