import PropTypes from "prop-types";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ openModal, setOpenModal }) => {
  const projects = [
    {
      id: 11,
      title: "DecisionHub",
      date: "Jan 2024 - Dec 2023",
      description:
        "A Rule Builder application “Decision Hub” that empowers Business Analysts to create, save, and visualize decision strategies. Provide a no-code rule writing experience and visual representation to test these rules in real-time and observe the calculations at each step.",
      image:
        "https://github.com/rishavchanda/DecisionHub/raw/master/assets/testRule.jpg",
      tags: [
        "React Js",
        "PostgressSQL",
        "Node Js",
        "Express Js",
        "Redux",
        "React Flow",
      ],
      category: "web app",
      github: "https://github.com/rishavchanda/DecisionHub",
      webapp: "https://decisionhub.netlify.app/",
    },
    {
      id: 9,
      title: "Trackify",
      date: "Jun 2023 - Jul 2023",
      description:
        "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
      image:
        "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
      tags: [
        "Docker",
        "AWS",
        "DuckDNS",
        "Eslint",
        "Husky",
        "CI/CD",
        "React Js",
        "MongoDb",
        "Node Js",
        "Express Js",
        "Redux",
      ],
      category: "web app",
      github: "https://github.com/rishavchanda/Trackify",
      webapp: "https://trackify-management.netlify.app/",
    },
    {
      id: 0,
      title: "Podstream",
      date: "Apr 2023 - May 2023",
      description:
        "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
      image:
        "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
      tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
      category: "web app",
      github: "https://github.com/rishavchanda/Podstream",
      webapp: "https://podstream.netlify.app/",
      member: [
        {
          name: "Rishav Chanda",
          img: "https://avatars.githubusercontent.com/u/64485885?v=4",
          linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
          github: "https://github.com/rishavchanda/",
        },
        {
          name: "Upasana Chaudhuri",
          img: "https://avatars.githubusercontent.com/u/100614635?v=4",
          linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
          github: "https://github.com/upasana0710",
        },
      ],
    },
    {
      id: 1,
      title: "Vexa",
      date: "Oct 2022 - Jan 2023",
      description:
        "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
      image:
        "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
      tags: [
        "React Js",
        "MongoDb",
        "Node Js",
        "Express Js",
        "Redux",
        "NodeMailer",
      ],
      category: "web app",
      github: "https://github.com/rishavchanda/Project-Management-App",
      webapp: "https://vexa-app.netlify.app/",
    },
    {
      id: 2,
      title: "Brain Tumor Detection",
      date: "Jan 2023 - Mar 2023",
      description:
        "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
      image:
        "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
      tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
      category: "machine learning",
      github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
      webapp: "https://brain-tumor.netlify.app/",
      member: [
        {
          name: "Rishav Chanda",
          img: "https://avatars.githubusercontent.com/u/64485885?v=4",
          linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
          github: "https://github.com/rishavchanda/",
        },
        {
          name: "Upasana Chaudhuri",
          img: "https://avatars.githubusercontent.com/u/100614635?v=4",
          linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
          github: "https://github.com/upasana0710",
        },
      ],
    },
    {
      id: 3,
      title: "Buckoid",
      date: "Dec 2021 - Apr 2022",
      description:
        "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
      image:
        "https://camo.githubusercontent.com/3ad28aa710d18525f1fc87de056ed53c706d09979589bfd5a773df36653bad38/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
      tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
      category: "android app",
      github: "https://github.com/rishavchanda/Buckoid-Android-App",
      webapp:
        "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
    },
    {
      id: 10,
      title: "Job Finding App",
      date: "Jun 2023 - Jul 2023",
      description:
        "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
      image:
        "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
      tags: ["React Native", "JavaScript", "Axios"],
      category: "android app",
      github: "https://github.com/rishavchanda/Job-finder-App",
      webapp: "https://github.com/rishavchanda/Job-finder-App",
    },
    {
      id: 4,
      title: "Whatsapp Clone",
      date: "Jul 2021",
      description:
        "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
      tags: ["React Js", "Firebase", "Firestore", "Node JS"],
      category: "web app",
      github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
      webapp: "https://whatsapp-clone-rishav.web.app",
    },
    {
      id: 5,
      title: "Todo Web App",
      date: "Jun 2021",
      description:
        " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
      image:
        "https://camo.githubusercontent.com/84ac6ab6f378348ef28d8184062b7e9e3511a1252ae3966eaa49e8e998f732a7/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
      tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
      category: "web app",
      github: "https://github.com/rishavchanda/Todo-Web-App",
      webapp: "https://rishav-react-todo.netlify.app/",
    },
    {
      id: 6,
      title: "Breaking Bad",
      date: "Jun 2021",
      description:
        "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
      image:
        "https://camo.githubusercontent.com/937774368308a82419f53dd6eeb4a8675780e119636488b4e3cfe5d34859a72a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
      tags: ["React Js", "API", "Axios", "Node JS"],
      category: "web app",
      github: "https://github.com/rishavchanda/Breaking-Bad",
      webapp: "https://breaking-bad-webapp.netlify.app",
    },
    {
      id: 7,
      title: "Quiz App",
      date: "Dec 2020 - Jan 2021",
      description:
        "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
      tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
      category: "android app",
      github: "https://github.com/rishavchanda/Quiz-Earn",
      webapp: "https://github.com/rishavchanda/Quiz-Earn",
    },
    {
      id: 8,
      title: "Face Recognition",
      date: "Jan 2021",
      description:
        "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
      image:
        "https://dontrepeatyourself.org/media/face-recognition-with-python-dlib-and-deep-learning_cezKZBj.png",
      tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
      category: "machine learning",
      github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
      webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
    },
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
            onClick={() => setToggle("web app")}
          >
           FRONT END
          </div>
          <div
            className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#98dad9]" 
            onClick={() => setToggle("android app")}
          >
            FULL STACK
          </div>
          <div
            className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#98dad9]"
            onClick={() => setToggle("machine learning")}
          >
           GAMES
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
