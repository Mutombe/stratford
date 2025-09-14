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


const AboutPage = () => {
  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Strategy Director', image: '👩‍💼' },
    { name: 'Mike Chen', role: 'Creative Director', image: '👨‍🎨' },
    { name: 'Lisa Rodriguez', role: 'Analytics Manager', image: '👩‍💻' },
    { name: 'David Park', role: 'SEO Specialist', image: '👨‍💻' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className=" gravesend-sans text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-yellow-600">Stratford Digital</span>
            </h1>
            <p className="gellix-font text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of digital marketing experts dedicated to helping businesses thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="gravesend-sans text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="gellix-font text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, Stratford Digital emerged from a simple belief: every business deserves exceptional digital marketing that drives real results. What started as a small team of passionate marketers has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="gellix-font text-gray-600 mb-8 leading-relaxed">
                We combine creativity with data-driven insights to create campaigns that not only look great but perform exceptionally. Our approach is built on transparency, collaboration, and measurable success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="gravesend-sans text-3xl font-bold text-yellow-600">6+</div>
                  <div className="gellix-font text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="gravesend-sans text-3xl font-bold text-yellow-600">500+</div>
                  <div className="gellix-font text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-sm p-8 text-white">
                <h3 className="gravesend-sans text-2xl font-bold mb-4">Our Mission</h3>
                <p className="gellix-font leading-relaxed">
                  To empower businesses with innovative digital marketing strategies that drive growth, build lasting relationships, and create meaningful impact in their industries.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="gravesend-sans text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="gellix-font text-xl text-gray-600">
              Talented professionals who are passionate about your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="gravesend-sans text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="gellix-font text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="gravesend-sans text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Results-Driven', desc: 'We focus on measurable outcomes that impact your bottom line.' },
              { icon: Users, title: 'Client-Centric', desc: 'Your success is our success. We build lasting partnerships.' },
              { icon: Zap, title: 'Innovation', desc: 'We stay ahead of trends to keep your business competitive.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-sm bg-gradient-to-br from-yellow-50 to-orange-50"
              >
                <value.icon className="mx-auto text-yellow-600 mb-4" size={48} />
                <h3 className="gravesend-sans text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="gellix-font text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;