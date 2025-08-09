import { FaPhoneSquareAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <h1 className="font-orbitron uppercase tracking-wider text-4xl font-semibold md:text-6xl mb-8 z-2">Contact Me</h1>

            <div className="z-2 grid grid-cols-1 w-full gap-4 md:grid-cols-2 md:px-12 lg:px-20">
                <form
                    className="bg-[#333] flex flex-col gap-4 rounded-lg p-8 font-gruppo shadow-md shadow-amber-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
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

                <div className="bg-[#333] flex flex-col gap-4 px-4 py-8 font-gruppo rounded-lg shadow-md shadow-amber-300 md:px-8 justify-self-center-safe self-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <p className="text-gray-300">Call, email, or find me on social — your choice!</p>
                    <div className="flex flex-col gap-4">
                        <p className="flex items-center gap-2">
                            <FaPhoneSquareAlt className="inline text-3xl text-amber-300 mr-2" />
                            <span className="text-xl">+91 9370595448</span>
                        </p>

                        <p className="flex items-center gap-1">
                            <MdMail className=" text-3xl text-amber-300 mr-2" />
                            <span className="text-xl">swapnilsahare45@gmail.com</span>
                        </p>
                        <p>
                            <FaLocationDot className="inline text-3xl text-amber-300 mr-2" />
                            <span className="text-xl">Yavatmal, Maharashtra, India</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-300">Find me on:</p>
                        <div className="flex gap-4 mt-2">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-3xl text-amber-300" />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-3xl text-amber-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact