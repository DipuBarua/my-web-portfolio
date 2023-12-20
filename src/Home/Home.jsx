import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Experience from "./Experience";

const Home = () => {
    return (
        <div className=" min-h-screen">
            <Helmet>
                <title>DipankarBarua Portfolio | Home</title>
            </Helmet>

            <Banner></Banner>
            <Experience></Experience>

        </div>
    );
};

export default Home;