// FILE: src/pages/Portfolio.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    title: "Cinematic Brand Edit",
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-taking-photos-with-a-polaroid-camera-87/1080p.mp4",
    thumb: "https://cdn.coverr.co/videos/coverr-taking-photos-with-a-polaroid-camera-87/thumbnail?width=1000",
  },
  {
    title: "Music Promo Edit",
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-pouring-coffee-into-a-mug-1176/1080p.mp4",
    thumb: "https://cdn.coverr.co/videos/coverr-pouring-coffee-into-a-mug-1176/thumbnail?width=1000",
  },
  {
    title: "Logo Reveal Motion",
    type: "image",
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1200",
  },
  {
    title: "Creative Poster Design",
    type: "image",
    src: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200",
  },
  {
    title: "Product Ad Edit",
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-dog-lying-on-the-floor-3429/1080p.mp4",
    thumb: "https://cdn.coverr.co/videos/coverr-dog-lying-on-the-floor-3429/thumbnail?width=1000",
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
