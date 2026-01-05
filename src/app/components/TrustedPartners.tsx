import { motion } from "motion/react";

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

export function TrustedPartners() {
  const partners = [
    {
      name: "Whitefox",
      logo: getAssetPath("assets/white-fox.svg"),
    },
    {
      name: "Leiden University",
      logo: getAssetPath("assets/Leiden_University.png"),
    },
    {
      name: "Maastricht University",
      logo: getAssetPath("assets/maastricht-university.png"),
    },
    {
      name: "University of Birmingham",
      logo: getAssetPath("assets/birmangam.png"),
    },
  ];

  return (
    <section className="py-4 sm:py-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Partners - Mobile: stacked, Desktop: inline */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8">
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-700 whitespace-nowrap">
            Trusted Partners:
          </h3>
          
          {/* Partners Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-1.5 sm:gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 font-medium whitespace-nowrap">
                {partner.name}
              </span>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

