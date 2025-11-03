// FILE: src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-[#0b0b0f]">
      {/* Glow background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle,#00ffc6,transparent)" }}
      ></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          Let’s Work <span className="text-[var(--accent)]">Together</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Have a project in mind? I’d love to hear about it. Let’s bring your
          idea to life with cinematic storytelling and stunning visuals.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-left"
          >
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[var(--accent)] text-xl" />
              <a href="mailto:hello@roshnikumari.com" className="text-gray-300">
                hello@roshnikumari.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[var(--accent)] text-xl" />
              <a href="tel:+919876543210" className="text-gray-300">
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationArrow className="text-[var(--accent)] text-xl" />
              <span className="text-gray-300">
                Mumbai, India • Available Worldwide 🌍
              </span>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md outline-none text-white focus:border-[var(--accent)]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md outline-none text-white focus:border-[var(--accent)]"
            />
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md outline-none text-white focus:border-[var(--accent)]"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[var(--accent)] text-black font-semibold rounded-md hover:shadow-[0_0_25px_#00ffc6] transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
