"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      link: "https://www.python.org/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      link: "https://www.java.com/en/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C",
      link: "https://devdocs.io/c/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "JavaScript",
      link: "https://www.javascript.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "AWS",
      link: "https://aws.amazon.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Azure",
      link: "https://azure.microsoft.com/en-us/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Docker",
      link: "https://www.docker.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "CI/CD",
      link: "https://en.wikipedia.org/wiki/CI/CD",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", // Placeholder
    },
    {
      name: "HTML",
      link: "https://html.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      link: "https://www.w3.org/Style/CSS/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Angular",
      link: "https://angular.io/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "React",
      link: "https://react.dev/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      link: "https://nextjs.org/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/en/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      link: "https://expressjs.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "FastAPI",
      link: "https://fastapi.tiangolo.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "Spring Boot",
      link: "https://spring.io/projects/spring-boot",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "Django",
      link: "https://www.djangoproject.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "Jest",
      link: "https://jestjs.io/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "JUnit",
      link: "https://junit.org/junit5/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", // Use Java icon for JUnit
    },
    {
      name: "MySQL",
      link: "https://www.mysql.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Postman",
      link: "https://www.postman.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", // Placeholder for Postman
    },
    {
      name: "Figma",
      link: "https://www.figma.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Linux",
      link: "https://www.linux.org/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
  ];

  return (
    <div>
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-thin mb-4">Skills</h1>
      
      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-14 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <img
              src={skill.img}
              alt={skill.name}
              title={skill.name}
              className="w-10 h-10"
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
  
};

export default Skills;
