import React from 'react';

export const metadata = {
  title: 'About Us | SKYNEX GLOBAL COMMERCE & TECH INC.',
  description: 'Learn about our mission, vision, and the team behind SKYNEX GLOBAL COMMERCE & TECH INC.',
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
            <p className="text-xl text-gray-300">
              Creating intelligent, data-driven tools to power better business decisions worldwide.
            </p>
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
          <h2 className="heading-lg mb-8 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>
                SKYNEX GLOBAL COMMERCE & TECH INC. was founded in British Columbia, Canada with a clear vision: creating technology solutions that transform how businesses operate in the digital space. This is the official website of SKYNEX GLOBAL COMMERCE & TECH INC., accessible at <a href="https://skynexdigital.com" className="text-skynex-blue dark:text-skynex-accent hover:underline">skynexdigital.com</a>.
              </p>
              <p>
                Our founder brings data expertise from analyzing multi-million dollar datasets and close relationships with successful e-commerce entrepreneurs. This unique combination of technical knowledge and business understanding drives our product development.
              </p>
              <p>
                We launched our Inflation Calculator as the first in a series of practical tools to help businesses make more informed financial decisions. Today, SKYNEX continues to expand our suite of data-driven SaaS solutions, serving clients globally from our offices in New York City and Vancouver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <div className="text-skynex-blue dark:text-skynex-accent mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
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
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
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
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We build tools and solutions you can count on, with a commitment to accuracy, 
                security, and consistent performance that earns your trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Our Team & Partners</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700">
                <div className="flex items-center justify-center h-64">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Founder & CEO</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Data Scientist & Business Strategist</p>
                <p className="text-gray-600 dark:text-gray-300">
                  With expertise in data analysis and business intelligence, our founder brings years of experience 
                  working with complex datasets and developing practical solutions for real-world business challenges.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700">
                <div className="flex items-center justify-center h-64">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Strategic Partners</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">E-Commerce & Technology Experts</p>
                <p className="text-gray-600 dark:text-gray-300">
                  We collaborate with industry-leading experts and businesses to ensure our tools and solutions 
                  address the real needs of the market. Our NYC-based e-commerce partner brings invaluable 
                  market insights and operational expertise to our product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">New York City</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our East Coast operations center, connecting us to the global financial hub and tech ecosystem.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">NYC Office Map</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Vancouver</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our West Coast headquarters, nestled in the vibrant tech community of British Columbia.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Vancouver Office Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
