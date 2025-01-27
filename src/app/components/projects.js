"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Mall Management System",
    description: "A web application to consolidate mall operations.",
    image: "https://assets.simon.com/htmlcontent/Westchester-Mobile_20240112124133.jpg",
    link: "https://github.com/keerthireddytummalapelly/MEME",
  },
  {
    id: 2,
    title: "Note Vault",
    description: "A web application for efficient note organization, intergrated with AI-powered note summarization and grammar correction.",
    image: "https://us.images.westend61.de/0001401237pw/high-angle-view-of-pen-and-book-on-table-EYF07304.jpg",
    link: "https://github.com/keerthireddytummalapelly/NoteVault",
  },
  {
    id: 3,
    title: "Cache Sync",
    description: "A TCP/UDP file transfer system with a caching layer to reduce server load.",
    image: "https://miro.medium.com/v2/resize:fit:640/1*6tIUkEvBFFe3JA88A9Jwew.jpeg",
    link: "https://github.com/keerthireddytummalapelly/CacheSync",
  },
  {
    id: 4,
    title: "IPC Simulator",
    description: "A layered IPC simulator emulating producer-consumer communication via UNIX pipes.",
    image: "https://oncodedesign.com/content/images/size/w2000/2018/02/40542540_m.jpg",
    link: "https://github.com/keerthireddytummalapelly/LayeredPipe",
  },
  {
    id: 5,
    title: "SQL Query Size Estimator",
    description: "SQL Query Join Size Estimator.",
    image: "https://t3.ftcdn.net/jpg/03/10/99/88/360_F_310998841_dhTHUjjR0YUdf1DH3JAwVCET4fFtYF02.jpg",
    link: "https://github.com/keerthireddytummalapelly/SQLQuerySizeEstimator",
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-transparent px-8 py-12">
      {/* Heading */}
      <h2 className="text-5xl font-thin text-center text-white mb-12">
        My Projects
      </h2>
  
      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.div
              className="relative bg-transparent rounded-lg shadow-lg overflow-hidden group"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 1,
              }}
            >
              {/* Corner-to-Corner Color Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#a855f7] via-[#d946ef] to-[#ec4899] opacity-0 group-hover:opacity-10"
                whileTap={{
                  opacity: 0.8,
                  scale: 1.5,
                  originX: 0,
                  originY: 0,
                  transition: { duration: 0.5 },
                }}
              ></motion.div>
  
              {/* Project Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
  
              {/* Project Content */}
              <div className="p-4 relative z-10 mb-4">
                <h3 className="text-xl font-thin text-white">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </div>
  );  
};

export default Projects;
