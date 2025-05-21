import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered Products | SKYNEX GLOBAL COMMERCE & TECH INC.',
  description: 'Explore our suite of data-driven, AI-powered SaaS products for financial analytics, business intelligence, and decision support.',
};

export default function ProductsPage() {
  return (
    <div className="bg-gradient-to-b from-skynex-light to-gray-100 dark:from-skynex-dark dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-skynex-dark to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Digital Products</h1>
            <p className="text-xl text-gray-300">
              Powerful, data-driven solutions that help you make better business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Showcase */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-12 text-center text-gray-900 dark:text-white">Our Products</h2>
            
            {/* Real Return Analyzer*/}
            <div className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-skynex-blue p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 text-white">{process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_NAME}</h3>
                  <p className="mb-6">
                    Track inflation's real impact on your investments and purchasing power.
                  </p>
                  <div className="mb-8">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Historical inflation data</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Interactive visualizations</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Personalized calculations</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Projection scenarios</span>
                    </div>
                  </div>
                  <a 
                    href={process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-white text-skynex-blue hover:bg-blue-50 font-bold py-3 px-6 rounded-md transition-colors"
                  >
                    Launch Calculator
                  </a>
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <div className="w-full h-64 overflow-hidden rounded-lg">
                      <img 
                        src="/images/tools/Real_Return_Analyzer.png" 
                        alt="Real Return Analyzer Tool Interface" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Why Use Our {process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_NAME}?</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Data-driven insights for smarter investments:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Inflation-adjusted projections</li>
                    <li>• Real-time purchasing power tracking</li>
                    <li>• Evidence-based decision making</li>
                    <li>• Cross-cycle performance analysis</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* CollabOS Partner Management System */}
            <div className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 text-white">Collab OS</h3>
                  <p className="mb-6">
                    Lightweight, intuitive platform for seamless partner and campaign management.
                  </p>
                  <div className="mb-8">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Easy-to-learn interface</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Smart deadline alerts</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Real-time progress tracking</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Data-driven insights</span>
                    </div>
                  </div>
                  <a 
                    href="https://collabos.skynexdigital.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-white text-indigo-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-md transition-colors"
                  >
                    Launch Platform
                  </a>
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <div className="w-full h-64 overflow-hidden rounded-lg">
                      <img 
                        src="/images/tools/CollabOS.png" 
                        alt="CollabOS Partner Management System Interface" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Simplify Your Collaboration</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Boost efficiency with a platform designed for speed and clarity:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Centralize partnerships in one intuitive hub</li>
                    <li>• Never miss deadlines with timely notifications</li>
                    <li>• Monitor project status with minimal effort</li>
                    <li>• Make smarter decisions with visual analytics</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Custom Solutions */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Need a Custom Solution?</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                We specialize in developing tailored tools and platforms for specific business needs. 
                Our team can work with you to create custom solutions that address your unique challenges.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary py-3 px-8"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build Our Tools */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center text-gray-900 dark:text-white">How We Build Our Products</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-skynex-blue dark:text-skynex-accent text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">Research</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                We identify real market needs through in-depth research and analysis.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-skynex-blue dark:text-skynex-accent text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">Design</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Our intuitive interfaces make complex financial data accessible.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-skynex-blue dark:text-skynex-accent text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">Development</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Built with cutting-edge technology for reliability and performance.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-skynex-blue dark:text-skynex-accent text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">Refinement</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Continuous improvement based on user feedback and market changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - For future use */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center text-gray-900 dark:text-white">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="italic text-gray-600 dark:text-gray-300 mb-6">
                "The Real Return Analyzer has become an essential tool for our financial planning. It's intuitive, 
                accurate, and provides insights that help us make better investment decisions."
              </p>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white">Financial Analyst</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Investment Firm</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="italic text-gray-600 dark:text-gray-300 mb-6">
                "What sets SKYNEX's tools apart is the attention to detail and user experience. 
                The data is comprehensive, but presented in a way that's easy to understand and actionable."
              </p>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white">E-Commerce Manager</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Retail Company</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="italic text-gray-600 dark:text-gray-300 mb-6">
                "We've been on the waitlist for the AI Market Analyzer and can't wait to start using it. 
                If it's anything like their other tools, it will be a game-changer for our market research."
              </p>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white">Marketing Director</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tech Startup</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
