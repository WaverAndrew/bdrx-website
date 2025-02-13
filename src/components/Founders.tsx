interface FounderProps {
  name: string;
  title: string;
  image: string;
}

const founders: FounderProps[] = [
  {
    name: "Giacomo Cirò",
    title: "MSc in Artificial Intelligence, Bocconi University",
    image: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/000001.webp",
  },
  {
    name: "Marco Lomele",
    title: "MSc in Data Science, Bocconi University",
    image: "/founders/marco.jpg",
  },
  {
    name: "Giulio Caputi",
    title: "MSc in Statistics, Oxford University",
    image: "/founders/giulio.jpg",
  },
  {
    name: "Alessandro Morosini",
    title: "Master of Business Analytics, MIT",
    image: "/founders/alessandro.jpg",
  },
  {
    name: "Francesco Vacca",
    title: "MSc in Statistics, Oxford University",
    image: "/founders/francesco.jpg",
  },
  {
    name: "Costanza D'Ercole",
    title: "MSc in Computational Science, University of Amsterdam",
    image: "/founders/costanza.jpg",
  },
];

export default function Founders() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Founders
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Just a group of (slightly nerdy) students sharing the same passion
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-12">
          {founders.map((founder) => (
            <div key={founder.name} className="flex flex-col items-center">
              <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-base sm:text-lg font-medium text-white">
                  {founder.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-400">
                  {founder.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
