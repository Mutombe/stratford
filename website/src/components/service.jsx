
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

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Boost your organic visibility and drive qualified traffic to your website.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: MousePointer,
      title: 'Pay-Per-Click Advertising',
      description: 'Get immediate results with targeted PPC campaigns across all platforms.',
      features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Campaign Optimization'],
      price: 'Starting at $2,000/month'
    },
    {
      icon: Smartphone,
      title: 'Social Media Marketing',
      description: 'Build your brand and engage with your audience across social platforms.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Social Advertising'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that drives engagement and conversions.',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Email Campaigns'],
      price: 'Starting at $1,000/month'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track, measure, and optimize your marketing performance.',
      features: ['Custom Dashboards', 'Performance Reports', 'ROI Analysis', 'Conversion Tracking'],
      price: 'Starting at $800/month'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build fast, responsive websites that convert visitors into customers.',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization'],
      price: 'Starting at $5,000'
    }
  ];

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
              Our <span className="text-yellow-600">Services</span>
            </h1>
            <p className="gellix-font text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to help your business grow and succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-sm p-8 hover:border-yellow-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-sm">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="gravesend-sans text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="gellix-font text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="gravesend-sans font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="text-green-500" size={16} />
                            <span className="gellix-font text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="gravsend-sans text-lg font-semibold text-yellow-600">{service.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="gellix-font bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-sm font-medium hover:shadow-lg transition-shadow"
                        onClick={() => toast.success(`Let's discuss ${service.title}!`)}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="gravesend-sans text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="gellix-font text-xl text-gray-600">How we deliver exceptional results for our clients</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We analyze your business, goals, and target audience' },
              { step: '02', title: 'Strategy', desc: 'We develop a customized marketing strategy' },
              { step: '03', title: 'Execute', desc: 'We implement campaigns with precision and care' },
              { step: '04', title: 'Optimize', desc: 'We continuously monitor and improve performance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="gravesend-sans bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-2xl font-bold w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="gravesend-sans text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="gellix-font text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;