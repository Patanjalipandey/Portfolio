import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-lg bg-black/70 border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider">
          <span className="text-white">Roshni</span>
          <span className="text-[var(--accent)]">Kumari</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-light uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[var(--accent)] transition ${
                isActive ? "text-[var(--accent)]" : "text-gray-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `hover:text-[var(--accent)] transition ${
                isActive ? "text-[var(--accent)]" : "text-gray-300"
              }`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[var(--accent)] transition ${
                isActive ? "text-[var(--accent)]" : "text-gray-300"
              }`
            }
          >
            Contact
          </NavLink>
          <a
            href="/Roshni_Kumari_Resume.pdf"
            download
            className="border border-[var(--accent)] px-4 py-2 rounded-lg hover:shadow-[0_0_20px_var(--accent)] transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-3xl md:hidden focus:outline-none"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-4"
        >
          <NavLink
            to="/"
            className="block text-gray-300 hover:text-[var(--accent)]"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className="block text-gray-300 hover:text-[var(--accent)]"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-300 hover:text-[var(--accent)]"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
          <a
            href="/Roshni_Kumari_Resume.pdf"
            download
            className="block border border-[var(--accent)] text-center py-2 rounded-lg hover:shadow-[0_0_20px_var(--accent)] text-[var(--accent)]"
            onClick={() => setOpen(false)}
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
