import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    gsap.fromTo(
      el.querySelectorAll(".reveal"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Glitch Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.2]"
        autoPlay
        loop
        muted
      >
        <source src="https://cdn.coverr.co/videos/coverr-futuristic-glitch-abstract-6476/1080p.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>

      {/* Neon Glow Effects */}
      <div
        className="absolute top-10 left-20 w-72 h-72 rounded-full blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, #00ffc6, transparent)" }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-[130px] opacity-20"
        style={{ background: "radial-gradient(circle, #0099ff, transparent)" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="reveal text-5xl md:text-7xl font-extrabold tracking-wide leading-tight text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          I'm <span className="text-[var(--accent)]">Roshni Kumari</span>
        </motion.h1>

        <p className="reveal text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Visual Storyteller crafting cinematic edits, bold designs & engaging content
          for brands that want to stand out.
        </p>

        {/* Tagline */}
        <p className="reveal text-[var(--accent)] font-semibold uppercase tracking-[0.3em] text-sm mt-4">
          Video Editor • Graphic Designer • Social Media Handler
        </p>

        {/* CTA Buttons */}
        <motion.div
          className="reveal flex flex-wrap gap-5 justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-bold shadow-[0_0_20px_var(--accent)] hover:scale-105 transition"
          >
            View Portfolio
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
