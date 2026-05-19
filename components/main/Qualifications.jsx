"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Dr APJ Abdul Kalam Technological University",
    year: "2021 - 2025",
    grade: "7.9 CGPA",
    description: "Focused on web development, algorithms, and software engineering.",
  },
  {
    degree: "High School",
    institution: "DAV Public School, Ashok Vihar",
    year: "2019 - 2020",
    grade: "89.2%",
    description: "Specialized in Science with Computer Applications.",
  },
  {
    degree: "Secondary School",
    institution: "DAV Public School, Ashok Vihar",
    year: "2017 - 2018",
    grade: "93%",
    description: "Completed foundational education with excellence.",
  },
];

const EducationTimeline = () => {
  const sectionRef = useRef(null);

  // Track scroll within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });


  const moveY = useTransform(scrollYProgress, [0, 1], [0, 370]); 

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-1 md:py-10 px-4 sm:px-8 md:px-16 text-white"
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        Education
        </h1>

      <div className="relative border-l-2 border-purple-500 ml-4 sm:ml-12">
        {/* Moving head that follows scroll */}
        <motion.div
          className="head absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-1.5"
          style={{ y: moveY, transition: "transform 0.5s ease-in-out" }}
        />

        {/* Timeline items */}
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 ml-4 sm:ml-6"
          >
            <div className="p-4 bg-[#252542] rounded-xl shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                {item.degree}
              </h3>
              <p className="text-sm mt-1 text-purple-300">{item.institution}</p>
              <p className="text-xs text-gray-400 italic">{item.year}</p>
              <p className="text-xs mt-1 text-purple-300">{item.grade}</p>
              <p className="mt-2 text-sm text-gray-200">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
