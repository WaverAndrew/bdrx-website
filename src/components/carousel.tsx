import Image from "next/image";

const companies = [
  {
    name: "Deloitte",
    logo: "/logos/deloitte.svg",
  },
  {
    name: "PwC",
    logo: "/logos/pwc.svg",
  },
  {
    name: "KPMG",
    logo: "/logos/kpmg.svg",
  },
  {
    name: "EY",
    logo: "/logos/ey.svg",
  },
  {
    name: "Goldman Sachs",
    logo: "/logos/goldman.svg",
  },
  {
    name: "Morgan Stanley",
    logo: "/logos/morgan-stanley.svg",
  },
  {
    name: "JP Morgan",
    logo: "/logos/jpmorgan.svg",
  },
  {
    name: "Bank of America",
    logo: "/logos/bofa.svg",
  },
];

export function CompanyBanner() {
  return (
    <div className="w-full overflow-hidden py-12 bg-gray-50">
      <div className="flex animate-scroll">
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-16 transition-all duration-300 transform"
            style={
              {
                filter: "blur(var(--blur))",
                opacity: "var(--opacity)",
                transform: "scale(var(--scale))",
                ["--blur" as string]: "0px",
                ["--opacity" as string]: "1",
                ["--scale" as string]: "1",
              } as React.CSSProperties
            }
          >
            <div className="relative w-32 h-16 flex items-center justify-center">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 8s linear infinite;
          }
        }

        .animate-scroll > div:nth-child(n) {
          --blur: 4px;
          --opacity: 0.5;
          --scale: 0.9;
        }

        .animate-scroll > div:nth-child(3n + 1),
        .animate-scroll > div:nth-child(3n + 2) {
          --blur: 0px;
          --opacity: 1;
          --scale: 1;
        }
      `}</style>
    </div>
  );
}
