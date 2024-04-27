import { Link } from "react-router-dom";
import ProjectSlides from "../Shared/ProjectSlides/ProjectSlides";
import img_1 from "../assets/project_img/project11.png";
import img_2 from "../assets/project_img/project12.png";
import img_3 from "../assets/project_img/project13.png";
import img_4 from "../assets/project_img/project14.png";
import img_5 from "../assets/project_img/project21.png";
import img_6 from "../assets/project_img/project22.png";
import img_7 from "../assets/project_img/project23.png";
import img_8 from "../assets/project_img/project24.png";
import img_9 from "../assets/project_img/project31.png";
import img_10 from "../assets/project_img/project32.png";
import img_11 from "../assets/project_img/project33.png";
import img_12 from "../assets/project_img/project34.png";
import img_13 from "../assets/project_img/project41.png";
import img_14 from "../assets/project_img/project42.png";
import img_15 from "../assets/project_img/project43.png";
import img_16 from "../assets/project_img/project44.png";
import { Helmet } from "react-helmet-async";

const Projects = () => {
    return (
        <div className=" space-y-24 my-16 mx-10">
            <Helmet>
                <title>DipankarBarua Portfolio | Projects</title>
            </Helmet>
            <h2 className=" text-center text-4xl font-bold">MY PROJECTS</h2>

            {/* Recent project  */}
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-none mx-auto">
                <figure className=" flex-1 my-auto">
                    <ProjectSlides
                        item_1={img_13}
                        item_2={img_14}
                        item_3={img_15}
                        item_4={img_16}
                    >
                    </ProjectSlides>
                </figure>
                <div className="card-body text-black flex-1 ml-8">
                    <h2 className="card-title font-bold">Hostel Meals Management System</h2>
                    <h2>It is a website of meals management system for a hostel. User can buy package and can sent request for meal. Also user can share comment and like reaction. Admin can control all management from admin dashboard.</h2>
                    <h2 className=" text-xl font-semibold">Featchers</h2>
                    <div className=" mx-5 mb-2">
                        <ul className=" list-decimal">
                            <li>
                                There is a firebase authentication/authorization ( Sign Up, Sign In ) system using email password and google.
                            </li>
                            <li>
                                All meals are displayed through categories using tabs in the Home page.
                            </li>
                            <li>
                                Need register user (private route) for using the Meal Details page to give reviews or like reactions.
                            </li>
                            <li>
                                Payment system using stripe for user’s subscription.
                            </li>
                            <li>
                                Dashboard ( private route ) for both of Users and Admins.
                            </li>

                            <li>
                                <span className=" font-bold">Front-End:</span> React.js, React Router, Tailwind, JWT, Firebase authentication, DaisyUI, Tanstack Query, Axios, Stripe.
                            </li>
                            <li>
                                <span className=" font-bold">Back-End:</span> Node.js, Express.js, MongoBD
                            </li>
                        </ul>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`https://hostel-meals-management.web.app/`} className="btn text-white rounded-none bg-black hover:bg-orange-600">Live Preview</Link>

                        <Link to={`https://github.com/DipuBarua/hostel-meals-management-client?tab=readme-ov-file`} className="btn text-white rounded-none bg-black hover:bg-orange-600">Client Side</Link>
                    </div>
                </div>
            </div>

            {/* first project  */}
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-none mx-auto">
                <figure className=" flex-1 my-auto">
                    <ProjectSlides
                        item_1={img_1}
                        item_2={img_2}
                        item_3={img_3}
                        item_4={img_4}
                    >
                    </ProjectSlides>
                </figure>
                <div className="card-body text-black flex-1 ml-8">
                    <h2 className="card-title font-bold">Newspaper Fullstack Website</h2>
                    <h2>This is a MERN Fullstack website. It is an online news portal type website where registered users can publish there news. Admin can control all management from admin dashboard.</h2>
                    <h2 className=" text-xl font-semibold">Featchers</h2>
                    <div className=" mx-5 mb-2">
                        <ul className=" list-decimal">
                            <li>There is a firebase authentication (password and google SignUp,SignIn) system.</li>
                            <li>There is a form to publish news by the user.</li>
                            <li>There have a dashboard for user panel, where registered users can see their required information and can use.</li>
                            <li>There have also another a secure admin panel for admin, from where admin can control full website as like: request accept,delete,publish article, message to user etc.</li>
                            <li> <span className=" font-bold">Front-End:</span> React.js, React Router, Tailwind, JWT, Firebase authentication, React Query</li>
                            <li><span className=" font-bold">Back-End:</span> Node.js, Express.js, MongoBD</li>
                        </ul>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`https://newspaper-fullstack.web.app/`} className="btn text-white rounded-none bg-black hover:bg-orange-600">Live Preview</Link>

                        <Link to={`https://github.com/DipuBarua/newspaper-fullstack-client`} className="btn text-white rounded-none bg-black hover:bg-orange-600">Client Side</Link>
                    </div>
                </div>
            </div>

            {/* second project  */}
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-none mx-auto">
                <figure className=" flex-1 my-auto">
                    <ProjectSlides
                        item_1={img_5}
                        item_2={img_6}
                        item_3={img_7}
                        item_4={img_8}
                    >
                    </ProjectSlides>
                </figure>
                <div className="card-body text-black flex-1 ml-8">
                    <h2 className="card-title font-bold">Homegrown Produce Exchange</h2>
                    <h2>It is a full-stack E-Commerce website. Users(seller) can show their products or services to the customers. Customer can buy any service through booking. Every seller can control only his/her services from dashboard.</h2>
                    <h2 className=" text-xl font-semibold">Featchers</h2>
                    <div className=" mx-5 mb-2">
                        <ul className=" list-decimal">
                            <li>Password or Google based Login, Logout, registration are available.</li>
                            <li>Server side build in express and database in mongodb</li>
                            <li>Any seller(user) can easily add their services through the add Service form</li>
                            <li>Seller(user) can update or delete their product or service’s post from Manage Services.</li>
                            <li> <span className=" font-bold">Front-End:</span> React.js, React Router, Tailwind, Firebase authentication</li>
                            <li><span className=" font-bold">Back-End:</span> Node.js, Express.js, MongoBD</li>
                        </ul>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`https://homegrown-produce-exchange.web.app/services`} className="btn text-white rounded-none bg-black hover:bg-orange-600">Live Preview</Link>

                        <Link to={`https://github.com/DipuBarua/homegrown-produce-exchange-client`} className="btn text-white rounded-none bg-black hover:bg-orange-600">Client Side</Link>
                    </div>
                </div>
            </div>

            {/* third project  */}
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-none mx-auto">
                <figure className=" flex-1 my-auto">
                    <ProjectSlides
                        item_1={img_9}
                        item_2={img_10}
                        item_3={img_11}
                        item_4={img_12}
                    >
                    </ProjectSlides>
                </figure>
                <div className="card-body text-black flex-1 ml-8">
                    <h2 className="card-title font-bold">Fashion and Apparel</h2>
                    <h2>Fashion and Apparel is a e-commerce base project. Users can add their products to sale and customer user can see details and buy product. I have used react to build this project and used mongodb,express in back-end side.</h2>
                    <h2 className=" text-xl font-semibold">Featchers</h2>
                    <div className=" mx-5 mb-2">
                        <ul className=" list-decimal">
                            <li>There have firebase authentication system for user register and logIn/Out</li>
                            <li>User can add any product to sale using add form which are shown in home page base on brand name.</li>
                            <li>User(seller) can update their product information.</li>
                            <li> <span className=" font-bold">Front-End:</span> React.js, React Router, Tailwind, Firebase authentication</li>
                            <li><span className=" font-bold">Back-End:</span> Express.js, MongoBD</li>
                        </ul>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`https://fashion-and-apparel-a10b8.web.app/`} className="btn text-white rounded-none bg-black hover:bg-orange-600">Live Preview</Link>

                        <Link to={`https://github.com/DipuBarua/fashion-and-apparel-client`} className="btn text-white rounded-none bg-black hover:bg-orange-600">Client Side</Link>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Projects;