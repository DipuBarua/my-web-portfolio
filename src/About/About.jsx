import { Link } from "react-router-dom";
import my_pic from "../assets/image/dipu_300px 300px.jpg";
import { Helmet } from "react-helmet-async";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const About = () => {
    return (
        <div className=" min-h-screen pt-10">
            <Helmet>
                <title>DipankarBarua Portfolio | About</title>
            </Helmet>
            {/* About Me  */}
            <div className="card glass md:flex-row  mx-10 items-center rounded-none px-10">
                <figure className=" flex-1 "><img src={my_pic} alt="" /></figure>
                <div className="card-body flex-1">
                    <h2 className="card-title">Hi, i am <span className=" text-3xl font-semibold text-[#B6BBC4]">Dipankar Barua</span></h2>
                    <p className=" text-sm text-[#B6BBC4]">- MERN Stack Web Developer</p>
                    <p>I am regularly working on web development. I love to code in JavaScript. Focused on MERN Stack projects. Always interested in learning new technology and ready to collaborate. Recently, I completed my studies on BSc. in CSE. Apart from that, I completed a Web Development Course from “Programming Hero”.
                    </p>

                    {/* My social links  */}
                    <div className=" flex gap-3 text-2xl mt-2 opacity-40">
                        <Link to={`https://github.com/DipuBarua`} target="_blank" className=" "><FaGithubSquare /></Link>
                        <Link to={`https://www.linkedin.com/in/dipankar-barua-b1176b269/`} target="_blank" className=" "><FaLinkedin /></Link>
                    </div>
                </div>
            </div>

            {/* My Skills  */}
            <div className=" mx-10 my-16 flex flex-col gap-10 items-center justify-center">
                <h2 className=" text-4xl font-bold">MY SKILLS</h2>

                <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>JavaScript</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>React.js</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>HTML5</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>CSS3</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>Express.js</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>MongoDB</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>Tailwind</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>Firebase</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>JWT</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>Node.js</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>Axios</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>React query</p>
                    </div>

                </div>

                <div className=" text-center mt-5">
                    <h2 className=" text-4xl font-bold mb-5">MY EDUCATION</h2>
                    <p className=" text-xl">BSc. in Computer Science and Engineering</p>
                    <p className="text-[#B6BBC4]">Passing Year :  2018 - 2023</p>
                    <p className="text-[#B6BBC4]">International Islamic University Chittagong</p>
                    <p className="text-[#B6BBC4]">Chittagong, Bangladesh</p>
                </div>

            </div>

        </div>
    );
};

export default About;