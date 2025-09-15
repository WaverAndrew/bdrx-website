import React from "react";
import Image from "next/image";

const TeamPage = () => {
  const board = [
    {
      name: "Edward Ramirez",
      role: "President",
      linkedin: "https://www.linkedin.com/in/edwardramirezuk/",
      photo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/000007.webp",
    },
    {
      name: "Nikos Lioudakis",
      role: "Vice President",
      linkedin: "https://www.linkedin.com/in/nikos-lioudakis-0a8a63236/",
      photo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/000008.webp",
    },
    {
      name: "Konstantin Bodenschatz",
      role: "Head of Corporate Finance",
      linkedin: "https://www.linkedin.com/in/konstantin-bodenschatz/",
      photo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/0000010.webp",
    },
    {
      name: "Emilie Thomas",
      role: "Head of Credit Investments",
      linkedin: "https://www.linkedin.com/in/emiliethomas1/",
      photo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/000004.webp",
    },
    {
      name: "Edoardo Campagna",
      role: "Head of Special Situations & PE",
      linkedin: "https://www.linkedin.com/in/edoardo-campagna-640a602a5/",
      photo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/00009.webp",
    },
    {
      name: "Marit Huenlein",
      role: "Head of Operations",
      linkedin: "https://www.linkedin.com/in/marit-huenlein-b2a677284/",
      photo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/000002.webp",
    },
    {
      name: "Carlo Orlandi",
      role: "Head of Coverage",
      linkedin: "https://www.linkedin.com/in/orlandi-carlo/",
      photo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/000005.webp",
    },
    {
      name: "Francesca De Fazio",
      role: "Head of Communications",
      linkedin: "https://www.linkedin.com/in/francesca-de-fazio-a2b17b34b/",
      photo: "https://pub-9fbf6f8305744d88a6e3f429914479bc.r2.dev/000006.webp",
    },
  ];

  const members = [
    {
      name: "Blake Merriman",
      role: "Senior Advisor",
      linkedin: "https://www.linkedin.com/in/blakemerrimanbm/",
      division: "Advisory",
    },
    {
      name: "Marco Peyre",
      role: "Senior Advisor",
      linkedin: "https://www.linkedin.com/in/marcopeyre/",
      division: "Advisory",
    },
    {
      name: "Matteo Polacci",
      role: "Corporate Finance Senior Associate",
      linkedin: "https://www.linkedin.com/in/matteo-polacci-673b29258/",
      division: "Corporate Finance",
    },

    {
      name: "Louise Pradayrol",
      role: "Operations Senior Associate",
      linkedin: "https://www.linkedin.com/in/louise-pradayrol-554a571b9/",
      division: "Operations",
    },
    {
      name: "Giacomo Di Benedetto",
      role: "Coverage Senior Associate",
      linkedin: "https://www.linkedin.com/in/giacomo-di-benedetto-2924a3294/",
      division: "Coverage",
    },

    {
      name: "Maria Eleni Papazoglou",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/mariaelenipapazoglou245/",
      division: "Special Situations & PE",
    },
    {
      name: "Ruiqi Wu",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/ruiqi-kelsey-wu/",
      division: "Corporate Finance",
    },
    {
      name: "Lucas Albin",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/lucas-albín-lazcano-25b41027a/",
      division: "Special Situations & PE",
    },
    {
      name: "Thomas Hanford",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/thomas-hanford-7471872a3/",
      division: "Credit Investments",
    },
    {
      name: "Francesco Rastelli",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/francesco-rastelli-6a8342234/",
      division: "Corporate Finance",
    },
    {
      name: "Aliki Varela",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/aliki-varela-231684247/",
      division: "Credit Investments",
    },
    {
      name: "Alessandro Bolla",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/alessandro-bolla-186969286/",
      division: "Corporate Finance",
    },
    {
      name: "Emilio Cornejo",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/emilio-cornejo-308111251/",
      division: "Special Situations & PE",
    },
    {
      name: "Tommaso Pietromarchi",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/tommasopietromarchi/",
      division: "Corporate Finance",
    },
    {
      name: "Pietro Busdraghi",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/pietro-busdraghi-71b484294/",
      division: "Coverage",
    },

    {
      name: "Edoardo Novali",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/edoardo-novali/",
      division: "Special Situations & PE",
    },
    {
      name: "Carlo Federico Cesi",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/carlo-federico-cesi/",
      division: "Special Situations & PE",
    },
    {
      name: "Brando Savioli",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/brando-savioli/",
      division: "Special Situations & PE",
    },
    {
      name: "Alberto Caviglia",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/alberto-caviglia-057b30226/",
      division: "Special Situations & PE",
    },
    {
      name: "Thomas Agosti",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/thomasagosti/",
      division: "Special Situations & PE",
    },
    {
      name: "Giacomo Ridolfo",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/giacomo-ridolfo-826ba819b/",
      division: "Special Situations & PE",
    },
    {
      name: "Pietro Ferraro",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/pietroferrar04/",
      division: "Special Situations & PE",
    },
    {
      name: "Antonio Di Paolo",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/antonio-di-paolo-77a7b1309/",
      division: "Credit Investments",
    },
    {
      name: "Jessica Qian",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/jessica-q-39a67a194/",
      division: "Credit Investments",
    },
    {
      name: "Alessandro Simone",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/alesimone/",
      division: "Credit Investments",
    },
    {
      name: "Guillermo Shaw",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/guillermo-shaw-3b819621a/",
      division: "Credit Investments",
    },
    {
      name: "Jacopo Di Giannatale",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/jacopo-di-giannatale-40754328a/",
      division: "Credit Investments",
    },

    {
      name: "Victor Blanc",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/victor-blanc-2b11a81a8/",
      division: "Corporate Finance",
    },
    {
      name: "Virginia Imbraguglio",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/virginia-imbraguglio-0410442b6/",
      division: "Corporate Finance",
    },
    {
      name: "Mark-Alexandru Timisan-Matei",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/timisanmark/",
      division: "Corporate Finance",
    },
    {
      name: "Moritz Luther",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/moritzluther/",
      division: "Corporate Finance",
    },
    {
      name: "Alberto Cocirio",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/alberto-cocirio/",
      division: "Corporate Finance",
    },
  ];

  // Group members by division
  const groupedMembers = members.reduce((acc, member) => {
    const division = member.division;
    if (!acc[division]) {
      acc[division] = [];
    }
    acc[division].push(member);
    return acc;
  }, {} as Record<string, typeof members>);

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Board Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-primary-gold mb-12">
            Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {board.map((member) => (
              <div key={member.name} className="custom-card text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.photo || "/placeholder-profile.jpg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary-gold mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Members Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-primary-gold mb-12">
            Members
          </h2>
          {Object.entries(groupedMembers).map(([division, divisionMembers]) => (
            <div key={division} className="mb-16">
              <h3 className="text-2xl font-semibold text-primary-gold mb-6 border-b border-primary-gold/30 pb-2">
                {division}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {divisionMembers.map((member) => (
                  <div key={member.name} className="custom-card">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-primary-gold">
                          {member.name}
                        </h3>
                        <p className="text-gray-400">{member.role}</p>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors duration-200"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default TeamPage;
