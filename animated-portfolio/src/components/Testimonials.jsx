import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Singh",
    role: "YouTuber",
    feedback:
      "Roshni's edits boosted my channel and gave it a cinematic transformation! Highly professional work!",
  },
  {
    name: "Priya Sharma",
    role: "Founder - Pixel Labs",
    feedback:
      "Her design sense and brand consistency are outstanding! Every creative asset was delivered beyond expectations.",
  },
  {
    name: "Rahul Mehta",
    role: "Content Creator",
    feedback:
      "Her reel edits increased my engagement by 150%! Smooth workflow and deadline-friendly.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow Background */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[200px] blur-[110px] opacity-40"
        style={{
          background: "radial-gradient(circle, #00ffc6 0%, transparent 70%)",
        }}
      />
      <h2 className="text-center text-4xl font-bold mb-10">
        Client <span className="text-[var(--accent)]">Testimonials</span>
      </h2>

      <div className="max-w-3xl mx-auto px-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-lg p-8 shadow-[0_0_30px_rgba(0,255,198,0.1)] text-center"
          >
            <FaQuoteLeft className="text-[var(--accent)] text-3xl mx-auto mb-4 opacity-80" />
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              “{testimonials[index].feedback}”
            </p>
            <h3 className="text-xl font-semibold text-white">
              {testimonials[index].name}
            </h3>
            <p className="text-sm text-gray-400">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prevTestimonial}
            className="px-5 py-2 border border-white/20 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
          >
            Prev
          </button>
          <button
            onClick={nextTestimonial}
            className="px-5 py-2 border border-white/20 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
