import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLeaf, FaChartLine, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GiOrange } from 'react-icons/gi';

const AboutUsPreview: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Video Background Hero */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src="/sunnyorchard.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-700/20 to-yellow-500/20 z-1"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Navigation */}
          <nav className="px-8 py-6 flex justify-between items-center bg-white/80 backdrop-blur-sm">
            <div className="flex items-center">
              <motion.div
                animate={{
                  scale: [1, 0.95, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2
                }}
                className="mr-3 text-3xl text-yellow-500"
              >
                <GiOrange />
              </motion.div>
              <span className="text-3xl font-bold text-green-600">SQUEEZE</span>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg mb-6"
            >
              Argentina's Citrus Revolution
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 drop-shadow-md"
            >
              Vibrant, sustainable citrus production powered by cutting-edge technology
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full text-white bg-gradient-to-r from-green-500 to-yellow-500 hover:shadow-xl transition-all"
              >
                Our Web App <FaArrowRight className="ml-3" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-500 mb-6">
            About Citrus Argentina
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Empowering Sustainable Citrus Farming Through Innovation
          </p>
        </div>

        {/* Women-Led Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-10 rounded-3xl">
            <h3 className="text-3xl font-bold text-green-600 mb-6">A Women-Led Force for Change</h3>
            <p className="text-lg text-gray-700 mb-6">
              Certified <span className="font-bold">U.S. Organic</span> and <span className="font-bold">WMBE</span> (Women-Owned Minority Business Enterprise), we champion diversity in agriculture.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Inspiring women and minority groups in agribusiness</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Providing resources and mentorship</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Advocating for equitable technology access</span>
              </li>
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="bg-yellow-100 rounded-3xl flex items-center justify-center">
            <div className="text-center p-10">
              <div className="text-9xl mb-6">👩‍🌾</div>
              <p className="text-green-600 font-medium">Women-led agriculture innovation</p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-16">What We Offer</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Farmers */}
            <div className="border-2 border-green-200 rounded-3xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaLeaf className="text-green-500 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">For Farmers</h4>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <span>AI-Powered Insights: Pest detection & yield optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <span>Supply Chain Tools with blockchain transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <span>Organic Certification Support</span>
                </li>
              </ul>
            </div>

            {/* Buyers */}
            <div className="border-2 border-yellow-200 rounded-3xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <FaChartLine className="text-yellow-500 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">For Buyers & Partners</h4>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  <span>Premium Organic Citrus from vetted farms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  <span>Real-Time Market Data analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  <span>Diverse Supplier Network prioritizing minorities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="text-center mb-24">
          <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-16">Our Impact</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "1,200+", label: "Farms empowered with smart technology" },
              { value: "30%", label: "Increase in profits for partner growers" },
              { value: "500+", label: "Women trained in agtech and business" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-green-50 to-white p-8 rounded-3xl hover:shadow-md transition-all">
                <div className="text-5xl font-bold text-green-500 mb-4">{item.value}</div>
                <p className="text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Social */}
      <footer className="bg-gradient-to-r from-green-600 to-yellow-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Join the Movement</h3>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.instagram.com/citrusargentinacorp/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/citrus-argentina-corp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
          <p className="text-white/80">© {new Date().getFullYear()} Citrus Argentina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPreview;