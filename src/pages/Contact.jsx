import { FaPhoneSquareAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <h1 className="font-orbitron uppercase tracking-wider text-4xl font-semibold md:text-6xl mb-8 z-2">Contact Me</h1>

            <div className="z-2 flex md:w-1/2">

                <form
                    className="bg-[#333] w-full flex flex-col gap-4 rounded-lg p-8 font-gruppo shadow-md shadow-amber-300 hover:shadow-lg hover:scale-102 transition-all duration-300"
                >
                    <p className="text-gray-300">Let’s talk — fill out the form and I’ll get back to you.</p>
                    <input
                        type="text"
                        placeholder="Name"
                        className="focus:outline-none ring ring-amber-300 p-2 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="focus:outline-none ring ring-amber-300 p-2 rounded"
                    />
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="focus:outline-none ring ring-amber-300 p-2 rounded min-h-32 max-h-64"
                    >
                    </textarea>
                    <button
                        type="submit"
                        className="bg-amber-300 text-black font-orbitron tracking-widest uppercase p-2 rounded shadow-md shadow-amber-300 hover:bg-amber-400 transition-all duration-300"
                    >
                        Send
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Contact