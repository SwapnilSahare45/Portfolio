import { useEffect, useRef, useState } from 'react';
import MyPic from '../assets/MyPic.png';

const Home = () => {

    const roles = ["Web Developer", "Frontend Developer", "Backend Developer", "MERN Stack Developer", "React Developer", "JavaScript Enthusiast", "Full Stack Developer"];

    const [index, setIndex] = useState(0);
    const [role, setRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const elementRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const currentRole = roles[index];
        const typingSpeed = isDeleting ? 100 : 150;

        const timeout = setTimeout(() => {
            setRole((prev) =>
                isDeleting ? currentRole.substring(0, prev.length - 1) : currentRole.substring(0, prev.length + 1)
            );

            if (!isDeleting && role === currentRole) {
                setTimeout(() => {
                    setIsDeleting(true);
                }, 1500); // Wait before starting to delete
            }
            if (isDeleting && role === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % roles.length); // Move to the next role
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [role, isDeleting, index]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.6 }
        );

        if (elementRef.current) observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        }
    }, [])


    return (
        <section id='home' className='h-screen flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12 lg:gap-16 relative overflow-hidden z-2'>

            {/* Image */}
            <div
                ref={elementRef}
                className={`relative z-2 w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-x-40"}`}
            >
                <div className='absolute inset-0 border-r-2 border-l-2 border-amber-500 rounded-full animate-spin'></div>
                <img src={MyPic} alt="My Profile" loading='lazy' className='rounded-full p-2' />
            </div>

            {/* My Info */}
            <div
            ref={elementRef}
            className={`z-2 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40"}`}>
                <p className='text-xl font-gruppo md:text-2xl md:tracking-wide lg:text-3xl'>Hello, I'm</p>
                <h1 className='font-notable tracking-widest text-2xl md:text-4xl md:mb-2 lg:text-6xl'>Swapnil sahare</h1>
                <p className='text-xl font-gruppo mb-4 md:tracking-wide md:text-2xl lg:text-3xl'>A passionate{" "}
                    <span className='block capitalize font-orbitron tracking-wide text-amber-300  md:inline lg:tracking-widest'>
                        {role}
                        <span className='animate-ping'>|</span>
                    </span>
                </p>
                <a
                    href="/Resume.pdf"
                    download
                    className="inline-block transform transition-transform duration-300 hover:-rotate-6 bg-amber-300 font-orbitron uppercase tracking-widest px-4 py-2 rounded shadow-lg shadow-amber-300 text-black"
                >
                    Resume
                </a>

            </div>

        </section>
    )
}

export default Home