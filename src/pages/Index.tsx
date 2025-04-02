import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, PenTool, Linkedin, PhoneCall, ChevronRight, FileCheck } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const HomePage = () => {
  // Sample testimonials data
  const testimonials = [{
    name: "Sarah Johnson",
    position: "Marketing Director",
    testimonial: "Career Solutions transformed my CV completely. Within two weeks of using their service, I landed three interviews and secured my dream job as a Marketing Director.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }, {
    name: "David Chen",
    position: "Software Engineer",
    testimonial: "The LinkedIn optimization service helped me increase profile views by 300%. The team's attention to detail and industry knowledge was impressive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }, {
    name: "Emma Williams",
    position: "HR Manager",
    testimonial: "As someone who reviews CVs daily, I was skeptical about what Career Solutions could offer. They exceeded my expectations with their professional approach and insights.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }];
  return <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cs-navy to-[#0D2E5C] py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Elevate Your Career with Professional CV Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Stand out in today's competitive job market with our expert-crafted CVs, cover letters, and career services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/cv-review">
                  <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-6 text-lg w-full sm:w-auto">
                    Free CV Review
                  </Button>
                </Link>
                <Link to="/services/cv-writing">
                  <Button variant="outline" className="border-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto text-cyan-300">
                    Our Services
                  </Button>
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="text-cs-gold mr-2 h-5 w-5" />
                    <span className="text-white font-medium">98% Success Rate</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="text-cs-gold mr-2 h-5 w-5" />
                    <span className="text-white font-medium">Expert CV Writers</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="text-cs-gold mr-2 h-5 w-5" />
                    <span className="text-white font-medium">100% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                We offer comprehensive career advancement services tailored to your specific needs and industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard title="CV Writing" description="Professionally written CVs tailored to your industry and career goals." icon={<FileText size={32} />} link="/services/cv-writing" />
              <ServiceCard title="Cover Letter" description="Compelling cover letters that complement your CV and showcase your value." icon={<PenTool size={32} />} link="/services/cover-letter" />
              <ServiceCard title="LinkedIn Optimization" description="Strategic profile enhancement to increase visibility to recruiters and employers." icon={<Linkedin size={32} />} link="/services/linkedin-optimization" />
              <ServiceCard title="Interview Coaching" description="One-on-one coaching to prepare you for job interviews and boost your confidence." icon={<PhoneCall size={32} />} link="/services/interview-coaching" />
            </div>
            <div className="text-center mt-12">
              <Link to="/pricing">
                <Button className="bg-cs-navy text-white hover:bg-cs-navy/90">
                  View All Packages <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Our straightforward process ensures you get the best results with minimal effort.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cs-light rounded-full flex items-center justify-center text-cs-navy mx-auto mb-4">
                  <FileCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Submit Information</h3>
                <p className="text-cs-gray">
                  Share your existing CV and career goals through our simple online form.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cs-light rounded-full flex items-center justify-center text-cs-navy mx-auto mb-4">
                  <PenTool size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Expert Writing</h3>
                <p className="text-cs-gray">
                  Our professional writers craft a tailored document that highlights your strengths.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cs-light rounded-full flex items-center justify-center text-cs-navy mx-auto mb-4">
                  <FileText size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Review & Revise</h3>
                <p className="text-cs-gray">
                  Receive your documents and request revisions until you're completely satisfied.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/cv-review">
                <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90">
                  Get Started with Free CV Review
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                See how our services have helped professionals like you advance their careers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} name={testimonial.name} position={testimonial.position} testimonial={testimonial.testimonial} rating={testimonial.rating} image={testimonial.image} />)}
            </div>
            <div className="text-center mt-12">
              <Link to="/testimonials">
                <Button variant="outline" className="border-cs-navy text-cs-navy hover:bg-cs-navy hover:text-white">
                  View More Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cs-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of successful professionals who have transformed their careers with our expert services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/cv-review">
                  <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-6 text-lg w-full sm:w-auto">
                    Get Free CV Review
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default HomePage;