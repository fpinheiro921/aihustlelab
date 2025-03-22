import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function WeekendHustleLauncherPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-base to-dark-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-accent-primary">Weekend Hustle Launcher</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Launch your profitable side hustle in just a weekend with our all-in-one platform. Coming soon!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="btn btn-primary">
                  Join the Waitlist
                </button>
                <Link href="/#features" className="btn btn-outline text-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                {/* Placeholder for app mockup */}
                <div className="w-full h-96 bg-dark-elevated rounded-xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-accent-primary text-lg">App Mockup Placeholder</span>
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
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Weekend Hustle Launcher provides everything you need to launch your side hustle in just a weekend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-accent-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Find Your Idea</h3>
              <p className="text-text-secondary mb-4">
                Use our AI-powered idea generator to find the perfect side hustle based on your skills, interests, and time availability.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-accent-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Get Your Blueprint</h3>
              <p className="text-text-secondary mb-4">
                Receive a detailed, step-by-step blueprint tailored to your specific side hustle idea.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-accent-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Create Content</h3>
              <p className="text-text-secondary mb-4">
                Generate marketing content, social media posts, and website copy with our AI content tools.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-accent-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Launch & Grow</h3>
              <p className="text-text-secondary mb-4">
                Follow your weekend schedule to launch your side hustle and start making money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Waitlist</h2>
            <p className="text-text-secondary text-lg mb-8">
              Be the first to know when Weekend Hustle Launcher is available. Early access members will receive special bonuses and discounts.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-0">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-lg bg-dark-elevated text-text-primary border border-dark-elevated focus:border-accent-primary focus:outline-none sm:rounded-r-none"
                required
              />
              <button
                type="submit"
                className="btn btn-primary rounded-r-lg sm:rounded-l-none"
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-text-tertiary text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Everything you need to know about Weekend Hustle Launcher.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-2">When will Weekend Hustle Launcher be available?</h3>
              <p className="text-text-secondary">
                We're currently in the final stages of development and plan to launch in Summer 2025. Join our waitlist to be the first to know when it's available.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-2">How much will it cost?</h3>
              <p className="text-text-secondary">
                We'll offer several pricing tiers to accommodate different needs and budgets. Early access members will receive special discounts.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-2">What types of side hustles can I launch?</h3>
              <p className="text-text-secondary">
                Weekend Hustle Launcher supports a wide range of side hustles, including freelance services, digital products, e-commerce stores, and more.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-2">Do I need technical skills to use it?</h3>
              <p className="text-text-secondary">
                No technical skills required! Our platform is designed to be user-friendly and accessible to everyone, regardless of technical background.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
