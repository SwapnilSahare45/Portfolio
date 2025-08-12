import { useEffect, useRef, useState } from "react"

const Contact = () => {
    const elementRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.2 }
        );

        if (elementRef.current) observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        }
    }, [])

    return (
        <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
            <h1
                ref={elementRef}
                className={`font-orbitron uppercase tracking-wider text-4xl text-center font-semibold md:text-6xl mb-8 z-2 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>Contact Me</h1>

            <form
                ref={elementRef}
                className={`z-2 bg-[#333] flex flex-col gap-4 rounded-lg p-8 font-gruppo shadow-md shadow-amber-300 hover:shadow-lg hover:scale-102 transition-all duration-700 ease-out md:w-1/2 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
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
    )
}

export default Contact