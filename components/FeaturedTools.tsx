import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedTools() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Digital Tools</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Data-powered solutions designed to enhance decision-making and help your 
            business thrive in today's competitive environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Inflation Calculator */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="p-6 flex-grow">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 mr-4">
                  <svg className="w-6 h-6 text-skynex-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Inflation Calculator</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Accurately measure the impact of inflation on your purchasing power over time. 
                Our calculator uses official data sources to provide precise insights into how 
                inflation affects your financial planning.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Historical inflation data</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Visual comparison charts</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Future projection models</span>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <a 
                href="https://inflation.skynexdigital.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full text-center py-3"
              >
                Launch Calculator
              </a>
            </div>
          </div>
          
          {/* Coming Soon Tool */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="p-6 flex-grow">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI Market Analyzer</h3>
                <span className="ml-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs py-1 px-2 rounded-full">Coming Soon</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Harness the power of artificial intelligence to analyze market trends, predict 
                consumer behavior, and optimize your business strategy with actionable insights.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Advanced NLP processing</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Competitive analysis</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Real-time trend detection</span>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link 
                href="/contact"
                className="btn-secondary w-full text-center py-3"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/tools" className="text-skynex-blue dark:text-skynex-accent hover:underline inline-flex items-center">
            View All Tools
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}