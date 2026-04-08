import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-cyan-500/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} Portfolio. Tous droits réservés.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center text-gray-400 text-sm">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 mx-1 text-cyan-400 fill-cyan-400" />
            <span>et React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;