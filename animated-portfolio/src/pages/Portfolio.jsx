// FILE: src/pages/Portfolio.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    title: "Cinematic Brand Edit",
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-drone-over-manarola-4050/1080p.mp4",
    thumb: "https://images.unsplash.com/photo-1515125520141-3e3b67bc90b4?q=80&w=1000",
  },
  {
    title: "Music Promo Edit",
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-starry-night-sky-7444/1080p.mp4",
    thumb: "https://images.unsplash.com/photo-1518972559570-7cc1309f3222?q=80&w=1000",
  },
  {
    title: "Logo Reveal Motion",
    type: "image",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
  },
  {
    title: "Creative Poster Design",
    type: "image",
    src: "https://images.unsplash.com/photo-1558655146-9f40138ed6c7?q=80&w=1000",
  },
  {
    title: "Product Ad Edit",
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-slicing-a-kiwi-7652/1080p.mp4",
    thumb: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000",
  },
];

const Portfolio = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(".portfolio-item", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Neon Glow */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle,#00ffc6,transparent)" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-4xl font-bold mb-12">
          Selected <span className="text-[var(--accent)]">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item group overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-[var(--accent)] transition relative"
            >
              {item.type === "video" ? (
                <video
                  controls
                  poster={item.thumb}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>

              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-[var(--accent)] blur-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
