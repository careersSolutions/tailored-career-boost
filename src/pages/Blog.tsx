
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 CV Mistakes That Are Costing You Interviews",
      excerpt: "Discover the common CV errors that might be preventing you from landing your dream job interviews.",
      category: "CV Tips",
      date: "June 15, 2023",
      image: "bg-gray-200", // This would be a real image in production
      url: "#"
    },
    {
      id: 2,
      title: "How to Optimize Your LinkedIn Profile for Job Searches",
      excerpt: "Learn how to make your LinkedIn profile stand out to recruiters and increase your chances of being found.",
      category: "LinkedIn",
      date: "May 28, 2023",
      image: "bg-gray-200", // This would be a real image in production
      url: "#"
    },
    {
      id: 3,
      title: "Mastering the STAR Method for Interview Success",
      excerpt: "An in-depth guide to using the Situation, Task, Action, Result technique to ace behavioral interviews.",
      category: "Interview Tips",
      date: "May 12, 2023",
      image: "bg-gray-200", // This would be a real image in production
      url: "#"
    },
    {
      id: 4,
      title: "Writing a Cover Letter That Gets You Noticed",
      excerpt: "Expert tips on crafting a compelling cover letter that complements your CV and captures attention.",
      category: "Cover Letters",
      date: "April 30, 2023",
      image: "bg-gray-200", // This would be a real image in production
      url: "#"
    },
    {
      id: 5,
      title: "Career Change at 40: A Success Story",
      excerpt: "How one of our clients successfully pivoted to a new industry with strategic personal branding.",
      category: "Success Stories",
      date: "April 15, 2023",
      image: "bg-gray-200", // This would be a real image in production
      url: "#"
    },
    {
      id: 6,
      title: "The Future of Work: Skills That Will Matter in 2024",
      excerpt: "Insights on emerging job market trends and the skills employers will be looking for next year.",
      category: "Career Insights",
      date: "April 3, 2023",
      image: "bg-gray-200", // This would be a real image in production
      url: "#"
    }
  ];

  const categories = [
    "CV Tips",
    "Cover Letters",
    "LinkedIn",
    "Interview Tips",
    "Career Insights",
    "Job Search",
    "Success Stories"
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cs-navy to-[#0D2E5C] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Career Resources & Insights
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Expert advice, tips, and strategies to help you advance your career
              </p>
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  className="pl-10 py-6 text-base" 
                  placeholder="Search for career advice, CV tips, and more..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Our latest insights and advice to help you in your career journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className={`h-48 ${post.image}`}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-cs-gold font-medium">{post.category}</span>
                      <span className="text-sm text-cs-gray">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-cs-gray mb-4">{post.excerpt}</p>
                    <a 
                      href={post.url} 
                      className="inline-flex items-center text-cs-navy font-medium hover:text-cs-gold transition-colors"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-cs-navy text-white hover:bg-cs-navy/90">
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Find specific advice for your career development needs
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md text-cs-navy font-medium transition-all duration-300 hover:bg-cs-gold"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 bg-cs-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Get Career Advice Straight to Your Inbox
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for weekly tips and insights
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                <Input
                  className="py-6"
                  placeholder="Your email address"
                />
                <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 whitespace-nowrap px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
