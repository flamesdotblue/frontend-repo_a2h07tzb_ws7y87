import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const wrapperRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      const y = window.scrollY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setScrollY(y);
          rafId = null;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const rotate = Math.min(scrollY / 600, 0.15); // subtle tilt with scroll
  const scale = 1 + Math.min(scrollY / 4000, 0.06); // slight scale as you scroll

  return (
    <section className="relative h-[120vh] overflow-hidden flex items-center" aria-label="Hero">
      {/* 3D Background */}
      <div
        ref={wrapperRef}
        className="absolute inset-0"
        style={{
          transform: `perspective(1200px) translateZ(0) rotateX(${rotate}turn) scale(${scale})`,
          transformOrigin: 'center top',
          transition: 'transform 0.1s linear',
        }}
      >
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlays that don't block pointer interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.25),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              Enterprise-grade IT Outsourcing
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Build faster with a world‑class remote engineering team
            </h1>
            <p className="mt-5 text-white/80 max-w-2xl">
              We assemble elite squads for web, cloud, and AI initiatives — while you stay focused on growth. Flexible engagement models, transparent delivery, and measurable outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium shadow/20 shadow-white/10 hover:bg-white/90 transition">
                Start a Project
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 transition">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
