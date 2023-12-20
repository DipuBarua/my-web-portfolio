import { Link } from "react-router-dom";
import my_image from "../assets/image/dipu_300px 300px.jpg";

const Banner = () => {
    return (
        <div>
            <div className=" pt-20 bg-[#31304D]">
                <div className=" flex">
                    <div className=" flex-1 mx-10">
                        <h2 className=" text-2xl font-bold">Hi, welcome to my portfolio</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates rem eveniet, itaque cumque excepturi quos animi et architecto, perspiciatis dolorem commodi id impedit ipsum nulla perferendis vel alias distinctio.
                            Vero debitis odit nostrum explicabo veniam minima nam cupiditate? Voluptas molestiae illo, quasi ab officia excepturi rem! Distinctio reiciendis tenetur sint officia rerum quasi? Tenetur autem ipsam doloremque rerum maxime.</p>
                        <div className=" my-5 flex items-center">
                            <Link to={''} className="btn btn-primary rounded-none text-2xl">Download CV</Link>
                            <Link to={''} className=" btn btn-circle btn-warning p-10 ml-5 text-center text-xs bg-opacity-10">Watch</Link>
                        </div>
                    </div>
                    <div className=" flex-1 items-center ml-20">
                        <img src={my_image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;