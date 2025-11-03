// FILE: src/sections/About.jsx
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-reveal', {
                y: 30,
                opacity: 0,
                stagger: 0.12,
                ease: 'power2.out',
                scrollTrigger: { trigger: ref.current, start: 'top 85%' }
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} className="mx-auto max-w-7xl px-4 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="about-reveal text-3xl sm:text-4xl font-bold">About Me</h2>
                    <p className="about-reveal text-gray-300/90">
                        I’m <span className="text-[var(--accent)] font-semibold">Roshni Kumari</span> — a creative visual storyteller who transforms ideas into stunning media experiences.
                        With expertise in <strong>Video Editing</strong>, <strong>Graphic Design</strong>, and <strong>Social Media Content Strategy</strong>,
                        I help brands communicate with clarity and cinematic style.
                    </p>
                    <p className="about-reveal text-gray-300/90">
                        Whether it’s crafting engaging YouTube edits, high-converting ad videos,
                        eye-catching thumbnails, or aesthetic brand posts — I bring **emotion + storytelling + design** together in every project.
                    </p>
                    <h3 className="about-reveal font-semibold text-lg mt-6">Tools I Use</h3>
                    <ul className="about-reveal grid grid-cols-2 gap-3 text-sm text-gray-200/90">
                        <li className="rounded-lg border border-white/10 p-3">Premiere Pro</li>
                        <li className="rounded-lg border border-white/10 p-3">After Effects</li>
                        <li className="rounded-lg border border-white/10 p-3">DaVinci Resolve</li>
                        <li className="rounded-lg border border-white/10 p-3">Photoshop</li>
                        <li className="rounded-lg border border-white/10 p-3">Illustrator</li>
                        <li className="rounded-lg border border-white/10 p-3">Canva Pro</li>
                        <li className="rounded-lg border border-white/10 p-3">Figma</li>
                        <li className="rounded-lg border border-white/10 p-3">Meta Business Suite</li>
                    </ul>
                </div>
                <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1519121785383-3229633bb75b?q=80&w=1600&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="Roshni working"
                        />
                    </div>
                    <div
                        className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full blur-2xl"
                        style={{ background: 'radial-gradient(circle, rgba(0,255,204,0.35), transparent 60%)' }}
                    />
                </div>
            </div>
        </section>
    )
}
