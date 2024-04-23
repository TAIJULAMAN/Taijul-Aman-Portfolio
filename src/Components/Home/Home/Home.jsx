import About from "../../About/About";
import Blogs from "../../Blogs/Blogs";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Projects/>
            <Skills/>
            <Blogs/>
         
        </div>
    );
};

export default Home;