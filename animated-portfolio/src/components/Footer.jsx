import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaBehance,
  FaTwitter,
  FaFacebookF,
  FaDribbble,
  FaVimeoV,
} from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, href: "https://instagram.com" },
  { icon: <FaYoutube />, href: "https://youtube.com" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  { icon: <FaBehance />, href: "https://behance.net" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaDribbble />, href: "https://dribbble.com" },
  { icon: <FaVimeoV />, href: "https://vimeo.com" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 mt-24">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(#00ffc6_1px,transparent_1px),linear-gradient(90deg,#00ffc6_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Glow effect */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, #00ffc6, transparent)" }}
      ></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Name */}
          <h2 className="text-3xl font-bold tracking-wide">
            <span className="text-white">Roshni</span>
            <span className="text-[var(--accent)]"> Kumari</span>
          </h2>
          <p className="text-gray-300 text-sm">
            Video Editor • Graphic Designer • Social Media Strategist
          </p>

          {/* Social media icons */}
          <div className="flex justify-center gap-5 text-xl mt-4 flex-wrap">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="text-gray-400 hover:text-[var(--accent)] transition cursor-pointer"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6 text-sm text-gray-400 pt-3">
            <a href="/" className="hover:text-[var(--accent)] transition">
              Home
            </a>
            <a href="/portfolio" className="hover:text-[var(--accent)] transition">
              Portfolio
            </a>
            <a href="/contact" className="hover:text-[var(--accent)] transition">
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="text-center border-t border-white/10 py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Roshni Kumari • All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
