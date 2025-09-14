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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll be in touch within 24 hours.');
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="gravesend-sans text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-yellow-600">Touch</span>
            </h1>
            <p className="gellix-font text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss how we can help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="gravesend-sans text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="gravesend-sans block text-gray-700 font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="gellix-font w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="gravesend-sans block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="gellix-font w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="gravesend-sans block text-gray-700 font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="gellix-font w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="gravesend-sans block text-gray-700 font-medium mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="gellix-font w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    >
                      <option className='gellix-font' value="">Select a service</option>
                      <option className='gellix-font' value="seo">SEO</option>
                      <option className='gellix-font' value="ppc">PPC Advertising</option>
                      <option className='gellix-font' value="social">Social Media Marketing</option>
                      <option className='gellix-font' value="content">Content Marketing</option>
                      <option className='gellix-font' value="web">Web Development</option>
                      <option className='gellix-font' value="analytics">Analytics & Reporting</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="gravesend-sans block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="gellix-font w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="gellix-font w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-sm font-semibold hover:shadow-lg transition-shadow"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:pl-8"
            >
              <h2 className="gravesend-sans text-3xl font-bold text-gray-900 mb-8">Let's start a conversation</h2>
              <p className="gellix-font text-gray-600 mb-8 leading-relaxed">
                We're here to help you achieve your digital marketing goals. Reach out to us through any of the channels below, and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-sm">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="gellix-font font-semibold text-gray-900">Phone</div>
                    <div className="gellix-font text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-sm">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="gellix-font font-semibold text-gray-900">Email</div>
                    <div className="gellix-font text-gray-600">hello@stratforddigital.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-sm">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="gellix-font font-semibold text-gray-900">Office</div>
                    <div className="gellix-font text-gray-600">123 Digital Avenue<br />Avondale, Harare</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-sm">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="gellix-font font-semibold text-gray-900">Business Hours</div>
                    <div className="gellix-font text-gray-600">Mon - Fri: 9AM - 6PM EST<br />Weekend: By appointment</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-sm">
                <h3 className="gravesend-sans font-semibold text-gray-900 mb-3">Free Consultation</h3>
                <p className="gellix-font text-gray-600 mb-4">
                  Book a 30-minute strategy session with our experts to discuss your digital marketing needs.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gellix-font bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-sm font-medium hover:shadow-lg transition-shadow"
                  onClick={() => toast.success('Consultation booking form would open here!')}
                >
                  Book Free Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="gravesend-sans text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does it take to see results?',
                a: 'Results vary by service, but typically you can expect to see initial improvements within 30-60 days for PPC campaigns and 3-6 months for SEO efforts.'
              },
              {
                q: 'Do you work with small businesses?',
                a: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our strategies are tailored to fit your budget and goals.'
              },
              {
                q: 'What makes you different from other agencies?',
                a: 'Our data-driven approach, transparent reporting, and focus on long-term partnerships set us apart. We prioritize your success over short-term gains.'
              },
              {
                q: 'Can you help with our existing campaigns?',
                a: 'Yes, we offer campaign audits and optimization services. We can analyze your current efforts and recommend improvements for better performance.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-lg"
              >
                <h3 className="gravesend-sans font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="gellix-font text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;