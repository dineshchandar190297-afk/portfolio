import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Burnout Guardian',
    description: 'AI-powered burnout prediction platform that identifies high-risk patterns in workplace behavior using machine learning integration and secure JWT authentication.',
    techStack: ['React', 'Node.js', 'JWT', 'Machine Learning'],
    role: 'Full-stack development and AI model integration',
  },
  {
    title: 'Cipher Proxy',
    description: 'A secure search intelligence platform designed for high-performance data retrieval and protected search capabilities.',
    techStack: ['React', 'Node.js', 'Search Intelligence', 'Security'],
    role: 'Project Lead and Primary Developer',
  },
  {
    title: 'NRI Students Teaching Platform',
    description: 'An interactive educational platform built to connect international students with specialized teaching resources and online learning tools.',
    techStack: ['React', 'Node.js', 'Firebase', 'Live Teaching'],
    role: 'Full-stack developer and platform architect',
  },
  {
    title: 'Quantum Web Simulator',
    description: 'A sophisticated web-based simulator for visualizing and testing complex quantum computing operations and algorithms in a browser.',
    techStack: ['React', 'JavaScript', 'Quantum Computing', 'WebGL'],
    role: 'Lead Developer and Algorithmic Designer',
  },
  {
    title: 'IPL Auction Optimizer',
    description: 'A data-driven strategy platform for optimizing sports auctions using historical player performance analytics and budget constraints.',
    techStack: ['React', 'Python', 'Data Analytics', 'Optimization'],
    role: 'Data Scientist and Developer',
  },
  {
    title: 'AegisHer',
    description: 'A modern, high-performance safety platform built with several integrated safety algorithms to provide real-time protection and monitoring.',
    techStack: ['React', 'Node.js', 'Safety Algorithms', 'Real-time Systems'],
    role: 'System Architect and Developer',
  },
  {
    title: 'Civic Shield',
    description: 'A tamper-proof welfare disbursement validation system designed to ensure transparency and integrity in institutional welfare distribution.',
    techStack: ['Blockchain', 'Smart Contracts', 'Security', 'React'],
    role: 'Backend and Security Architect',
  },
  {
    title: 'Aadhaar Analytics & Forecasting',
    description: 'A comprehensive data analytics and forecasting dashboard developed for the UIDAI Hackathon to visualize identity distribution and predict future trends.',
    techStack: ['Data Analytics', 'Forecasting', 'React', 'Python'],
    role: 'Lead Developer and Data Analyst',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">AI-powered solutions</span> that make an impact
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.6) 0%, rgba(12, 16, 28, 0.8) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 255, 255, 0.1)',
              }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              {/* Content */}
              <div className="relative p-8 bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-2xl">
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>


                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
