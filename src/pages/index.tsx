import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-base to-dark-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Launch Your Business <span className="text-accent-primary">in a Weekend</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                AI-powered tools and resources to help you start your side hustle and turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/get-started">
                  <a className="btn btn-primary text-center">Get Started</a>
                </Link>
                <Link href="/weekend-hustle-launcher">
                  <a className="btn btn-outline text-center">Explore Weekend Hustle Launcher</a>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                {/* Placeholder for hero image */}
                <div className="w-full h-96 bg-dark-elevated rounded-xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-accent-primary text-lg">Hero Image Placeholder</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-accent-primary opacity-20 blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent-tertiary opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How AI Hustle Lab Works</h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Our platform combines AI-powered tools with proven business frameworks to help you launch your side hustle in a weekend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Find Your Idea</h3>
              <p className="text-text-secondary mb-4">
                Discover profitable side hustle ideas tailored to your skills, interests, and time availability.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-secondary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Plan Your Launch</h3>
              <p className="text-text-secondary mb-4">
                Get a step-by-step blueprint and timeline to launch your business over a weekend.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-tertiary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Execute with AI</h3>
              <p className="text-text-secondary mb-4">
                Use our AI-powered tools to create content, build your online presence, and automate tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekend Hustle Launcher Promo */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Introducing <span className="text-accent-primary">Weekend Hustle Launcher</span>
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                Our all-in-one platform designed to help you launch a profitable side hustle in just a weekend. Coming soon!
              </p>
              <Link href="/weekend-hustle-launcher">
                <a className="btn btn-primary">Learn More</a>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                {/* Placeholder for app mockup */}
                <div className="w-full h-96 bg-dark-elevated rounded-xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-accent-primary text-lg">App Mockup Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
