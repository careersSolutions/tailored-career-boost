
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Clock, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cs-navy to-[#0D2E5C] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                About CAREER SOLUTIONS
              </h1>
              <p className="text-xl text-gray-300">
                Empowering professionals to reach their career goals since 2015.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
                <p className="text-lg text-cs-gray">
                  Founded with a vision to transform how professionals approach their career development
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none text-cs-gray">
                <p>
                  Career Solutions was founded in 2015 by a team of recruitment specialists and HR professionals who recognized a critical gap in the job market. Despite being highly qualified, many candidates were struggling to secure interviews due to ineffective CVs and application materials that failed to showcase their true potential.
                </p>
                <p className="mt-4">
                  Our founders set out with a clear mission: to help job seekers present themselves in the best possible light, enabling them to access opportunities that truly match their skills and ambitions. What began as a small consultancy has grown into a comprehensive career services company trusted by professionals across all industries and career stages.
                </p>
                <p className="mt-4">
                  Today, Career Solutions has helped over 50,000 professionals worldwide land their dream jobs through our expert CV writing, cover letter creation, LinkedIn optimization, and interview coaching services. Our dedicated team combines industry expertise with personalized attention to ensure every client receives tailored support for their unique career journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                These principles guide everything we do as we help professionals advance their careers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-cs-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-cs-navy h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Client-Centered</h3>
                <p className="text-cs-gray">
                  We prioritize your unique needs and career goals, providing personalized solutions that work for you.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-cs-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-cs-navy h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-cs-gray">
                  We maintain the highest standards in everything we do, from our writing to our customer service.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-cs-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-cs-navy h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Timeliness</h3>
                <p className="text-cs-gray">
                  We respect your schedule and deliver our services promptly without compromising quality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-cs-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-cs-navy h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-cs-gray">
                  We operate with transparency and honesty, providing realistic expectations and honest feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Experienced professionals dedicated to your career success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-cs-gold font-medium mb-3">Founder & CEO</p>
                  <p className="text-cs-gray mb-4">
                    Former HR Director with 15+ years experience in recruitment and talent acquisition across multiple industries.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Chen</h3>
                  <p className="text-cs-gold font-medium mb-3">Head of CV Writing</p>
                  <p className="text-cs-gray mb-4">
                    Certified Professional Resume Writer with expertise in ATS optimization and personal branding.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Emma Richards</h3>
                  <p className="text-cs-gold font-medium mb-3">Interview Coach</p>
                  <p className="text-cs-gray mb-4">
                    Former corporate recruiter specializing in behavioral and technical interview preparation.
                  </p>
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
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our expert team help you showcase your skills and experience to land your dream job.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/cv-review" className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-3 rounded-md font-medium">
                  Get a Free CV Review
                </a>
                <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
