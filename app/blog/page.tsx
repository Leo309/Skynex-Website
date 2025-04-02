import Link from 'next/link';

export const metadata = {
  title: 'Blog | SKYNEX GLOBAL COMMERCE & TECH INC.',
  description: 'Insights and articles about e-commerce, AI tools, and digital technology trends.',
};

// 模拟从API或数据库获取博客文章
async function getBlogPosts() {
  // 在真实项目中，这里会使用Supabase或其他数据源
  return [
    {
      id: 1,
      title: 'Understanding Inflation in the Digital Economy',
      excerpt: 'How inflation affects online businesses and digital products...',
      date: 'March 25, 2025',
      author: 'SKYNEX Team'
    },
    {
      id: 2,
      title: 'The Future of AI in E-Commerce',
      excerpt: 'Exploring how artificial intelligence is transforming online retail...',
      date: 'March 10, 2025',
      author: 'SKYNEX Team'
    },
    {
      id: 3,
      title: 'Building Resilient Supply Chains',
      excerpt: 'Strategies for creating adaptable and robust supply chains in uncertain times...',
      date: 'February 28, 2025',
      author: 'SKYNEX Team'
    }
  ];
}

export default async function BlogPage() {
  // Next.js 15中推荐的数据获取方式
  const posts = await getBlogPosts();
  
  return (
    <div className="bg-gradient-to-b from-skynex-light to-gray-100 dark:from-skynex-dark dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-skynex-dark to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Blog</h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights and perspectives on e-commerce, AI, and digital technology
            </p>
            <Link 
              href="/blog/subscribe"
              className="btn-primary py-3 px-8 text-lg inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              {posts.map(post => (
                <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-12 last:border-0">
                  <h2 className="heading-md mb-4 text-skynex-blue dark:text-skynex-accent">
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="text-skynex-blue dark:text-skynex-accent font-medium hover:underline inline-flex items-center">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
