
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, FileText, Award, Zap, Clock, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CVWriting = () => {
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
                  Professional CV Writing Services
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Stand out from the competition with a professionally written CV that showcases your unique skills and experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/pricing">
                    <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-6 text-lg">
                      View Pricing
                    </Button>
                  </Link>
                  <Link to="/cv-review">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                      Free CV Review
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-cs-navy mb-6">Our CV Success Rate</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cs-gold mb-2">86%</div>
                    <p className="text-cs-gray">of our clients get interviews within 30 days</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cs-gold mb-2">92%</div>
                    <p className="text-cs-gray">client satisfaction rating</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cs-gold mb-2">2x</div>
                    <p className="text-cs-gray">more likely to pass ATS screening</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cs-gold mb-2">10+</div>
                    <p className="text-cs-gray">years of industry experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our CV Writing Process</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                A streamlined approach to creating a CV that highlights your unique value proposition
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-cs-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-cs-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <p className="text-cs-gray">
                  We start with an in-depth discussion or questionnaire to understand your career history, achievements, and goals.
                </p>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-cs-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-bold mb-3">Writing & Design</h3>
                <p className="text-cs-gray">
                  Our expert writers craft a tailored CV that highlights your strengths and aligns with your target roles.
                </p>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-cs-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-bold mb-3">Review & Refinement</h3>
                <p className="text-cs-gray">
                  You review the draft and we make revisions until you're completely satisfied with the final document.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Sets Our CV Service Apart</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                We don't just write CVs – we create powerful career marketing tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <FileText className="h-12 w-12 text-cs-gold mr-4 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ATS-Optimized Format</h3>
                  <p className="text-cs-gray">
                    Our CVs are designed to pass through Applicant Tracking Systems with strategic keyword placement and industry-standard formatting.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <Award className="h-12 w-12 text-cs-gold mr-4 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Achievement-Focused Content</h3>
                  <p className="text-cs-gray">
                    We emphasize quantifiable achievements rather than just job duties, showcasing the tangible value you've brought to previous roles.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <Zap className="h-12 w-12 text-cs-gold mr-4 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Industry-Specific Expertise</h3>
                  <p className="text-cs-gray">
                    Our writers specialize in various industries and understand the specific requirements and terminology of your field.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <Clock className="h-12 w-12 text-cs-gold mr-4 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                  <p className="text-cs-gray">
                    We respect your job search timeline with quick turnarounds without compromising on quality.
                  </p>
                </div>
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
                See what our clients have to say about our CV writing services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Michael T.</h4>
                    <p className="text-sm text-cs-gray">Finance Professional</p>
                  </div>
                </div>
                <p className="text-cs-gray mb-4">
                  "After using Career Solutions' CV writing service, I received interview calls from 3 of my dream companies within a week. The writer perfectly captured my experience and presented it in a way I never could have done myself."
                </p>
                <div className="flex text-cs-gold">
                  <span>★★★★★</span>
                </div>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Sarah L.</h4>
                    <p className="text-sm text-cs-gray">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-cs-gray mb-4">
                  "I was struggling to transition to a senior role after 5 years in the same position. The new CV highlighted my leadership abilities and strategic contributions. I secured a Senior Marketing Manager role with a 30% salary increase!"
                </p>
                <div className="flex text-cs-gold">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/pricing">
                <Button className="bg-cs-navy text-white hover:bg-cs-navy/90">
                  View Our CV Writing Packages
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Common questions about our CV writing services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="text-xl font-bold mb-3">How long does the CV writing process take?</h3>
                <p className="text-cs-gray">
                  Our standard turnaround time is 3-5 business days from the initial consultation to the first draft. Rush services are available for an additional fee.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="text-xl font-bold mb-3">Will I be able to provide feedback on my CV?</h3>
                <p className="text-cs-gray">
                  Absolutely! We believe in collaboration. After receiving your first draft, you'll have the opportunity to request revisions until you're completely satisfied.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="text-xl font-bold mb-3">Who will write my CV?</h3>
                <p className="text-cs-gray">
                  Your CV will be written by a professional writer with expertise in your industry. All our writers have extensive experience in CV writing and recruitment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">What if I'm not satisfied with my CV?</h3>
                <p className="text-cs-gray">
                  We offer unlimited revisions within 14 days of receiving your first draft. If you're still not satisfied, we offer a full refund within 30 days of purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cs-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your CV?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Take the first step toward advancing your career with a professionally written CV.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/pricing">
                  <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-6 text-lg">
                    View Pricing
                  </Button>
                </Link>
                <Link to="/cv-review">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Get a Free CV Review
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

export default CVWriting;
