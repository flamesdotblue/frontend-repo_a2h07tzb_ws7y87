import React from 'react';
import { Server, Shield, Code, Cloud } from 'lucide-react';

const ServiceCard = ({ Icon, title, desc }) => (
  <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
    <div className="absolute -inset-px rounded-xl bg-gradient-to-tr from-cyan-400/0 via-fuchsia-500/0 to-indigo-400/0 opacity-0 group-hover:opacity-20 transition" />
    <div className="relative">
      <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-white border border-white/10">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black via-[#06070d] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            What we do
          </h2>
          <p className="mt-3 text-white/70">
            End-to-end ownership across product, platform, and AI. Scale up instantly with a dedicated, high-performing distributed team.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            Icon={Code}
            title="Product Engineering"
            desc="Full-stack web and mobile development, from rapid MVPs to global-scale platforms."
          />
          <ServiceCard
            Icon={Cloud}
            title="Cloud & DevOps"
            desc="Infrastructure as code, CI/CD pipelines, observability, and cost-optimized scaling."
          />
          <ServiceCard
            Icon={Server}
            title="Data & AI"
            desc="Data platforms, ML pipelines, and AI integrations that unlock new capabilities."
          />
          <ServiceCard
            Icon={Shield}
            title="Security by Design"
            desc="Proactive security reviews, hardening, SSO, compliance, and privacy-focused builds."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
