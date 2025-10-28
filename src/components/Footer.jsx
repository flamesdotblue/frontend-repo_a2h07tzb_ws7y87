import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          <div>
            <h3 className="text-white text-2xl font-semibold">Ready to accelerate?</h3>
            <p className="mt-2 text-white/70 max-w-md">
              Tell us about your goals — we’ll assemble a tailored, cross-functional team and ship results fast.
            </p>
          </div>
          <form className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              required
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              required
            />
            <textarea
              rows="4"
              placeholder="What are you building?"
              className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              required
            />
            <button type="submit" className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium hover:bg-white/90 transition w-fit">
              Request Proposal
            </button>
          </form>
        </div>

        <div className="mt-12 flex items-center justify-between text-sm text-white/50">
          <p>© {new Date().getFullYear()} BlueShift IT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Security</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
