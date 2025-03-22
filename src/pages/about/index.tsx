import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-base to-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-accent-primary">AI Hustle Lab</span>
            </h1>
            <p className="text-xl text-text-secondary">
              We're on a mission to help aspiring entrepreneurs launch profitable side hustles using the power of AI.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-text-secondary mb-6">
              AI Hustle Lab was born from a simple observation: many people have great business ideas but struggle to find the time, resources, or know-how to turn them into reality. With the rise of AI tools, we saw an opportunity to democratize entrepreneurship and make it accessible to everyone.
            </p>
            <p className="text-text-secondary mb-6">
              Our founder, a serial entrepreneur with a background in AI and machine learning, experienced firsthand the challenges of launching side hustles while working a full-time job. After successfully launching several businesses in his spare time, he created a system that could be replicated by anyone, regardless of their experience or technical skills.
            </p>
            <p className="text-text-secondary">
              Today, AI Hustle Lab is dedicated to helping busy professionals launch profitable side hustles in a weekend, using the power of AI to automate and accelerate the process.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-text-secondary mb-6">
              At AI Hustle Lab, our mission is to empower 1 million people to launch profitable side hustles by 2030. We believe that entrepreneurship should be accessible to everyone, not just those with technical skills, business experience, or abundant free time.
            </p>
            <p className="text-text-secondary mb-6">
              We're committed to:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Democratizing entrepreneurship through AI-powered tools and resources</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Providing step-by-step guidance to turn ideas into profitable businesses</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Creating a supportive community of like-minded entrepreneurs</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Continuously innovating to make entrepreneurship faster, easier, and more accessible</span>
              </li>
            </ul>
            <p className="text-text-secondary">
              We believe that everyone deserves the opportunity to create additional income streams, pursue their passions, and achieve financial freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Speed & Efficiency</h3>
                <p className="text-text-secondary">
                  We believe in rapid execution and making the most of limited time. Our tools and resources are designed to help you launch quickly and efficiently.
                </p>
              </div>
              <div className="card">
                <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-text-secondary">
                  We're committed to making entrepreneurship accessible to everyone, regardless of their background, experience, or technical skills.
                </p>
              </div>
              <div className="card">
                <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-text-secondary">
                  We embrace cutting-edge AI technology to solve problems and create new opportunities for entrepreneurs.
                </p>
              </div>
              <div className="card">
                <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-text-secondary">
                  We foster a supportive community where entrepreneurs can learn from each other, share resources, and celebrate successes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Side Hustle?</h2>
            <p className="text-text-secondary text-lg mb-8">
              Join us on the journey to entrepreneurship and launch your profitable side hustle in a weekend.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/weekend-hustle-launcher" className="btn btn-primary">
                Explore Weekend Hustle Launcher
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
