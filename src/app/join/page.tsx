import React from "react";
import Image from "next/image";

const JoinPage = () => {
  const applicationSteps = [
    {
      title: "CV Screening",
      description:
        "We review applications objectively, looking for candidates with a keen interest in distressed assets, restructuring, and credit investments. Please ensure your CV is properly formatted and highlights relevant experience and interests.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },

    {
      title: "Technical Interview",
      description:
        "A 30-minute discussion to assess your understanding of financial markets, restructuring concepts, and analytical capabilities. We focus on your thought process and ability to learn rather than just technical knowledge.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-gold mb-6">
            Join BDRX
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Applications are currently open for talented individuals passionate
            about distressed investments and restructuring.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeR6X_k60EIZzNIN_OyCUlSlqfWV1-UvZio0gNRSxb2CH2vfA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-gold text-primary-dark px-8 py-3 rounded-md font-semibold hover:bg-primary-gold/90 transition-colors duration-200"
          >
            Apply Now
          </a>
          <p className="text-gray-400 mt-4 font-bold">
            Current application window closes on 28/02/2025
          </p>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-primary-gold mb-12">
            Recruiting Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {applicationSteps.map((step, index) => (
              <div key={step.title} className="custom-card relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary-gold/10 text-primary-gold">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-gold">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Connector lines for desktop */}
                {index < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-primary-gold/30 transform translate-x-full" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Closing Banner */}
        <section className="relative overflow-hidden rounded-lg bg-gray-900/50 border border-gray-800">
          <div className="relative z-10 px-8 py-12 text-center">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards a career in distressed investments and
              restructuring. Join Europe's first undergraduate club focused on
              this exciting field.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeR6X_k60EIZzNIN_OyCUlSlqfWV1-UvZio0gNRSxb2CH2vfA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-gold text-primary-dark px-8 py-3 rounded-md font-semibold hover:bg-primary-gold/90 transition-colors duration-200"
            >
              Apply Now
            </a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/10 to-transparent opacity-20" />
        </section>
      </div>
    </main>
  );
};

export default JoinPage;
