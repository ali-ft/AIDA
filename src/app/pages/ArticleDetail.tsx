import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ArrowLeft } from 'lucide-react';

const getAssetPath = (path: string) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

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
            <div className="w-full lg:w-1/2 xl:w-2/5 flex-shrink-0">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={getAssetPath(article.image)}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <div className="w-full lg:w-1/2 xl:w-3/5 flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content - White Background */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Article Text (rich content) */}
        <div>{article.content}</div>

        {/* Back to Articles Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/articles"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            View All Articles
          </Link>
        </div>
      </article>
    </div>
  );
}

