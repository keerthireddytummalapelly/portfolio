import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import Link from "next/link";

const Connect = () => {
  const socialLinks = [
    {
      title: "Mail",
      href: "mailto:tummalapellykeerthireddy@gmail.com",
      icon: <FaEnvelope />,
      bgcolor: "bg-red-500",
      borderColor: "border-transparent",
      hoverColor:
        "hover:bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899]",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/keerthi-reddy-tummalapelly",
      icon: <FaLinkedin />,
      bgcolor: "bg-blue-500",
      borderColor: "border-transparent",
      hoverColor:
        "hover:bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899]",
    },
    {
      title: "GitHub",
      href: "https://github.com/keerthireddytummalapelly",
      icon: <FaGithub />,
      bgcolor: "bg-gray-500",
      borderColor: "border-transparent",
      hoverColor:
        "hover:bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899]",
    },
    {
      title: "LeetCode",
      href: "https://leetcode.com/keerthireddytummalapelly",
      icon: <SiLeetcode />,
      bgcolor: "bg-orange-500",
      borderColor: "border-transparent",
      hoverColor:
        "hover:bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899]",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-transparent px-4 md:mt-0 mt-14">
      <div className="md:w-1/2 flex flex-col justify-center items-start text-left">
        <h2 className="text-5xl font-thin mb-4 text-white">Let's Connect!!</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Let’s collaborate on a project, say hello on Gmail or LinkedIn, or
          check out my work on GitHub and LeetCode.
        </p>
        <div className="flex justify-start items-center space-x-8">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${link.bgcolor} ${link.borderColor} transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899]`}
              title={link.title}
            >
              <span className="text-white text-2xl">{link.icon}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
