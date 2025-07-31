import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    );
};

export default Home;