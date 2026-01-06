import { motion } from "motion/react";

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

export function TrustedPartners() {
  const partners = [
    {
      name: "Leiden University",
      location: "Netherlands",
      logo: getAssetPath("assets/Leiden_University.png"),
      bgClass: "bg-gradient-to-br from-sky-50 to-sky-100",
    },
    {
      name: "Sapienza University of Rome",
      location: "Italy",
      logo: getAssetPath("assets/sapienza-university.png"),
      bgClass: "bg-gradient-to-br from-rose-50 to-rose-100/70",
    },
    {
      name: "Maastricht University",
      location: "Netherlands",
      logo: getAssetPath("assets/maastricht-university.png"),
      bgClass: "bg-gradient-to-br from-slate-100 to-slate-300",
    },
    {
      name: "University of Cambridge",
      location: "United Kingdom",
      logo: getAssetPath("assets/Cambridge.png"),
      bgClass: "bg-gradient-to-br from-amber-50 to-yellow-100/80",
    },
    {
      name: "Cardiff University",
      location: "United Kingdom",
      logo: getAssetPath("assets/Cardiff-university.png"),
      bgClass: "bg-gradient-to-br from-rose-50 to-red-100/70",
    },
    {
      name: "Ludwig Maximilian University of Munich",
      location: "Germany",
      logo: getAssetPath("assets/LMU-Munich.png"),
      bgClass: "bg-gradient-to-br from-emerald-50 to-emerald-100/80",
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-r from-slate-50 via-white to-cyan-50 border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-cyan-600 mb-2">
            Academic Excellence
          </p>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
            Our Team Consists of Professors from
          </h3>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`group flex flex-col items-center text-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all px-3 py-3 sm:px-4 sm:py-4 ${partner.bgClass}`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
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
              <div className="flex flex-col gap-0.5">
                <span className="text-xs sm:text-sm font-medium text-gray-900 leading-snug">
                  {partner.name}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500">
                  {partner.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

