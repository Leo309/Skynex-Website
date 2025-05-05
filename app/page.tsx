import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-white via-sky-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 min-h-screen transition-colors duration-300">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-[80px] animate-float"></div>
        <div className="absolute bottom-20 right-[15%] w-72 h-72 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-[60px] animate-float-delayed"></div>
        <div className="absolute top-[40%] right-[30%] w-64 h-64 bg-sky-400/20 rounded-full mix-blend-overlay filter blur-[50px] animate-pulse"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-skynex-blue via-blue-700 to-skynex-blue dark:from-white dark:via-sky-200 dark:to-blue-300 leading-tight mb-6">
                Intelligent Decisions <br/>
                <span className="text-gray-800 dark:text-white">Powered by Data & AI</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                SKYNEX delivers powerful SaaS products that transform complex data into clear, actionable insights for finance and e-commerce teams.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products" 
                  className="px-8 py-3 rounded-full bg-skynex-blue dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500 text-white font-medium hover:bg-blue-700 dark:hover:shadow-lg dark:hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Explore Products
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-3 rounded-full bg-transparent border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white font-medium backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full">
                {/* 3D element visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[350px] h-[350px]">
                    <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 animate-spin-slow"></div>
                    <div className="absolute inset-4 rounded-full border-2 border-blue-500/40 animate-spin-reverse"></div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl overflow-hidden flex items-center justify-center">
                      <Image 
                        src="/images/tools/Intelligent_Decisions_Transparent.png"
                        alt="SKYNEX Financial Tools" 
                        width={260} 
                        height={220}
                        className="object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 opacity-95"
                      />
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-0 right-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl shadow-lg animate-float opacity-80"></div>
                    <div className="absolute bottom-10 left-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-400 rounded-lg shadow-lg animate-float-delayed opacity-80"></div>
                    <div className="absolute top-1/3 left-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-lg shadow-lg animate-pulse opacity-80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats in glassy cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors duration-300 group shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-skynex-blue dark:text-cyan-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-white transition-colors duration-300">2+</div>
              <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">AI-Powered Products</div>
            </div>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors duration-300 group shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-skynex-blue dark:text-cyan-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-white transition-colors duration-300">500+</div>
              <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">Daily Calculations</div>
            </div>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors duration-300 group shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-skynex-blue dark:text-cyan-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-white transition-colors duration-300">2</div>
              <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">Office Locations</div>
            </div>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors duration-300 group shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-skynex-blue dark:text-cyan-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-white transition-colors duration-300">100%</div>
              <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">Data-Driven</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Intelligent Products for Global Business</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At SKYNEX, we create powerful data-driven products that help businesses gain insights, make 
              better decisions and achieve competitive advantages in rapidly evolving markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">AI-Powered Products</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Leveraging the latest in artificial intelligence to create practical products that solve real-world problems for businesses worldwide.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">SaaS Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our tools are available as Software-as-a-Service, making powerful data solutions 
                accessible and scalable for organizations of every size and industry.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a1 1 0 10-2 0c0 .74.133 1.448.378 2.102.504 1.346 1.43 2.478 2.622 3.273C7.28 16.388 8.898 17 10.5 17c1.602 0 3.22-.612 4.5-1.625 1.192-.795 2.118-1.927 2.622-3.273C17.867 11.448 18 10.74 18 10a1 1 0 10-2 0c0 2.21-1.343 4.1-3.254 4.916A5.008 5.008 0 0010 10c0-1.11.363-2.14.988-2.97.027-.036.056-.07.087-.103A2.964 2.964 0 0110 7c.555 0 1.087.12 1.564.336a2.96 2.96 0 011.337 1.235c.27.435.43.904.474 1.38a2.964 2.964 0 01-.621 2.03 2.99 2.99 0 01-1.262.902 2.977 2.977 0 01-1.55.186a2.965 2.965 0 01-1.306-.563A2.995 2.995 0 018 10c0-.365.078-.714.22-1.03z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Data Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Turn raw data into actionable insights with our advanced analytics and intelligence solutions that drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Products & Solutions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful data platforms that transform complex information into clear, actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gradient-to-br from-white/80 to-white/90 dark:from-white/5 dark:to-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500 p-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_NAME}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Understand how inflation affects your purchasing power over time with precise, 
                  data-driven insights and interactive visualizations.
                </p>
                <a 
                  href={process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_URL} 
                  className="inline-block text-blue-600 dark:text-cyan-400 font-medium group-hover:text-skynex-blue dark:group-hover:text-white transition-colors duration-300"
                >
                  Launch Calculator →
                </a>
              </div>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-gradient-to-br from-white/80 to-white/90 dark:from-white/5 dark:to-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 relative">
              <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-medium rounded-full">
                Coming Soon
              </div>
              <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-500 p-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                  Financial Analytics Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Gain powerful insights into financial markets and performance metrics with comprehensive 
                  analytics designed for investors and decision makers.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block text-pink-600 dark:text-pink-400 font-medium group-hover:text-pink-700 dark:group-hover:text-white transition-colors duration-300"
                >
                  Join Waitlist →
                </Link>
              </div>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-gradient-to-br from-white/80 to-white/90 dark:from-white/5 dark:to-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-500 p-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a1 1 0 10-2 0c0 .74.133 1.448.378 2.102.504 1.346 1.43 2.478 2.622 3.273C7.28 16.388 8.898 17 10.5 17c1.602 0 3.22-.612 4.5-1.625 1.192-.795 2.118-1.927 2.622-3.273C17.867 11.448 18 10.74 18 10a1 1 0 10-2 0c0 2.21-1.343 4.1-3.254 4.916A5.008 5.008 0 0010 10c0-1.11.363-2.14.988-2.97.027-.036.056-.07.087-.103A2.964 2.964 0 0110 7c.555 0 1.087.12 1.564.336a2.96 2.96 0 011.337 1.235c.27.435.43.904.474 1.38a2.964 2.964 0 01-.621 2.03 2.99 2.99 0 01-1.262.902 2.977 2.977 0 01-1.55.186 2.965 2.965 0 01-1.306-.563A2.995 2.995 0 018 10c0-.365.078-.714.22-1.03z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  Custom AI Solutions
                </h3>
                <p className="text-gray-400 mb-4">
                  Bespoke AI tools tailored to your specific business needs, from predictive analytics
                  to natural language processing and data visualization.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block text-emerald-600 dark:text-emerald-400 font-medium group-hover:text-emerald-700 dark:group-hover:text-white transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/80 to-white/90 dark:from-white/10 dark:to-white/5 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-2xl p-10 text-center shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Ready to Transform Your Data?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join forward-thinking businesses already using SKYNEX tools to make smarter, data-driven decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/products" 
                className="px-8 py-3 rounded-full bg-skynex-blue dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500 text-white font-medium hover:bg-blue-700 dark:hover:shadow-lg dark:hover:shadow-blue-500/40 transition-all duration-300"
              >
                Explore Our Products
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 rounded-full bg-transparent border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white font-medium backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}