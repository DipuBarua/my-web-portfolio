import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DipankarBarua Portfolio | Home</title>
            </Helmet>
            <p className=" text-3xl text-center">THis is home</p>
        </div>
    );
};

export default Home;