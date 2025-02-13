import React from "react";
import Activities from "@/components/Activities";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark z-10" />
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-gold mb-6">
            BDRX
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Europe's First Undergraduate Club Focused on Restructuring and
            Distressed Investments
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/join"
              className="inline-block bg-primary-gold text-primary-dark px-8 py-3 rounded-md font-semibold hover:bg-primary-gold/90 transition-colors duration-200"
            >
              Join Us
            </Link>
            <Link
              href="/about"
              className="inline-block border border-primary-gold text-primary-gold px-8 py-3 rounded-md font-semibold hover:bg-primary-gold/10 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-gold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission at BDRX is to provide a forum for students interested
              in distressed assets, credit, and restructuring by giving a
              platform to exchange ideas, develop crucial career skills, and
              network with investment professionals through external events.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <Activities />

      {/* Divisions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-gold mb-12">
            Our Divisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="custom-card">
              <h3 className="text-xl font-semibold text-primary-gold mb-4">
                Corporate Finance
              </h3>
              <p className="text-gray-300">
                Covering capital markets, M&A, and financial decision making. We
                explore valuation, deal structuring, and financial advisory,
                equipping members with skills to analyze complex transactions.
              </p>
            </div>
            <div className="custom-card">
              <h3 className="text-xl font-semibold text-primary-gold mb-4">
                Special Situations & Private Equity
              </h3>
              <p className="text-gray-300">
                Focusing on high stakes investing in distressed opportunities
                and alternative assets. Members gain exposure to leveraged
                buyouts, turnaround strategies, and asset restructuring.
              </p>
            </div>
            <div className="custom-card">
              <h3 className="text-xl font-semibold text-primary-gold mb-4">
                Credit Investments
              </h3>
              <p className="text-gray-300">
                Exploring fixed income from a fundamental credit perspective,
                focusing on leveraged finance, distressed debt, and credit risk
                assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-gold mb-6">
            Join Europe's Leading Undergraduate Finance Club
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            As the first undergraduate club in Europe focused on restructuring,
            distressed investments, and credit, we provide unique opportunities
            for ambitious students.
          </p>
          <Link
            href="/join"
            className="inline-block bg-primary-gold text-primary-dark px-8 py-3 rounded-md font-semibold hover:bg-primary-gold/90 transition-colors duration-200"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}
