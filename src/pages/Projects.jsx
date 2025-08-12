import artora from "../assets/artora.png";
import recipe from "../assets/recipe.png";
import portfolio from "../assets/portfolio.png";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Artora",
      image: artora,
      github: "https://github.com/SwapnilSahare45/Artora",
      live: "https://artora-kappa.vercel.app",
      description:
        "A MERN stack web app for buying, selling, and bidding on artworks in auctions. Includes theme mode support and modern UI with Tailwind CSS.",
      tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Nodemailer",
      features: [
        "User authentication with OTP verification.",
        "Profile management with update functionality.",
        "Artwork listing, filtering, and updating.",
        "Auctions with a bidding system.",
        "Wishlist and order placement features.",
        "Dark/Light mode support",
      ],
    },
    {
      id: 2,
      title: "Recipe Finder",
      image: recipe,
      github: "https://github.com/SwapnilSahare45/RecipesFinder",
      live: "https://recipes-finder-ruddy.vercel.app",
      description:
        "A MERN stack web app to add and search recipes by ingredients or category, with a responsive and minimal design.",
      tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
      features: [
        "User authentication with JWT.",
        "Profile management with personal recipes.",
        "Add new recipes with ingredients, instructions, and images.",
        "Search and find recipes by name.",
      ],
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: portfolio,
      github: "https://github.com/SwapnilSahare45/Portfolio",
      live: "https://portfolio-rho-wine-63.vercel.app",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information. Built with React and Tailwind CSS for a modern and responsive UI.",
      tech: "React.js, Tailwind CSS, JavaScript",
      features: [
        "Responsive design across all devices.",
        "Smooth scrolling and interactive animations.",
        "Project showcase with live links and GitHub repositories.",
        "Contact section with form and direct contact details.",
        "Social media integration for quick connections.",
      ],
    },
  ];

  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [visible, setVisible] = useState(() => projects.map(() => false));

  // Observe heading (separate)
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
  }, [projects.length]);

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center gap-4 px-4 py-6 overflow-hidden">
      <h1
        ref={headingRef}
        className={`font-orbitron uppercase tracking-wider text-4xl font-semibold md:text-6xl z-2 transition-all duration-700 ease-out
          ${headingVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
      >
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[idx] = el)}
            className={`bg-[#333] rounded-lg p-4 flex flex-col z-2 shadow-md shadow-amber-300 hover:shadow-lg transition-all duration-700 ease-out
              ${visible[idx] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-48 object-cover rounded mb-4"
            />

            <div className="font-gruppo flex flex-col flex-1">
              <h2 className="uppercase text-xl font-orbitron tracking-wider text-amber-300 mb-1">
                {project.title}
              </h2>

              <div className="mb-1">
                <a
                  href={project.github}
                  className="text-blue-500 underline-offset-4 decoration-0 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
                {" | "}
                <a
                  href={project.live}
                  className="text-blue-500 underline-offset-4 decoration-0 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>

              <p className="mb-1">{project.description}</p>

              <p>
                <strong className="tracking-widest">Tech Stack:</strong> {project.tech}
              </p>

              <div className="mt-1">
                <strong className="tracking-widest">Features:</strong>
                <ul className="list-disc pl-5">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
