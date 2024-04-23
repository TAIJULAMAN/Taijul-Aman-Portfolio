import { useState } from "react";

const About = () => {
  const abouts = [
    {
      id: 1,
      title: "Personal Information",
      description:
        "My name is Md Shah Aman Patwary,a dedicated front end developer based in Dhaka, Bangladesh, epitomizes passion and proficiency in the realm of web development. Hailing from Chandpur, my journey into coding was ignited by an innate fascination with technology.My forte lies in crafting seamless and visually appealing web experiences, transforming design concepts into user friendly interfaces. With a commitment to staying abreast of industry trends and a penchant for innovation, i can consistently delivers exceptional work.Beyond my technical skills, i am characterized by my collaborative spirit and commitment to excellence. working  as part of a team, i approaches each project with enthusiasm and a relentless pursuit of perfection.my unwavering dedication to my craft and my passion for pushing the boundaries of what is possible on the web position as a rising talent in the field of front end development.",
      image: "https://i.ibb.co/TryMX5V/1645327743217-Copy.jpg",
      category: "personal",
    },
    {
      id: 2,
      title: "Educational History",
      description:
        "I completed my Secondary School Certificate (SSC) in 2011 with a perfect GPA of 5.00, specializing in the science group. Following this, I pursued my Higher School Certificate (HSC) in the science group, achieving another perfect GPA of 5.00 upon completion in 2013. Building upon my foundation in science, I then embarked on a journey in computer science and engineering. In 2020, I proudly completed my Honors degree in Computer Science and Engineering, earning a commendable CGPA of 3.22. These educational milestones have equipped me with a strong academic background and prepared me for a fulfilling career in the field of technology.",
      image:
        "https://i.ibb.co/BCnqvKb/61559968-2191107360925186-4531266329222578176-n.jpg",
      category: "education",
    },
    {
      id: 3,
      title: "About My Hobby",
      description:
        " Alongside my passion for programming, I find joy in engaging in diverse hobbies that enrich my life.One of my favorite pastimes is playing cricket. On the field, i exhibit not only my physical prowess but also my competitive spirit and teamwork skills. Cricket serves as a welcomed break from the digital world, allowing me to connect with friends, enjoy the outdoors, and stay active.",
      image:
        "https://i.ibb.co/0n27TxS/61700595-2188097574559498-8872263631547400192-n.jpg",
      category: "hobby",
    },
  ];
  const [toggle, setToggle] = useState("personal");

  return (
    <div className="bg-[#2f424d] flex flex-col justify-center items-center pt-10 px-4 relative">
      <div className="relative flex flex-col w-full mx-w-[1100px] md:flex-col justify-between items-center gap-3 mt-10 md:mt-5">
        <h1 className="font-bold text-4xl text-center text-[#98dad9] uppercase">
          About Me
        </h1>
        <p className="font-medium text-lg text-center text-white mb-10">
           You can find a brief introduction about myself along with my educational background and personal interests. I have included some key details to give visitors an overview of who I am and what I am passionate about outside of coding.
        </p>
        <section className="flex font-medium text-xl gap-10">
          <div
            className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#98dad9]"
            onClick={() => setToggle("personal")}
          >
            PERSONAL
          </div>
          <div
            className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#98dad9]"
            onClick={() => setToggle("education")}
          >
            EDUCATION
          </div>
          <div
            className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#98dad9]"
            onClick={() => setToggle("hobby")}
          >
            HOBBY
          </div>
        </section>
        <section className="overflow-hidden py-5 bg-[#2f424d] xl:mr-6">
          <div className="container">
            {abouts
              .filter((item) => item.category === toggle)
              .map((about) => (
                <div
                  key={about.id}
                  className="flex flex-wrap items-center justify-center"
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative z-10 xl:w-8/12 mx-auto py-10">
                      <img
                        src={about.image}
                        alt=""
                        className=" rounded-lg w-[500px] h-[400px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div className="mt-10 lg:mt-0">
                      <h2 className="mb-5 text-3xl font-semibold text-[#98dad9]  sm:text-[40px]/[48px]">
                        {about.title}
                      </h2>
                      <p className="mb-5 text-white">{about.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
