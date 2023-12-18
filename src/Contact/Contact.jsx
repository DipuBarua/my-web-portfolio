import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID
        const TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID
        const PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="hero min-h-screen">
                <div className="card w-full max-w-xl shadow-2xl shadow-[#B6BBC4] rounded-none my-16 text-black">
                    <form ref={form} onSubmit={sendEmail} className="card-body bg-[#31304D]">
                        <h2 className=" text-center text-3xl font-bold text-white">Contact</h2>

                        {/* Name  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name="from_name" />
                        </div>

                        {/* Email  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="user_email" />
                        </div>

                        {/* Message  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Message</span>
                            </label>
                            <textarea name="message" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-outline rounded-none bg-[#B6BBC4] hover:bg-orange-600">Send</button>
                        </div>

                    </form>
                </div>

        </div>

    );
};

export default Contact;