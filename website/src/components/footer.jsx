
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Star, Users, TrendingUp, Globe, 
  Search, Smartphone, BarChart3, PenTool, Mail, Phone,
  MapPin, Clock, CheckCircle, Play, Award, Target,
  MessageCircle, Eye, MousePointer, Zap
} from 'lucide-react';
import { toast, Toaster } from 'sonner';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="gravesend-sans font-bold text-xl">Stratford Digital</span>
            </div>
            <p className="gellix-font text-gray-400 mb-6">
              Transforming businesses through innovative digital marketing strategies and measurable results.
            </p>
            <div className="flex space-x-4">
              {[MessageCircle, Eye, Users].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer"
                >
                  <Icon size={20} />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="gravesend-sans font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/services" className="gellix-font hover:text-yellow-400 transition-colors">SEO</Link></li>
              <li><Link to="/services" className="gellix-font hover:text-yellow-400 transition-colors">PPC Advertising</Link></li>
              <li><Link to="/services" className="gellix-font hover:text-yellow-400 transition-colors">Social Media</Link></li>
              <li><Link to="/services" className="gellix-font hover:text-yellow-400 transition-colors">Content Marketing</Link></li>
              <li><Link to="/services" className="gellix-font hover:text-yellow-400 transition-colors">Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="gravesend-sans font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about" className="gellix-font hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="gellix-font hover:text-yellow-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="gellix-font hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="gellix-font hover:text-yellow-400 transition-colors">Careers</a></li>
              <li><a href="#" className="gellix-font hover:text-yellow-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="gravesend-sans font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className='gellix-font '>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className='gellix-font '>hello@stratforddigital.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className='gellix-font '>Avondale, Harare</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="gellix-font">&copy; 2025 Stratford Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;