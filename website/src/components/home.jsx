import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Globe,
  Search,
  Smartphone,
  BarChart3,
  PenTool,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Play,
  Award,
  Target,
  MessageCircle,
  Eye,
  MousePointer,
  Zap,
} from "lucide-react";
import { toast, Toaster } from "sonner";

const HomePage = () => {
  const [currentService, setCurrentService] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      desc: "Boost your search rankings",
    },
    { icon: Smartphone, title: "Social Media", desc: "Engage your audience" },
    { icon: BarChart3, title: "Analytics", desc: "Data-driven insights" },
    { icon: PenTool, title: "Content Creation", desc: "Compelling narratives" },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('/4.jpeg')]"></div>
        </div>

        {/* Background Team Image */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90 relative">
            <div className="absolute inset-0 bg-[url('/pic8.jpg')] opacity-20"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="pt-4 text-white"
            >
              {/* Small badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-sm px-4 py-2 mb-8"
              >
                <Award className="text-yellow-400" size={16} />
                <span className="gellix-font text-yellow-400 text-sm font-medium">
                  Top Digital Marketing Agency
                </span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="gravesend-sans text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Creating{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-2xl text-black font-black transform -rotate-1 inline-block">
                    brands
                  </span>
                </span>
                <br />
                and digital{" "}
                <span className="relative inline-block mt-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-2xl text-black font-black transform rotate-1 inline-block">
                    solutions
                  </span>
                </span>
              </h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <p className="gellix-font text-xl text-gray-300 leading-relaxed mb-4">
                  We design exceptional brand experiences, web design, mobile
                  apps, websites for startups and enterprises.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="gellix-font w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="gellix-font">500+ Projects Delivered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="gellix-font w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="gellix-font">98% Client Satisfaction</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gellix-font bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
                  onClick={() => toast.success("Let's start your project!") && navigate("/contact")}
                >
                  Start Your Project <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/portfolio")}
                  className="gellix-font border-2 border-yellow-400/30 text-white px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-2 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all"
                >
                  <Play size={20} /> View Our Work
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Interactive Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:ml-8"
            >
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-sm p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="gravesend-sans text-2xl font-bold text-white mb-2">
                    Ready to Transform?
                  </h3>
                  <p className="gellix-font text-gray-300">
                    Get your free strategy consultation
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className={`p-4 rounded-sm text-center transition-all duration-300 cursor-pointer ${
                        index === currentService
                          ? "bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 scale-105"
                          : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                      onClick={() => setCurrentService(index)}
                    >
                      <service.icon
                        className="mx-auto mb-2 text-yellow-400"
                        size={24}
                      />
                      <h4 className="gravesend-sans font-medium text-white text-sm mb-1">
                        {service.title}
                      </h4>
                      <p className="gellix-font text-xs text-gray-400">{service.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA in Card */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="gellix-font hidden sm:block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-sm font-bold hover:shadow-lg transition-all"
                  onClick={() => toast.success("Free consultation booked!") && navigate("/contact")}
                >
                  Get Free Consultation
                </motion.button>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute hidden sm:block -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 rounded-sm shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="gravesend-sans text-2xl font-bold">500+</div>
                    <div className="gellix-font text-xs opacity-80">Projects</div>
                  </div>
                  <div className="w-px h-8 bg-black/20"></div>
                  <div className="text-center">
                    <div className="gravesend-sans text-2xl font-bold">4.9</div>
                    <div className="gellix-font text-xs opacity-80 flex items-center gap-1">
                      <Star className="fill-current" size={10} />
                      Rating
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Trusted Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-sm shadow-lg"
              >
                <div className="gravesend-sans text-xs text-gray-300 mb-1">Trusted by</div>
                <div className="gellix-font font-semibold">150+ Companies</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-center"
          >
            <div className="gellix-font text-sm mb-2">Scroll to explore</div>
            <div className="w-px h-8 bg-gradient-to-b from-yellow-400 to-transparent mx-auto"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="gravesend-sans text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="gellix-font text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="gravesend-sans text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="gellix-font text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital
              marketing services that drive real business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Search Engine Optimization",
                desc: "Improve your visibility and rank higher on search engines with our proven SEO strategies.",
              },
              {
                icon: MousePointer,
                title: "Pay-Per-Click Advertising",
                desc: "Maximize your ROI with targeted PPC campaigns across Google, Facebook, and LinkedIn.",
              },
              {
                icon: Smartphone,
                title: "Social Media Marketing",
                desc: "Build brand awareness and engage your audience across all social media platforms.",
              },
              {
                icon: PenTool,
                title: "Content Marketing",
                desc: "Create compelling content that resonates with your audience and drives conversions.",
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                desc: "Get detailed insights into your campaigns performance with comprehensive reporting.",
              },
              {
                icon: Globe,
                title: "Web Development",
                desc: "Build responsive, fast-loading websites that convert visitors into customers.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="text-yellow-600 mb-4" size={40} />
                <h3 className="gravesend-sans text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="gellix-font text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="gravesend-sans text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="gellix-font text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust Stratford
              Digital to drive their growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gellix-font bg-white text-yellow-600 px-8 py-4 rounded-sm font-semibold hover:shadow-xl transition-shadow inline-flex items-center gap-2"
              onClick={() => toast.success("Let's start your transformation!") && navigate("/contact")}
            >
              Get Your Free Consultation <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
