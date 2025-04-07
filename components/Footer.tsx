'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-skynex-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image 
                src="/images/SKYNEX_500_WHITE.png" 
                alt="SKYNEX" 
                width={180} 
                height={60} 
                className="h-14 w-auto object-contain" 
              />
            </div>
            <p className="mb-4 text-gray-300">
              SKYNEX GLOBAL COMMERCE & TECH INC.<br />
              Building data-driven, AI-powered tools to enhance financial, e-commerce, and business solutions globally as SaaS.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.13 10.13 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482A13.962 13.962 0 013.093 3.06a4.822 4.822 0 00-.666 2.473c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a14.024 14.024 0 007.557 2.209c9.054 0 14-7.503 14-14 0-.214-.005-.428-.015-.64A9.936 9.936 0 0024 4.59l-.047-.02z" />
                </svg>
              </a>
              <a href="https://github.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-300 hover:text-white">Our Tools</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://inflation.skynexdigital.com" className="text-gray-300 hover:text-white">Inflation Impact Calculator</a>
              </li>
              <li>
                <span className="text-gray-500">More Coming Soon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            <p>Copyright &copy; {new Date().getFullYear()} SKYNEX GLOBAL COMMERCE & TECH INC. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}