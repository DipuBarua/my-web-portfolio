import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Experience from "./Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
    return (<>
        <Helmet>
            <title>DipankarBarua Portfolio | Home</title>
        </Helmet>

        <div className=" min-h-screen">
            <Banner></Banner>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    </>

    );
};

export default Home;