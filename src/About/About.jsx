import { Link } from "react-router-dom";
import my_pic from "../assets/image/dipu_300px 300px.jpg";

const About = () => {
    return (
        <div className=" min-h-screen pt-10">
            {/* About Me  */}
            <div className="card glass flex-row  mx-10 items-center rounded-none px-10">
                <figure className=" flex-1 "><img src={my_pic} alt="" /></figure>
                <div className="card-body flex-1">
                    <h2 className="card-title">Hi, i am <span className=" text-3xl font-semibold text-[#B6BBC4]">Dipankar Barua</span></h2>
                    <p className=" text-sm text-[#B6BBC4]">- MERN Stack Web Developer</p>
                    <p>I am always enthusiastic about web development.Currently, I am engaged in developing MERN full-stack web projects. Always learning and ready to collaborate.</p>
                    {/* My social links  */}
                    <Link to={`https://github.com/DipuBarua`} target="_blank" className=" underline">Github</Link>
                </div>
            </div>

            {/* My Skills  */}
            <div className=" mx-10 my-16 flex flex-col gap-10 items-center justify-center">
                <h2 className=" text-4xl font-bold">MY SKILLS</h2>

                <div className=" grid grid-cols-4 gap-4">

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>JavaScript</p>
                    </div>

                    <div className=" text-xl border border-white rounded-xl items-center p-2 w-fit hover:bg-[#31304D]">
                        <p>React</p>
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