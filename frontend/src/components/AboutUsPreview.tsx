import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLeaf, FaChartLine, FaTruck, FaDollarSign, FaUsers } from 'react-icons/fa';

// Placeholder for illustrations (replace with your actual illustrations)
const CitrusIllustration = () => (
  <div className="relative">
    {/* Main citrus plant illustration */}
    <div className="w-64 h-64 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full flex items-center justify-center mx-auto">
      <div className="w-48 h-48 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center">
        <div className="w-32 h-32 bg-yellow-50 rounded-full"></div>
      </div>
    </div>
    {/* Leaves */}
    <div className="absolute -top-10 left-1/4 w-16 h-24 bg-green-400 rounded-full transform rotate-12"></div>
    <div className="absolute top-0 right-1/4 w-20 h-28 bg-green-500 rounded-full transform -rotate-6"></div>
    {/* Hand illustration */}
    <div className="absolute -bottom-10 right-1/4 w-24 h-32 bg-orange-100 rounded-lg transform rotate-45"></div>
  </div>
);

const FeatureIllustration = ({ color }: { color: string }) => (
  <div className={`w-20 h-20 bg-gradient-to-br from-${color}-300 to-${color}-500 rounded-xl mx-auto flex items-center justify-center`}>
    <div className={`w-16 h-16 bg-${color}-100 rounded-lg flex items-center justify-center`}>
      <div className={`w-12 h-12 bg-${color}-50 rounded-full`}></div>
    </div>
  </div>
);

const AboutUsPreview: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Vibrant Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-orange-50 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 sm:text-6xl lg:text-7xl">
                Argentina's Citrus<br />Revolution
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-xl text-orange-800">
                Vibrant, sustainable citrus production powered by cutting-edge technology
              </p>
              <div className="mt-10">
                <Link
                  to="/login"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500"
                >
                  Join Our Network <FaArrowRight className="ml-3 -mr-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Illustration */}
        <div className="relative mt-16 sm:mt-24 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 to-orange-200 transform skew-x-6 -rotate-6 rounded-l-3xl"></div>
          <div className="relative h-full w-full flex items-center justify-center px-8">
            <CitrusIllustration />
          </div>
        </div>
      </div>

      {/* Illustrated Features */}
      <div className="py-16 bg-white sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Our Platform</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Designed for citrus excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-orange-700 lg:mx-auto">
              Every illustration represents our commitment to vibrant, healthy citrus
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FaLeaf className="text-orange-500 text-2xl" />,
                  title: 'Orchard Health',
                  description: 'Vibrant trees start with our real-time monitoring system',
                  color: 'orange'
                },
                {
                  icon: <FaChartLine className="text-yellow-500 text-2xl" />,
                  title: 'Pest Protection',
                  description: 'Colorful alerts keep your groves safe and productive',
                  color: 'yellow'
                },
                {
                  icon: <FaTruck className="text-green-500 text-2xl" />,
                  title: 'Supply Chain',
                  description: 'From tree to table with full-color tracking',
                  color: 'green'
                },
                {
                  icon: <FaDollarSign className="text-blue-500 text-2xl" />,
                  title: 'Market Insights',
                  description: 'Bright data for smarter selling decisions',
                  color: 'blue'
                },
                {
                  icon: <FaUsers className="text-purple-500 text-2xl" />,
                  title: 'Grower Network',
                  description: 'Connect with Argentina\'s citrus community',
                  color: 'purple'
                }
              ].map((feature, index) => (
                <div key={index} className="pt-10">
                  <FeatureIllustration color={feature.color} />
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vibrant Stats */}
      <div className="bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 sm:text-4xl">
              Argentina's Citrus in Color
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { value: '12+', label: 'Citrus Varieties', color: 'from-orange-300 to-orange-500' },
              { value: '85%', label: 'Premium Quality', color: 'from-yellow-300 to-yellow-500' },
              { value: '35+', label: 'Export Countries', color: 'from-green-300 to-green-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className={`mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-r ${stat.color}`}>
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 sm:text-4xl">
              Ready to grow with us?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-orange-700">
              Join Argentina's most vibrant citrus network today
            </p>
            <div className="mt-8">
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500"
              >
                Create Account <FaArrowRight className="ml-3 -mr-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPreview;
