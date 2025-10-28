import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-blue-500" />
          <span className="font-semibold tracking-tight text-white">BlueShift IT</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#process" className="hover:text-white transition">Process</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 hover:bg-white/20 transition text-sm">
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;
