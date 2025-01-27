"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
      name: "Docker",
      link: "https://www.docker.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
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
      name: "Node.js",
      link: "https://nodejs.org/en/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
    }
  ];

  const container = {
    hidden: { opacity: 0 }, // Start hidden
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between items
        delayChildren: 0, // Delay before starting
      },
    },
    exit: {
      opacity: 0, // Fade out everything
      transition: { delay: 1 }, // Add a slight delay before everything disappears
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 }, // Start small and invisible
    show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="bg-transparent flex flex-col px-4 sm:px-6 lg:px-8 mt-14">
      {/* About Me Section */}
      <div className="text-left mb-12">
        <h1 className="text-5xl font-thin text-white mb-6">About Me</h1>
        <ul className="text-lg sm:text-xl font-medium text-gray-300 leading-relaxed space-y-4">
          <li className="flex items-start">
            <img
              alt="⚡"
              src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/26a1.gif"
              className="w-6 h-6 mr-2"
            />
            Experienced in full-stack development, cloud computing, and machine learning, with a passion for building impactful, scalable solutions.
          </li>
          <li className="flex items-start">
            <img
              alt="⚡"
              src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/26a1.gif"
              className="w-6 h-6 mr-2"
            />
            Enthusiastic problem solver, actively exploring coding challenges on LeetCode and staying updated with industry trends.
          </li>
          <li className="flex items-start">
            <img
              alt="⚡"
              src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/26a1.gif"
              className="w-6 h-6 mr-2"
            />
            Skilled in mentoring and leadership, having guided over 200 graduate students as a Teaching Assistant.
          </li>
        </ul>
      </div>

      {/* Languages & Skills Section */}
      <div className="text-left">
        <h2 className="text-5xl font-thin text-white mb-8">
          Technical Skills
        </h2>
        <motion.div
          className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-10 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          onAnimationComplete={() => {
            // Trigger re-animation after it ends
            setTimeout(() => window.location.reload(), 2000); // Or trigger an internal state reset
          }}
        >
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2"
              variants={item}
            >
              <motion.img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              />
              <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
