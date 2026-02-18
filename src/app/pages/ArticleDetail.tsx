import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { articles } from '../data/articles';
import { ArrowLeft } from 'lucide-react';

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

// Hook for Intersection Observer
function useActiveSection(sections: { id: string; title: string }[] = []) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const sectionRefs = useRef<{ [key: string]: IntersectionObserverEntry }>({});
  const sectionsKey = useMemo(() => sections.map((s) => s.id).join(','), [sections]);

  useEffect(() => {
    if (sections.length === 0) return;

    // Reset active section when sections change
    setActiveSection(sections[0]?.id || '');

    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            sectionRefs.current[section.id] = entry;
          });

          // Find the section that's most visible
          const visibleSections = Object.entries(sectionRefs.current)
            .filter(([_, entry]) => entry.isIntersecting)
            .sort(([_, a], [__, b]) => {
              const aTop = a.boundingClientRect.top;
              const bTop = b.boundingClientRect.top;
              return Math.abs(aTop) - Math.abs(bTop);
            });

          if (visibleSections.length > 0) {
            setActiveSection(visibleSections[0][0]);
          }
        },
        {
          rootMargin: '-120px 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      sectionRefs.current = {};
    };
  }, [sectionsKey]);

  return activeSection;
}

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);
  const activeSection = useActiveSection(article?.sections);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/articles"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Image and Title - Different Background */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-8 md:py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
            {/* Article Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 xl:w-2/5 flex-shrink-0"
            >
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={getAssetPath(article.image)}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 xl:w-3/5 flex-1"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content - White Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Table of Contents Stepper - Desktop Only */}
          {article.sections && article.sections.length > 0 && (
            <aside className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-24"
              >
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {article.sections.map((section, index) => {
                      const isActive = activeSection === section.id;
                      const isPast = article.sections!.findIndex((s) => s.id === activeSection) > index;

                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(section.id);
                            if (element) {
                              const offset = 120; // Offset for header
                              const elementPosition = element.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - offset;

                              window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth',
                              });
                            }
                          }}
                          className={`flex items-start gap-3 group transition-colors ${
                            isActive
                              ? 'text-cyan-600'
                              : isPast
                                ? 'text-gray-600'
                                : 'text-gray-400'
                          }`}
                        >
                          {/* Stepper Line */}
                          <div className="flex flex-col items-center pt-1">
                            <div
                              className={`w-2 h-2 rounded-full transition-all ${
                                isActive
                                  ? 'bg-cyan-600 ring-4 ring-cyan-100 scale-125'
                                  : isPast
                                    ? 'bg-cyan-400'
                                    : 'bg-gray-300'
                              }`}
                            />
                            {index < article.sections!.length - 1 && (
                              <div
                                className={`w-0.5 flex-1 mt-2 transition-colors ${
                                  isPast ? 'bg-cyan-400' : 'bg-gray-200'
                                }`}
                                style={{ minHeight: '24px' }}
                              />
                            )}
                          </div>

                          {/* Section Title */}
                          <div className="flex-1 mt-[-4px] pl-1">
                            <span
                              className={`text-sm leading-relaxed transition-colors ${
                                isActive
                                  ? 'font-semibold text-cyan-600'
                                  : isPast
                                    ? 'font-medium text-gray-600'
                                    : 'text-gray-400'
                              }`}
                            >
                              {section.title}
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </motion.div>
            </aside>
          )}

          {/* Main Content */}
          <article className="flex-1 max-w-4xl">
            {/* Article Text (rich content) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {article.content}
            </motion.div>

            {/* Back to Articles Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <Link
                to="/articles"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                View All Articles
              </Link>
            </motion.div>
          </article>
        </div>
      </div>
    </div>
  );
}

