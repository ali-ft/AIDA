import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

export function Articles() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - Different Background */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-gray-200 text-xs font-semibold text-gray-700 mb-4">
              AIDA
              <span className="h-1 w-1 rounded-full bg-purple-400" />
              Knowledge Hub
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-purple-600 to-purple-700 bg-clip-text text-transparent mb-3 tracking-tight">
              Articles &amp; Insights
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Explore our latest insights and success stories in AI training and enterprise transformation
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section - White Background */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-purple-300"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getAssetPath(article.image)}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-purple-600 font-medium text-sm group-hover:gap-2 transition-all">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {articles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

