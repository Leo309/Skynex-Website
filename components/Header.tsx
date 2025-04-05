'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-16 relative">
              <Image 
                src="/images/SKYNEX_500_BLUE.png" 
                alt="SKYNEX" 
                width={200} 
                height={60} 
                className="w-auto h-full object-contain block dark:hidden" 
                priority
              />
              <Image 
                src="/images/SKYNEX_500_WHITE.png" 
                alt="SKYNEX" 
                width={200} 
                height={60} 
                className="w-auto h-full object-contain hidden dark:block" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent">
              About
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent">
              Tools
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent">
              Contact
            </Link>
          </nav>

          {/* Dark/Light Mode Toggle Placeholder */}
          <div className="hidden md:flex items-center">
            <button className="btn-secondary text-sm">Try Our Tools</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4 shadow-inner">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/"
                className="text-gray-700 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="text-gray-700 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/tools"
                className="text-gray-700 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link 
                href="/contact"
                className="text-gray-700 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-2">
                <button className="btn-primary text-sm w-full">Try Our Tools</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}