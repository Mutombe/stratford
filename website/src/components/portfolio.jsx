
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

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'seo', 'ppc', 'social', 'web'];
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Growth Campaign',
      category: 'seo',
      client: 'Fashion Retailer',
      result: '300% increase in organic traffic',
      image: '🛍️',
      description: 'Complete SEO overhaul resulting in top rankings for competitive keywords.'
    },
    {
      id: 2,
      title: 'SaaS Lead Generation',
      category: 'ppc',
      client: 'Tech Startup',
      result: '250% ROI improvement',
      image: '💻',
      description: 'Targeted PPC campaigns across Google and LinkedIn for B2B lead generation.'
    },
    {
      id: 3,
      title: 'Restaurant Chain Social Media',
      category: 'social',
      client: 'Food & Beverage',
      result: '500K+ new followers',
      image: '🍕',
      description: 'Comprehensive social media strategy driving brand awareness and foot traffic.'
    },
    {
      id: 4,
      title: 'Healthcare Website Redesign',
      category: 'web',
      client: 'Medical Practice',
      result: '400% conversion increase',
      image: '🏥',
      description: 'Modern, responsive website with improved user experience and appointment booking.'
    },
    {
      id: 5,
      title: 'Local Business SEO',
      category: 'seo',
      client: 'Home Services',
      result: '#1 local rankings',
      image: '🏠',
      description: 'Local SEO strategy positioning client as the top service provider in their area.'
    },
    {
      id: 6,
      title: 'E-learning Platform Launch',
      category: 'ppc',
      client: 'Education',
      result: '10,000+ students enrolled',
      image: '📚',
      description: 'Multi-channel PPC campaign for successful online course platform launch.'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              Our <span className="text-yellow-600">Portfolio</span>
            </h1>
            <p className="gellix-font text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable digital marketing success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`gellix-font px-6 py-3 rounded-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="text-6xl mb-4 text-center">{project.image}</div>
                    <h3 className="gravesend-sans text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="gellix-font text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="gravesend-sans text-sm text-gray-500">{project.client}</span>
                      <span className="gravesend-sans bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="bg-green-50 p-4 rounded-sm">
                      <div className="gravsend-sans text-sm text-gray-600 mb-1">Result:</div>
                      <div className="gellix-font font-semibold text-green-600">{project.result}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="gravesend-sans text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jennifer Smith',
                company: 'Tech Innovations Inc.',
                quote: 'Stratford Digital transformed our online presence. Our leads increased by 400% in just 6 months!',
                rating: 5
              },
              {
                name: 'Michael Brown',
                company: 'Brown & Associates',
                quote: 'Professional, results-driven team. They truly understand digital marketing and deliver exceptional results.',
                rating: 5
              },
              {
                name: 'Sarah Wilson',
                company: 'Wilson Retail Group',
                quote: 'The ROI we\'ve seen from their campaigns is incredible. Best investment we\'ve made for our business.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="gellix-font text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="gravesend-sans font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="gravesend-sans text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;