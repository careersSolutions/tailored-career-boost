
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Search, Users, Briefcase, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LinkedInOptimization = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cs-navy to-[#0D2E5C] py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  LinkedIn Profile Optimization
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Enhance your professional presence with an optimized LinkedIn profile that attracts recruiters and expands your network.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/pricing">
                    <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-6 text-lg">
                      View Pricing
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-cs-navy mb-6">LinkedIn Profile Impact</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">87% of recruiters use LinkedIn to find and vet candidates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Profiles with professional photos get 14x more views</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Complete profiles appear 40x more in search results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">73% of job seekers found success through social networking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Optimized profiles generate 3-5x more connection requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our LinkedIn Optimization Services</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Comprehensive LinkedIn enhancement for maximum visibility and engagement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-lg mr-4">
                    <Search className="h-6 w-6 text-cs-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Keyword Optimization</h3>
                    <p className="text-cs-gray">
                      Strategic placement of industry-specific keywords throughout your profile to improve searchability and help you appear in recruiter searches.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Industry and role-specific keyword research</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Strategic keyword placement in all profile sections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Skills optimization for endorsements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-cs-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Branding</h3>
                    <p className="text-cs-gray">
                      Development of a compelling personal brand that positions you as an authority in your field and showcases your unique value proposition.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Custom headline that captures attention</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Compelling summary that tells your professional story</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Advice on profile and background image selection</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-lg mr-4">
                    <Briefcase className="h-6 w-6 text-cs-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Experience Enhancement</h3>
                    <p className="text-cs-gray">
                      Powerful descriptions of your work experience that emphasize achievements and demonstrate the value you've brought to previous organizations.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Achievement-focused experience descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Quantified results with metrics and statistics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Media integration (articles, presentations, videos)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-lg mr-4">
                    <LineChart className="h-6 w-6 text-cs-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Engagement Strategy</h3>
                    <p className="text-cs-gray">
                      Actionable strategies to increase your LinkedIn visibility and engagement with your professional network.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Networking approach tailored to your goals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Content creation and sharing strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Group participation and thought leadership advice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Transformation</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                See the difference our LinkedIn optimization makes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-red-100 rounded-t-lg p-2 text-center text-red-700 font-medium mb-4">
                  BEFORE
                </div>
                <div className="h-80 bg-gray-200 mb-4 flex items-center justify-center">
                  <p className="text-cs-gray">LinkedIn Profile Image Placeholder</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-cs-gray">Generic headline: "Marketing Professional"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-cs-gray">Minimal summary with no clear value proposition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-cs-gray">Job descriptions listing only responsibilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-cs-gray">Few relevant skills listed or endorsed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-cs-gray">No custom background image</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-green-100 rounded-t-lg p-2 text-center text-green-700 font-medium mb-4">
                  AFTER
                </div>
                <div className="h-80 bg-gray-200 mb-4 flex items-center justify-center">
                  <p className="text-cs-gray">LinkedIn Profile Image Placeholder</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-cs-gray">Compelling headline: "Strategic Marketing Leader | Driving Revenue Growth Through Digital Innovation | B2B SaaS Expert"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-cs-gray">Engaging story-driven summary with clear value proposition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-cs-gray">Achievement-focused experience with measurable results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-cs-gray">Strategic skills selection with endorsements strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-cs-gray">Professional background image aligned with personal brand</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                How our LinkedIn optimization has transformed careers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-cs-light p-8 rounded-lg relative">
                <div className="absolute top-4 right-4 text-cs-gold">
                  <span>★★★★★</span>
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Daniel M.</h4>
                    <p className="text-sm text-cs-gray">IT Project Manager</p>
                  </div>
                </div>
                <p className="text-cs-gray mb-6">
                  "Within two weeks of updating my LinkedIn profile with Career Solutions, I was approached by a recruiter for my dream company. The profile overhaul highlighted my technical project management experience in exactly the right way. I'm now in a role that pays 30% more than my previous position."
                </p>
                <div className="text-cs-navy font-medium">
                  <span>Result: </span>
                  <span className="text-cs-gold">Approached by 12+ recruiters and landed dream job</span>
                </div>
              </div>
              
              <div className="bg-cs-light p-8 rounded-lg relative">
                <div className="absolute top-4 right-4 text-cs-gold">
                  <span>★★★★★</span>
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Rachel T.</h4>
                    <p className="text-sm text-cs-gray">Marketing Director</p>
                  </div>
                </div>
                <p className="text-cs-gray mb-6">
                  "As someone looking to establish thought leadership in my industry, the LinkedIn optimization service was invaluable. My profile views increased by 400% and I've been invited to speak at three industry events since implementing the recommended changes and content strategy."
                </p>
                <div className="text-cs-navy font-medium">
                  <span>Result: </span>
                  <span className="text-cs-gold">400% increase in profile views and speaking opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cs-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your LinkedIn Presence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Elevate your professional brand and attract more opportunities with our LinkedIn optimization services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/pricing">
                  <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-6 text-lg">
                    View Pricing
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LinkedInOptimization;
