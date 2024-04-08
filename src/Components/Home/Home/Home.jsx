import Blogs from "../../Blogs/Blogs";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Projects/>
            <Skills/>
            <Blogs/>
         
        </div>
    );
};

export default Home;