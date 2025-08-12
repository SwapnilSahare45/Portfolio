import { useEffect, useRef, useState } from "react";

const Contact = () => {
    const elementRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (elementRef.current) observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const formData = new FormData(e.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (data.success) {
                setStatus("✅ Message sent successfully!");
                e.target.reset();
            } else {
                setStatus("❌ Failed to send message. Try again.");
            }
        } catch (error) {
            setStatus("⚠️ Something went wrong. Try later.");
        }

        setLoading(false);
    };

    return (
        <div
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden"
        >
            <h1
                ref={elementRef}
                className={`font-orbitron uppercase tracking-wider text-4xl text-center font-semibold md:text-6xl mb-8 z-2 transition-all duration-700 ease-out ${
                    inView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-20"
                }`}
            >
                Contact Me
            </h1>

            <form
                onSubmit={handleSubmit}
                ref={elementRef}
                className={`z-2 bg-[#333] flex flex-col gap-4 rounded-lg p-8 font-gruppo shadow-md shadow-amber-300 hover:shadow-lg hover:scale-102 transition-all duration-700 ease-out md:w-1/2 ${
                    inView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-40"
                }`}
            >
                <p className="text-gray-300">
                    Let’s talk — fill out the form and I’ll get back to you.
                </p>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="focus:outline-none ring ring-amber-300 p-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="focus:outline-none ring ring-amber-300 p-2 rounded"
                    required
                />
                <textarea
                    placeholder="Message"
                    name="message"
                    rows="4"
                    className="focus:outline-none ring ring-amber-300 p-2 rounded min-h-32 max-h-64"
                    required
                ></textarea>

                <button
                    type="submit"
                    disabled={loading}
                    className={`bg-amber-300 text-black font-orbitron tracking-widest uppercase p-2 rounded shadow-md shadow-amber-300 hover:bg-amber-400 transition-all duration-300 ${
                        loading && "opacity-70 cursor-not-allowed"
                    }`}
                >
                    {loading ? "Sending..." : "Send"}
                </button>

                {status && (
                    <p className="text-sm mt-2 text-center text-gray-200">
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Contact;