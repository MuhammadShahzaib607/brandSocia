import Image from 'next/image';
import Link from 'next/link';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Receive PayPal Money in Pakistan Without an Account",
      href: "https://www.jahasoft.pk/how-to-receive-paypal-money-in-pakistan-without-an-account/",
      image: "https://www.jahasoft.pk/wp-content/uploads/2025/09/How-to-Receive-PayPal-Money-in-Pakistan-Without-an-Account-min.jpg",
      author: "JAHASOFT LTD",
      date: "September 22, 2025",
      category: "PayPal Service Provider",
      comments: "No Comments",
      excerpt: "PayPal is one of the most trusted online payment systems in the world. Millions of freelancers, students, and businesses use it every …"
    },
    // Add other blog posts similarly...
  ];

  const categories = [
    { name: "Advertising Agencies in Quetta", count: 1 },
    { name: "Afghanistan", count: 1 },
    // Add other categories similarly...
  ];

  const latestNews = [
    {
      title: "How to Receive PayPal Money in Pakistan Without an Account",
      href: "https://www.jahasoft.pk/how-to-receive-paypal-money-in-pakistan-without-an-account/",
      date: "September 22, 2025",
      comments: "No Comments"
    },
    // Add other latest news similarly...
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - 66% */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Image Container */}
                  <div className="relative group overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={1920}
                        height={1080}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href={post.href} className="text-white text-lg font-semibold px-4 text-center">
                        {post.title}
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                      <Link href={post.href}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center text-sm text-gray-600 mb-3 gap-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <Link href="#" className="hover:text-blue-600">{post.author}</Link>
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <Link href="#" className="hover:text-blue-600">{post.category}</Link>
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <Link href="#">{post.comments}</Link>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <span className="px-3 py-2 bg-blue-600 text-white rounded">1</span>
                <Link href="/blog/page/2/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">2</Link>
                <Link href="/blog/page/3/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">3</Link>
                <span className="px-3 py-2 text-gray-700">…</span>
                <Link href="/blog/page/15/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">15</Link>
                <Link href="/blog/page/2/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Next »</Link>
              </nav>
            </div>
          </div>

          {/* Sidebar - 33% */}
          <div className="w-full lg:w-1/3 space-y-8">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <form action="/search" method="get" className="relative">
                <input
                  type="search"
                  name="s"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Subscribe */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Subscribe</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <ul className="space-y-2 max-h-96 overflow-y-auto">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center text-sm">
                    <Link href="#" className="text-gray-700 hover:text-blue-600 flex-1">
                      {category.name}
                    </Link>
                    <span className="text-gray-500">({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">About Us</h2>
              <p className="text-gray-700 mb-4">
                At JahaSoft (SMC-PRIVATE) Limited, we create web solutions that are attractive, simple to use, and drive results for your company.
                We are not your typical web development company. Sure, we're strong on corporate branding, web design, mobile application development, 
                e-commerce web design, search engine optimization and Digital Marketing, but we're really focused on making things work for your audience and your business.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Latest News */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Latest News</h2>
              <div className="space-y-6">
                {latestNews.map((news, index) => (
                  <article key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold mb-2 hover:text-blue-600 transition-colors">
                      <Link href={news.href}>
                        {news.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>{news.date}</span>
                      <span className="mx-2">•</span>
                      <span>{news.comments}</span>
                    </div>
                    <Link 
                      href={news.href} 
                      className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More »
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}