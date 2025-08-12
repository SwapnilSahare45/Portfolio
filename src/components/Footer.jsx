import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-2 px-12 flex flex-col-reverse gap-2 items-center justify-between md:flex-row">
      <p className="text-sm md:text-base font-orbitron tracking-widest">
        Design and Developed by ❤️ <span className="font-semibold">Swapnil Sahare</span>
      </p>

      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/in/swapnil-sahare-06a803318"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-300 shadow-lg shadow-amber-300"
        >
          <FaLinkedin className="text-3xl" />
        </a>

        <a
          href="https://github.com/SwapnilSahare45"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-300 shadow-lg shadow-amber-300"
        >
          <FaGithubSquare className="text-3xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
