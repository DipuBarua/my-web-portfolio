import { Link } from "react-router-dom";
import my_image from "../assets/image/my_image.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
// import { Player } from 'video-react';

const Banner = () => {
    return (
        <div>
            <div className=" py-20 bg-[#31304D]">
                <div className=" flex flex-col-reverse md:flex-row">
                    <div className=" flex-1 mx-10">
                        <h2 className=" text-3xl font-bold mb-2"><span className=" text-7xl pr-2">Hi!</span> Welcome to My Portfolio</h2>
                        <p>
                            This is Dipankar Barua. I am always enthusiastic about web development. Because I believe that web development is not just a job; it is a journey of constant exploration and innovation in the digital realm. Currently, I am engaged in developing MERN full-stack web projects. Always learning and ready to collaborate. I also believe that dreams come true through hard work.</p>

                        {/* create download link>> https://sites.google.com/site/gdocs2direct/  */}
                        <div className=" my-5 flex items-center">
                            <Link to={`https://drive.google.com/uc?export=download&id=1_sa10YL4p9cGeOmUYDvuoKWKY-Eh7Wt-`} className="btn text-white rounded-none bg-black hover:bg-orange-600 border-none text-xl"><FaCloudDownloadAlt />Download Resume</Link>

                            {/* <Link to={''} className=" btn btn-circle btn-warning p-10 ml-5 text-center text-xs bg-opacity-10">Watch
                                <Player fluid aspectRatio="16:9">
                                    <source src="" />
                                </Player>

                            </Link> */}
                            {/* <video src=""></video> */}
                            {/* react player - can use                              */}

                        </div>
                    </div>
                    <div className=" flex-1 items-center ml-32">
                        {/* <img src={my_image3} alt="" /> */}
                        <div className="avatar">
                            <div className=" w-2/3 mask mask-hexagon bg-[#161A30]">
                                <img src={my_image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;