import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from 'lucide-react';
import data from '../../../../data/dummy_data.json';

export default function Contact() {
  const { personal, socials } = data;

  const socialLinks = [
    { icon: Github, url: socials.github, label: 'GitHub', color: 'hover:text-purple-400 hover:border-purple-500/30' },
    { icon: Linkedin, url: socials.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-500/30' },
    { icon: Twitter, url: socials.twitter, label: 'Twitter', color: 'hover:text-cyan-400 hover:border-cyan-500/30' },
    { icon: Mail, url: `mailto:${socials.email}`, label: 'Email', color: 'hover:text-pink-400 hover:border-pink-500/30' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Get In{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Let's build something remarkable together.
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Whether you have a project in mind, want to discuss a potential partnership, or simply want to say hello, feel free to drop a message.
            </p>

            <div className="space-y-4 pt-6">
              {/* Email Card */}
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gray-900/30 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                    Email Me
                  </span>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors block mt-0.5">
                    {socials.email}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-900/30 border border-white/5 backdrop-blur-md">
                <div className="p-3.5 rounded-xl bg-pink-500/10 text-pink-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-gray-200 block mt-0.5">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Socials Row */}
          <div className="flex gap-3 pt-8 lg:pt-0">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3.5 rounded-xl bg-gray-900/40 border border-white/10 text-gray-400 hover:text-white hover:bg-gray-900/60 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-gray-900/25 border border-white/5 backdrop-blur-md shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-gray-950/60 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-gray-950/60 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can I help you?"
                className="w-full px-5 py-4 rounded-xl bg-gray-950/60 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Message
              </label>
              <textarea
                placeholder="Tell me more about your project..."
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-gray-950/60 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-300 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer copyright */}
      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Designed & Built with <span className="text-pink-500 animate-pulse">❤️</span>
        </p>
      </div>
    </section>
  );
}
