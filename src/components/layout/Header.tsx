import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-dark-surface shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold">
                <span className="text-text-primary">AI</span>
                <span className="text-accent-primary">HustleLab</span>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-text-secondary hover:text-accent-primary transition-colors">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-text-secondary hover:text-accent-primary transition-colors">
                About
              </a>
            </Link>
            <Link href="/services">
              <a className="text-text-secondary hover:text-accent-primary transition-colors">
                Services
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-text-secondary hover:text-accent-primary transition-colors">
                Blog
              </a>
            </Link>
            <Link href="/weekend-hustle-launcher">
              <a className="text-text-secondary hover:text-accent-primary transition-colors">
                Weekend Hustle Launcher
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-text-secondary hover:text-accent-primary transition-colors">
                Contact
              </a>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/get-started">
              <a className="btn btn-primary py-2 px-4">
                Get Started
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/">
                <a 
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a 
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </Link>
              <Link href="/services">
                <a 
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
              </Link>
              <Link href="/blog">
                <a 
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
              </Link>
              <Link href="/weekend-hustle-launcher">
                <a 
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Weekend Hustle Launcher
                </a>
              </Link>
              <Link href="/contact">
                <a 
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </Link>
              <Link href="/get-started">
                <a 
                  className="btn btn-primary py-2 px-4 inline-block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
