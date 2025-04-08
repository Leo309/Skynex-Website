import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-gray-900 dark:text-white">Our Solutions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful tools and platforms that transform complex data into clear, 
            actionable insights for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* E-Commerce Solutions */}
          <div>
            <h3 className="heading-md mb-4 text-skynex-blue dark:text-skynex-accent">Financial SaaS Tools</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Make informed financial decisions with our specialized SaaS solutions. 
              Our data-driven tools help you understand market trends, forecast outcomes, 
              and optimize your financial strategy with precision.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Inflation impact analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Economic trend visualization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Investment scenario modeling</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Real-time financial monitoring</span>
              </li>
            </ul>
          </div>
          
          {/* Financial Analytics Tools Image */}
          <div className="rounded-lg overflow-hidden h-64 md:h-96 flex items-center justify-center">
            <img 
              src="/images/tools/Financial Analytics Tools.png" 
              alt="Financial Analytics Tools Interface" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
          {/* AI & Smart Agents Image */}
          <div className="rounded-lg overflow-hidden h-64 md:h-96 flex items-center justify-center md:order-1 order-2">
            <img 
              src="/images/tools/AI & Smart Agents Cartoon.png" 
              alt="AI & Smart Agents Interface" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* AI & Data Solutions */}
          <div className="md:order-2 order-1">
            <h3 className="heading-md mb-4 text-skynex-blue dark:text-skynex-accent">AI & Smart Agents</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Unlock new possibilities with our intelligent AI solutions. We're developing advanced 
              AI agents that can answer your general business questions, automate processes, and 
              provide insights without complex setup.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Predictive analytics models</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Custom AI assistant development</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Business intelligence dashboards</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Data-driven decision support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}