"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Code, PenTool, BookOpen, Search, Briefcase, FileText } from "lucide-react";

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* Header Section */}
          <motion.section variants={itemVariants} className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-heading)] tracking-tight">
              Mukul <span className="text-gradient">Raj</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
              Detail-oriented content writer and tech enthusiast bridging the gap between AI, Data Science, and SEO-driven narratives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2"><MapPin size={16} /> Gurugram / New Delhi, India</span>
              <a href="mailto:2022ebcs246@online.bits-pilani.ac.in" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail size={16} /> Email</a>
              <a href="https://github.com/Mukul7Raj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><FaGithub size={16} /> GitHub</a>
              <a href="https://linkedin.com/in/mukul-raj-057b28218" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><FaLinkedin size={16} /> LinkedIn</a>
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section variants={itemVariants} className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <PenTool size={24} />
              </div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Professional Summary</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Detail-oriented content writer and travel enthusiast with a strong technical foundation and proven ability to turn research-heavy material into clear, engaging, SEO-friendly copy. Experienced in destination research, keyword-driven blog writing, editing, and proofreading for accuracy, grammar, and originality. Comfortable working with SEO teams, optimising headings and meta descriptions, and maintaining a consistent brand voice across long-form guides and itineraries.
            </p>
          </motion.section>

          {/* Education & Competencies */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.section variants={itemVariants} className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-32 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Education</h2>
              </div>
              <div className="space-y-6 relative z-10">
                <div>
                  <h3 className="font-semibold text-lg text-white">B.Tech. AI & Data Science</h3>
                  <p className="text-accent text-sm mb-1">Guru Gobind Singh Indraprastha University (GGSIPU) • 2022 – 2027</p>
                  <p className="text-gray-400 text-sm">CGPA: 7.8/10 | Technical Writing, Data Research</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">B.Sc. Computer Science</h3>
                  <p className="text-accent text-sm mb-1">BITS Pilani • 2022 – 2026</p>
                  <p className="text-gray-400 text-sm">CGPA: 8.15/10 | Research Methodology, Content Systems</p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-32 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                  <Search size={24} />
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Core Competencies</h2>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["Content Writing", "SEO Writing", "Content Research", "Editing & Proofreading", "Storytelling", "Audience Empathy", "WordPress", "LaTeX", "Google Workspace"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Experience */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)]">Experience</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  role: "AI & Software Freelancer",
                  company: "Outlier",
                  date: "Jul 2025 – Oct 2025",
                  desc: "Evaluated and rewrote AI-generated multi-turn content for consistency, factual correctness, tone, and readability. Produced structured written feedback and content guidelines that improved output quality.",
                },
                {
                  role: "Developer Intern",
                  company: "Ratna Sagar Pvt. Ltd.",
                  date: "May 2026 – Jul 2026",
                  desc: "Owned structured content workflows and internal documentation used by technical and editorial teams, focusing on clarity, consistency, and reliable hand-off.",
                },
                {
                  role: "Software Developer Intern",
                  company: "Zidio Development",
                  date: "Jul 2024 – Oct 2024",
                  desc: "Built and documented application components with emphasis on clear structure and consistent behaviour. Collaborated under tight feedback cycles refining deliverables.",
                }
              ].map((job, idx) => (
                <div key={idx} className="glass p-6 rounded-xl border-l-4 border-l-accent flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-accent text-sm mb-3">{job.company} • {job.date}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400">
                <Code size={24} />
              </div>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)]">Selected Projects</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Travel Blog & Destination Guide Series",
                  tech: "WordPress, SEO",
                  desc: "SEO-optimised destination guides and itineraries covering budget, culture, and offbeat experiences with targeted headings and meta descriptions.",
                  link: "github.com/Mukul7Raj/travel-content-portfolio"
                },
                {
                  title: "SEO Content Pipeline System",
                  tech: "Python, Content Ops",
                  desc: "Lightweight system to organise keyword research, cluster topics, and draft SEO-friendly article outlines with internal linking suggestions.",
                  link: "github.com/Mukul7Raj/seo-content-pipeline"
                },
                {
                  title: "Editorial Review Quality Harness",
                  tech: "Python, Editing Workflows",
                  desc: "Reusable checklist-driven harness to grade drafts for grammar, clarity, factual accuracy, and originality, standardising editorial quality.",
                  link: "github.com/Mukul7Raj/content-quality-harness"
                }
              ].map((project, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-xs text-purple-400 font-mono">{project.tech}</p>
                  </div>
                  <p className="text-sm text-gray-400 flex-1 mb-4">{project.desc}</p>
                  <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 flex items-center gap-2 hover:text-white mt-auto">
                    <FileText size={16} /> View Project
                  </a>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer variants={itemVariants} className="text-center py-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">© 2026 Mukul Raj. Crafted with Next.js & Tailwind CSS.</p>
          </motion.footer>
        </motion.div>
      </div>
    </main>
  );
}
