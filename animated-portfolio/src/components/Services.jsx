import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaPaintBrush, FaShareAlt, FaMagic } from "react-icons/fa";

const services = [
  {
    title: "Cinematic Video Editing",
    icon: <FaVideo />,
    desc: "Story-driven edits with smooth transitions, pro cuts, color grading & sound design.",
  },
  {
    title: "Creative Graphic Design",
    icon: <FaPaintBrush />,
    desc: "Thumbnails, posters, designs & scroll-stopping brand identity visuals.",
  },
  {
    title: "Social Media Management",
    icon: <FaShareAlt />,
    desc: "Content strategy, growth, insights & consistent brand transformation.",
  },
  {
    title: "Motion Graphics & Effects",
    icon: <FaMagic />,
    desc: "Custom intros, typographic motion, YouTube openers & logo animations.",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(#00ffc6_1px,transparent_1px),linear-gradient(90deg,#00ffc6_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, #00ffc6, transparent)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-[var(--accent)]">Services</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-6 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_#00ffc6] transition cursor-pointer"
            >
              <div className="text-[var(--accent)] text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
