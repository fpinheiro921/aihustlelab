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
            <Link href="/" className="text-2xl font-bold">
              <span className="text-text-primary">AI</span>
              <span className="text-accent-primary">HustleLab</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text-secondary hover:text-accent-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-text-secondary hover:text-accent-primary transition-colors">
              About
            </Link>
            <Link href="/services" className="text-text-secondary hover:text-accent-primary transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-text-secondary hover:text-accent-primary transition-colors">
              Blog
            </Link>
            <Link href="/weekend-hustle-launcher" className="text-text-secondary hover:text-accent-primary transition-colors">
              Weekend Hustle Launcher
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-accent-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/get-started" className="btn btn-primary py-2 px-4">
              Get Started
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
              <Link
                href="/"
                className="text-text-secondary hover:text-accent-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-text-secondary hover:text-accent-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-text-secondary hover:text-accent-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-text-secondary hover:text-accent-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/weekend-hustle-launcher"
                className="text-text-secondary hover:text-accent-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Weekend Hustle Launcher
              </Link>
              <Link
                href="/contact"
                className="text-text-secondary hover:text-accent-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="btn btn-primary py-2 px-4 inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
