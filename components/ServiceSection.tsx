import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Solutions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful tools and platforms that transform complex data into clear, 
            actionable insights for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* E-Commerce Solutions */}
          <div>
            <h3 className="heading-md mb-4 text-skynex-blue dark:text-skynex-accent">Financial Analytics Tools</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Make informed financial decisions with our sophisticated analytics tools. 
              Our data-driven solutions help you understand market trends, forecast outcomes,
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
          {/* AI Solutions Image - Will be replaced when available */}
          <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-8 flex items-center justify-center h-64 md:h-96 md:order-1 order-2">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="font-medium">AI Solutions</p>
              <p className="text-xs mt-2">Coming soon</p>
            </div>
          </div>
          
          {/* AI & Data Solutions */}
          <div className="md:order-2 order-1">
            <h3 className="heading-md mb-4 text-skynex-blue dark:text-skynex-accent">AI & Data Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Unlock the potential of your data with our advanced AI and analytics solutions. 
              We help businesses make smarter decisions, automate processes, and gain 
              competitive insights through data-driven strategies.
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
                <span className="text-gray-700 dark:text-gray-300">Custom AI tool development</span>
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
                <span className="text-gray-700 dark:text-gray-300">Data pipeline development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}