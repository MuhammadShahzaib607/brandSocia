"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Mail, Calendar, User, ArrowUp } from 'lucide-react'
import { blogPosts } from '../../lib/blogData'


function extractHeadings(htmlContent) {
  const headings = []
  const regex = /<(h[23])>(.*?)<\/\1>/gi
  let match
  
  while ((match = regex.exec(htmlContent)) !== null) {
    const level = match[1]
    const text = match[2].replace(/<[^>]*>/g, '')
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    headings.push({ level, text, id })
  }
  
  return headings
}


function addIdsToHeadings(htmlContent) {
  return htmlContent.replace(/<(h[23])>(.*?)<\/\1>/gi, (match, tag, content) => {
    const text = content.replace(/<[^>]*>/g, '')
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    return `<${tag} id="${id}">${content}</${tag}>`
  })
}

export default function BlogPostLayout() {
  const params = useParams()
  const slug = params?.slug
  const [activeId, setActiveId] = useState('')
  const [email, setEmail] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  
  const post = blogPosts.find(p => p.slug === slug)
  

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/60">
            <h1 className="text-7xl font-black bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent mb-4">404</h1>
            <p className="text-lg text-gray-700 mb-6 font-medium">Blog post not found</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const headings = extractHeadings(post.content)
  const contentWithIds = addIdsToHeadings(post.content)
  

  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 2)

  const latestPosts = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3)

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id))
      const scrollPosition = window.scrollY + 100

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id)
          break
        }
      }

      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  const scrollToHeading = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Subscribed with: ${email}`)
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .prose {
          max-width: none;
        }
        
        .prose h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.4;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #f43f5e, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #fecdd3;
        }
        
        .prose h3 {
          font-size: 1.375rem;
          font-weight: 600;
          color: #374151;
          margin-top: 2rem;
          margin-bottom: 0.875rem;
          line-height: 1.5;
        }
        
        .prose p {
          font-size: 1.0625rem;
          line-height: 1.75;
          color: #4b5563;
          margin-bottom: 1.5rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        .prose ul {
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .prose li {
          font-size: 1.0625rem;
          line-height: 1.75;
          color: #4b5563;
          margin-bottom: 0.75rem;
          position: relative;
        }
        
        .prose li::before {
          content: "•";
          color: #f43f5e;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
        
        .prose strong {
          font-weight: 600;
          color: #1f2937;
        }
        
        .prose em {
          font-style: italic;
          color: #6b7280;
        }

        .prose a {
          color: #f43f5e;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #fecdd3;
          transition: all 0.2s ease;
        }

        .prose a:hover {
          color: #dc2626;
          border-bottom-color: #f43f5e;
        }
      `}</style>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column - Table of Contents */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/60 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-6">Table of Contents</h2>
              <nav aria-label="Table of contents">
                <ul className="space-y-3">
                  {headings.map((heading, index) => (
                    <li key={index} className={heading.level === 'h3' ? 'ml-4' : ''}>
                      <button
                        onClick={() => scrollToHeading(heading.id)}
                        className={`text-left w-full text-sm transition-all duration-300 transform hover:translate-x-1 ${
                          activeId === heading.id
                            ? 'text-rose-600 font-semibold bg-rose-50 px-3 py-2 rounded-lg'
                            : 'text-gray-600 hover:text-rose-500 font-medium'
                        }`}
                      >
                        {heading.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Center Column - Article Content */}
          <main className="lg:col-span-6" itemScope itemType="https://schema.org/BlogPosting">
            <article className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/60 hover:shadow-2xl transition-all duration-300">
              {/* Featured Image */}
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-rose-100 to-orange-100 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Article Header */}
              <header className="p-6 sm:p-8 md:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide mb-6 shadow-lg">
                  {post.category}
                </div>
                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
                  itemProp="headline"
                >
                  {post.title}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-rose-500" />
                    <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-rose-500" />
                    <span>By <span className="text-rose-600 font-semibold" itemProp="author">{post.author}</span></span>
                  </div>
                </div>
              </header>

              {/* Article Body */}
              <section className="px-6 sm:px-8 md:px-12 pb-12" itemProp="articleBody">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: contentWithIds }}
                />
              </section>
            </article>

            {/* Related Posts Section */}
            <div className="mt-8 sm:mt-12 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-8 border border-white/60">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug} 
                    href={`/blog/${relatedPost.slug}`} 
                    className="group block transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-6 rounded-xl border border-rose-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300 h-full">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-300 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
                        <Calendar size={14} />
                        {relatedPost.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          {/* Right Column - Follow/Newsletter Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-6 space-y-6">
              
              {/* Social Media Section */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/60">
                <h2 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-5">Follow Us</h2>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white-60">
                <h2 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-3">Newsletter</h2>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Get the latest insights delivered to your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none bg-white/70 text-gray-800 placeholder:text-gray-500 font-medium transition-all duration-300"
                      aria-label="Email address"
                      required
                    />
                    <Mail size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail size={18} />
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Latest Posts Section */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/60">
                <h2 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-5">Latest Posts</h2>
                <div className="space-y-5">
                  {latestPosts.map((latestPost, index) => (
                    <div key={latestPost.slug}>
                      <Link href={`/blog/${latestPost.slug}`} className="group block transform hover:translate-x-1 transition-transform duration-300">
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-300 leading-snug line-clamp-2">
                          {latestPost.title}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1.5 font-medium flex items-center gap-1">
                          <Calendar size={12} />
                          {latestPost.date}
                        </p>
                      </Link>
                      {index < latestPosts.length - 1 && (
                        <div className="border-t border-rose-100 mt-5"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}