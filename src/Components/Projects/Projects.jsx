import PropTypes from "prop-types";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ openModal, setOpenModal }) => {
  const projects = [
    {
      id: 1,
      title: "Bicycle Odyssey",
      git: "https://github.com/TAIJULAMAN/BICYCLE-ODYSSEY-CLIENT",
      description:
        "A manufacturer company that produces Bicycle parts. A user can purchase cycle parts, seeorders, pay via master card, and the admin can manage user, product, and payment system andadd products and make an admin.",
      image: "https://i.ibb.co/YbhrCkn/Bicycle-Odyssey.png",
      tags: ["React Js", "Bootstrap"],
      category: "Full Stack",
      link: "https://car-shop-client.web.app/",
    },
    {
      id: 8,
      title: "Japan Travels Agency",
      git: "https://github.com/TAIJULAMAN/JapanTravel",
      description:
        "Welcome to Japan-travel, your ultimate guide to exploring the beauty and culture of Japan. From historic temples to modern skyscrapers, we bring you curated travel experiences across Japan's diverse landscapes.",
      image: "https://i.ibb.co.com/z7dLHrw/abc.png",
      tags: ["React Js", "Node Js", "tailwind"],
      category: "Full Stack",
      link: "https://japantravelagencyandtour.com/",
    },
    {
      id: 9,
      title: "Ecommerce Web",
      git: "https://github.com/TAIJULAMAN/EcommerceWeb-customerSide",
      description:
        "This e-commerce auction platform offers Pallet, Truckload, and Case products, with options for Auction and Day-wise listings. Users can engage in real-time bidding or purchase products based on daily availability, creating a versatile shopping experience. The responsive design ensures seamless navigation and interactions across all devices.",
      image: "https://i.ibb.co.com/GncfZkq/ew.png",
      tags: ["React Js", "Redux", "tailwind"],
      category: "Full Stack",
      link: "https://ecommerce-web-customer-side.vercel.app/",
    },
    {
      id: 10,
      title: "Flight Ticket System",
      git: "https://github.com/TAIJULAMAN/Flight-Ticket-System",
      description:
        "FTS is an intuitive online platform for booking flight tickets. It allows users to search for flights, compare prices, and easily make reservations, streamlining the travel planning process. The user-friendly interface enhances the overall booking experience.",
      image: "https://i.ibb.co.com/9hd7jj2/fts.png",
      tags: ["Next Js", "Redux", "tailwind"],
      category: "Full Stack",
      link: "https://fts-travo.vercel.app/",
    },
    {
      id: 2,
      title: "Classroom",
      git: "https://github.com/TAIJULAMAN/classroom",
      description:
        "Classroom is your gateway to a world of limitless learning possibilities. With our cutting-edge eLearning platform, you can explore a vast library of courses, from academic subjects to practical skills, all designed to help you achieve your goals.",
      image: "https://i.ibb.co/qCPQ61Y/Classroom.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://classroom-three-beta.vercel.app/",
    },
    {
      id: 3,
      title: "Beat Store",
      git: "https://github.com/TAIJULAMAN/audio-wares",
      description:
        "your premier destination for all things headphones. We specialize in providing top-quality headphones that cater to every audio enthusiast's needs and preferences. Whether you're a music lover, a gamer, or a professional audio engineer, we have the perfect pair of headphones for you.",
      image: "https://i.ibb.co/z7h7LVw/Beat-Store.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://audio-wares.vercel.app/",
    },
    {
      id: 4,
      title: "Medi Care",
      git: "https://github.com/TAIJULAMAN/medi-care",
      description:
        "A trusted online gateway to quality healthcare services. At MediCare, we prioritize your well-being by providing comprehensive information and resources to meet your healthcare needs..",
      image: "https://i.ibb.co/3StRM8w/Medi-Care.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://medi-care-self.vercel.app/",
    },
    {
      id: 5,
      title: "BBA CHA WALA",
      git: "https://github.com/TAIJULAMAN/Streamy-mug",
      description:
        " your ultimate destination for exquisite coffee and tea experiences.we believe that every sip tells a story, and we're dedicated to bringing you the finest selection of handcrafted beverages that cater to every palate and occasion.",
      image: "https://i.ibb.co/PCH7f0P/BBA-CHAWALA.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://streamy-mug.vercel.app/",
    },
    {
      id: 6,
      title: "Mama Food",
      git: "https://github.com/TAIJULAMAN/mama-food",
      description:
        "we understand the importance of wholesome, nutritious food that nourishes both body and soul. That's why we're dedicated to bringing you a diverse menu of mouthwatering dishes crafted with love and care, just like Mama used to make.",
      image: "https://i.ibb.co/NKdqgDK/MAMA-FOOD.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://mama-food.vercel.app/",
    },
    {
      id: 7,
      title: "Tour Bazz",
      git: "https://github.com/TAIJULAMAN/nomads-tour",
      description:
        "we specialize in curating bespoke travel itineraries that cater to every adventurer's wanderlust. Whether you're dreaming of exploring exotic destinations, embarking on thrilling adventures, or immersing yourself in cultural treasures, we're here to turn your travel dreams into reality.",
      image: "https://i.ibb.co/YW8B3SS/Tour-Bazz.png",
      tags: ["React Js", "Tailwind Css"],
      category: "Static Site",
      link: "https://nomads-tour.vercel.app/",
    },
    
  ];

  const [toggle, setToggle] = useState("all");
  return (
    <div className=" overflow-x-hidden bg-[#2f424d] flex flex-col justify-center items-center px-[20px] md:px-[120px] lg:[120px] relative pt-16 md:pt-32">
      <div className="relative flex flex-col w-full mx-w-[1100px] md:flex-col justify-between items-center gap-3 mt-10 md:mt-5">
        <h1 className="font-bold text-4xl text-center text-[#98dad9] uppercase">
          My Projects
        </h1>
        <p className="font-medium text-lg text-center lg:text-center text-white mb-5">
          I have worked on a wide range of projects. From static to dynamic web
          apps. Here are some of my projects.
        </p>
        <section className="flex font-medium text-xl gap-2">
          <div
            className="text-[#2e424d] hover:bg-[#98dad9] px-5 py-2 md:py-3 rounded-lg shadow-lg mt-4 bg-white text-sm md:text-xl font-semibold"
            onClick={() => setToggle("all")}
          >
            All
          </div>
          <div
            className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg mt-4 bg-white text-sm md:text-xl font-semibold"
            onClick={() => setToggle("Full Stack")}
          >
            Full Stack
          </div>
          <div
            className="text-[#2e424d] hover:bg-[#98dad9] px-2 md:px-5 py-2 md:py-3 rounded-lg shadow-lg mt-4 bg-white text-sm md:text-xl font-semibold"
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
