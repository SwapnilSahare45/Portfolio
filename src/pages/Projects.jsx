import artora from "../assets/artora.png";
import recipe from "../assets/recipe.png";
import portfolio from "../assets/portfolio.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Artora",
      image: artora,
      github: "#",
      live: "#",
      description:
        "A MERN stack web app for buying, selling, and bidding on artworks directly or via auctions. Includes theme mode support and modern UI with Tailwind CSS.",
      tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
      features: [
        "User authentication (login/register).",
        "Artwork listing and filtering.",
        "Auctions with bidding system.",
        "Dark/Light mode support.",
      ],
    },
    {
      id: 2,
      title: "Recipe Finder",
      image: recipe,
      github: "#",
      live: "#",
      description:
        "A MERN stack app to add and search recipes by ingredients or category, with a responsive and minimal design.",
      tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
      features: [
        "Add new recipes with ingredients, instructions, and images.",
        "Search recipes by name or ingredient.",
        "Responsive design for mobile and desktop.",
      ],
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: portfolio,
      github: "#",
      live: "#",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information. Built with React and Tailwind CSS for a modern and responsive UI.",
      tech: "React.js, Tailwind CSS, JavaScript",
      features: [
        "Responsive design across all devices.",
        "Smooth scrolling and animations.",
        "Dark/Light mode support.",
      ],
    },
  ];

  return (
    <div id="projects" className=" flex flex-col items-center gap-4 px-4 py-6">
      <h1 className="font-orbitron uppercase tracking-wider text-4xl font-semibold md:text-6xl z-2">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#333] rounded-lg p-4 flex flex-col z-2 shadow-md shadow-amber-300 hover:shadow-lg transition-all duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <div className="font-gruppo flex flex-col flex-1">
              <h2 className="uppercase text-xl font-orbitron tracking-wider text-amber-300 mb-2">
                {project.title}
              </h2>

              <div className="mb-2">
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

              <p className="mb-2">{project.description}</p>

              <p>
                <strong className="tracking-widest">Tech Stack:</strong>{" "}
                {project.tech}
              </p>

              <div className="mt-2">
                <strong className="tracking-widest">Features:</strong>
                <ul className="list-disc pl-5">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
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
