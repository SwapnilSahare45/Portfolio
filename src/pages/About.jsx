import { useEffect, useRef, useState } from "react"

const About = () => {
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
        <div id="about" className="min-h-screen flex flex-col items-center justify-center gap-4 overflow-hidden">

            <h1
                ref={elementRef}
                className={`font-orbitron uppercase tracking-wider text-4xl font-semibold md:text-6xl z-2 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"}`}>About me</h1>

            <p
                ref={elementRef}
                className={`font-gruppo text-xl text-center tracking-wide px-4 md:px-24 lg:text-2xl lg:px-60 z-2 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}>
                Hello! I'm <strong className="capitalize tracking-widest text-amber-300 underline underline-offset-6 decoration-0">Swapnil Sahare</strong>, a passionate and enthusiastic <strong className="tracking-widest text-amber-300 underline underline-offset-6 decoration-0">MERN Stack Developer</strong> eager to build my career as a <strong className="capitalize tracking-widest text-amber-300 underline underline-offset-6 decoration-0">web developer.</strong> I'm a fresher, but I've already built a strong foundation in core technologies. I'm proficient in <strong className="tracking-widest text-amber-300 underline underline-offset-6 decoration-0">HTML</strong>, <strong className="tracking-widest text-amber-300 underline underline-offset-6 decoration-0">CSS</strong>, and <strong className="tracking-widest text-amber-300 underline underline-offset-6 decoration-0">JavaScript</strong>, and I specialize in the MERN stack, using <strong className="tracking-widest text-amber-300 underline underline-offset-6 decoration-0">React</strong> for <strong className="capitalize text-amber-300 tracking-widest underline underline-offset-6 decoration-0">dynamic front-end</strong> experiences and <strong className="text-amber-300 tracking-widest underline underline-offset-6 decoration-0">Node.js</strong>, <strong className="text-amber-300 tracking-widest underline underline-offset-6 decoration-0">Express</strong>, and <strong className="text-amber-300 tracking-widest underline underline-offset-6 decoration-0">MongoDB</strong> for <strong className="capitalize text-amber-300 tracking-widest underline underline-offset-6 decoration-0">robust back-end</strong> systems. I also have experience with <strong className="text-amber-300 tracking-widest underline underline-offset-6 decoration-0">Tailwind CSS</strong> to create <strong className="capitalize text-amber-300 tracking-widest underline underline-offset-6 decoration-0">modern</strong> and <strong className="capitalize text-amber-300 tracking-widest underline underline-offset-6 decoration-0">responsive</strong> user interfaces.
                I'm a <strong className="capitalize text-amber-300 tracking-widest underline underline-offset-6 decoration-0">quick learner</strong> and a <strong className="capitalize text-amber-300 tracking-widest underline underline-offset-6 decoration-0">problem-solver</strong> who loves the challenge of bringing ideas to life through code. I'm excited to contribute my skills to a <strong className="capitalize text-amber-300 tracking-widest underline underline-offset-6 decoration-0">team</strong> and create innovative web applications.
            </p>

        </div>
    )
}

export default About