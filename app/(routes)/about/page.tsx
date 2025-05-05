import React from 'react';

export const metadata = {
  title: 'About Us | SKYNEX GLOBAL COMMERCE & TECH INC.',
  description: 'Learn about our mission, vision, and the team behind SKYNEX Digital.',
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-skynex-light to-gray-100 dark:from-skynex-dark dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-skynex-dark to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">About SKYNEX</h1>
            <p className="text-xl text-gray-300 whitespace-nowrap">Creating intelligent, data-driven tools to power better business decisions worldwide.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-md mb-6 text-skynex-blue dark:text-skynex-accent">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At SKYNEX, our mission is to transform complex data into intuitive, actionable tools that businesses can rely on.
                We're committed to developing powerful SaaS solutions that democratize access to sophisticated analytical capabilities.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We believe that powerful technology should be accessible, understandable, and beneficial for 
                businesses of all sizes. Our tools and solutions are designed with this philosophy at their core.
              </p>
            </div>
            <div>
              <h2 className="heading-md mb-6 text-skynex-blue dark:text-skynex-accent">Our Vision</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We envision a future where businesses can seamlessly harness the power of advanced technology to make 
                better decisions, serve their customers more effectively, and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                SKYNEX aims to be at the forefront of this transformation, constantly innovating and developing 
                solutions that make this vision a reality for our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg mb-8 text-center text-gray-900 dark:text-white">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="mb-6">
              SKYNEX Digital was founded in British Columbia, Canada with a clear vision: creating technology solutions that transform how businesses operate in the digital space.
              </p>

              <p className="mb-6">
              Our founder brings data expertise from analyzing multi-million dollar datasets and close relationships with successful e-commerce entrepreneurs. This unique combination of technical knowledge and business understanding drives our product development.
              </p>

              <p>
              We launched our Real Return Analyzer as the first in a series of practical tools to help businesses make more informed financial decisions. Today, SKYNEX continues to expand our suite of data-driven SaaS solutions, serving clients globally from our offices in New York City and Vancouver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center text-gray-900 dark:text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <div className="text-skynex-blue dark:text-skynex-accent mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly push boundaries to create solutions that harness the latest technological advancements 
                in ways that deliver practical value.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <div className="text-skynex-blue dark:text-skynex-accent mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of working together - both within our team and with our clients - 
                to achieve exceptional results that exceed expectations.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <div className="text-skynex-blue dark:text-skynex-accent mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We build tools and solutions you can count on, with a commitment to accuracy, 
                security, and consistent performance that earns your trust.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Locations */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center text-gray-900 dark:text-white">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">New York City</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our East Coast operations center, connecting us to the global financial hub and tech ecosystem.
              </p>
              <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-64 overflow-hidden rounded-lg">
                  <img 
                    src="/images/locations/NYC_Location.png" 
                    alt="NYC Office Location" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Metro Vancouver</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our West Coast headquarters, nestled in the vibrant tech community of British Columbia.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-64 overflow-hidden rounded-lg">
                  <img 
                    src="/images/locations/Burnaby_Location.png" 
                    alt="Vancouver (Burnaby) Office Location" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
