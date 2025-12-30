'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const videoRefs = useRef([]);

  const projects = [
    {
      title: 'TaxFilerz & Co',
      link: 'https://taxfilerz.com/',
      thumbnail: '/portfolio/IMG-20250929-WA0002.jpg',
    },
    {
      title: 'Apna Ghar Apni Zameen',
      link: 'https://apnagharapnizameen.com/',
      thumbnail: '/portfolio/IMG-20250929-WA0003.jpg',
    },
    {
      title: 'Sasti Shopping',
      link: 'https://sastishopping.shop/',
      thumbnail: '/portfolio/IMG-20250929-WA0001.jpg',
    },
  ];

  const handleEnter = (i) => {
    const video = videoRefs.current[i];
    if (video) video.play();
  };

  const handleLeave = (i) => {
    const video = videoRefs.current[i];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="relative bg-transparent py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Featured Projects
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore a glimpse of our creative work — where technology meets design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-[380px] w-full overflow-hidden">
                {/* Video (if available) */}
                {project.video && (
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    muted
                    loop
                    preload="metadata"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}

                {/* Thumbnail fallback */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className={`h-full w-full object-cover transition-all duration-500 ${
                    project.video
                      ? 'group-hover:opacity-0'
                      : 'group-hover:scale-110'
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-full font-medium transition-transform duration-300 hover:scale-105"
                  >
                    Visit <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
