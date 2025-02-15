"use client";

import Image from "next/image";

const companies = [
  {
    name: "Company 1",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel1.webp",
  },
  {
    name: "Company 2",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel2.webp",
  },
  {
    name: "Company 3",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel3.webp",
  },
  {
    name: "Company 4",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel4.webp",
  },
  {
    name: "Company 5",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel5.webp",
  },
  {
    name: "Company 6",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel6.webp",
  },
  {
    name: "Company 7",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel7.webp",
  },
  {
    name: "Company 8",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel8.webp",
  },
  {
    name: "Company 9",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel9.webp",
  },

  {
    name: "Company 11",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel11.webp",
  },
  {
    name: "Company 12",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel12.webp",
  },
  {
    name: "Company 13",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel13.webp",
  },
  {
    name: "Company 14",
    logo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/carousel14.webp",
  },
];

export function CompanyBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-primary-gold mb-8">
        Our members have received offers from
      </h2>
      <div className="w-full overflow-hidden py-12">
        <div className="flex animate-scroll">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[160px]"
            >
              <div className="relative w-40 h-20">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain hover:opacity-100 transition-all duration-300"
                  sizes="160px"
                  priority={index < 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          animation: scroll 22s linear infinite;
          width: fit-content;
          display: flex;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
