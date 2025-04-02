import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import FeaturedTools from '../components/FeaturedTools';
import ServiceSection from '../components/ServiceSection';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-skynex-light to-gray-100 dark:from-skynex-dark dark:to-gray-900">
      <HeroSection />
      
      {/* Company Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Intelligent Tools for Global Business</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At SKYNEX, we create powerful data-driven tools that help businesses gain insights, make 
              better decisions and achieve competitive advantages in rapidly evolving markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-skynex-blue mb-4">
                {/* Icon placeholder */}
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Leveraging the latest in artificial intelligence to create practical tools that solve real-world problems.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-skynex-blue mb-4">
                {/* Icon placeholder */}
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">SaaS Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our tools are available as Software-as-a-Service, making powerful data solutions 
                accessible and scalable for organizations of every size and industry.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-skynex-blue mb-4">
                {/* Icon placeholder */}
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a1 1 0 10-2 0c0 .74.133 1.448.378 2.102.504 1.346 1.43 2.478 2.622 3.273C7.28 16.388 8.898 17 10.5 17c1.602 0 3.22-.612 4.5-1.625 1.192-.795 2.118-1.927 2.622-3.273C17.867 11.448 18 10.74 18 10a1 1 0 10-2 0c0 2.21-1.343 4.1-3.254 4.916A5.008 5.008 0 0010 10c0-1.11.363-2.14.988-2.97.027-.036.056-.07.087-.103A2.964 2.964 0 0110 7c.555 0 1.087.12 1.564.336a2.96 2.96 0 011.337 1.235c.27.435.43.904.474 1.38a2.964 2.964 0 01-.621 2.03 2.99 2.99 0 01-1.262.902 2.977 2.977 0 01-1.55.186 2.965 2.965 0 01-1.306-.563A2.995 2.995 0 018 10c0-.365.078-.714.22-1.03z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Turn raw data into actionable insights with our advanced analytics and intelligence solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedTools />
      <ServiceSection />
      <ContactCTA />
    </div>
  );
}