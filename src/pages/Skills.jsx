import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 91 },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-4xl" />, level: 84 },
    { name: "Java", icon: <FaJava className="text-red-500 text-4xl" />, level: 62 },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" />, level: 77 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" />, level: 75 },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" />, level: 72 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" />, level: 80 },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-4xl" />, level: 60 },
    { name: "GitHub", icon: <FaGithub className="text-white text-4xl" />, level: 85 },
    { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" />, level: 80 },
    { name: "VS Code", icon: <VscVscode className="text-blue-400 text-4xl" />, level: 90 },
  ];

  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [visible, setVisible] = useState(() => skills.map(() => false));

  // Heading observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setHeadingVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (headingRef.current) obs.observe(headingRef.current);
    return () => {
      if (headingRef.current) obs.unobserve(headingRef.current);
    };
  }, []);

  // Card observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = cardRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) next[idx] = entry.isIntersecting;
          });
          return next;
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      cardRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [skills.length]);

  return (
    <div id="skills" className="min-h-screen flex flex-col items-center px-4 py-8 overflow-hidden">
      <h2
        ref={headingRef}
        className={`font-orbitron uppercase tracking-wider text-4xl font-semibold md:text-6xl mb-8 z-2 transition-all duration-700 ease-out
          ${headingVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
      >
        Skills
      </h2>

      <div className="z-2 grid grid-cols-2 gap-4 md:px-12 md:grid-cols-3 md:gap-8 lg:px-18 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`bg-[#333] flex flex-col gap-2 items-center justify-center rounded-lg p-6 shadow-md shadow-amber-300 transition-all duration-700 ease-out hover:shadow-lg hover:scale-105  
              ${visible[index] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 md:translate-x-20 lg:translate-x-40"}`}
          >
            <div>{skill.icon}</div>
            <h1 className="text-xl font-gruppo tracking-widest text-amber-300 text-center md:text-2xl">
              {skill.name}
            </h1>
            <span className="font-orbitron tracking-widest text-amber-300">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Skills;
