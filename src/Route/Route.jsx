import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";
import Certification from "../Components/Certification/Certification";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/projects",
          element: <Projects/>,
        },
        {
          path: "/skills",
          element: <Skills/>,
        },
        {
            path: "/blogs",
            element: <Blogs/>,
          },
          {
            path: "/contact",
            element: <Contact/>
          },
          {
            path: "/certification",
            element: <Certification/>
          },
      ]
    },
  ]);
  export default router;