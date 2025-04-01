
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, FileText, Target, Zap, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CoverLetter = () => {
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
                  Professional Cover Letter Writing
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Make a compelling first impression with a personalized cover letter that complements your CV and highlights your unique value.
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
                <h2 className="text-2xl font-bold text-cs-navy mb-6">Why a Cover Letter Matters</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Demonstrates your enthusiasm for the specific role and company</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Highlights achievements relevant to the job requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Explains career transitions or gaps on your CV</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Showcases your communication skills and personality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Increases your chances of getting an interview by 50%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Cover Letter Service Features</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Expert-crafted cover letters that open doors to opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-cs-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-cs-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Content</h3>
                <p className="text-cs-gray">
                  Tailored specifically to the job description and company culture, highlighting your most relevant qualifications.
                </p>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cs-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Positioning</h3>
                <p className="text-cs-gray">
                  Positions you as the ideal candidate by addressing specific requirements and demonstrating your value proposition.
                </p>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-cs-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compelling Narrative</h3>
                <p className="text-cs-gray">
                  Tells your career story in an engaging way that captivates hiring managers and makes them want to meet you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Cover Letter Writing Process</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                A streamlined approach to creating the perfect cover letter
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-cs-gold transform md:translate-x-[-50%] hidden md:block"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                    <div className="order-2 md:order-1 w-full md:w-[45%] bg-white p-6 rounded-lg shadow-md md:text-right">
                      <h3 className="text-xl font-bold mb-2">Information Gathering</h3>
                      <p className="text-cs-gray">
                        We collect details about your target role, the company, and what makes you uniquely qualified.
                      </p>
                    </div>
                    <div className="order-1 md:order-2 mb-4 md:mb-0 w-10 h-10 bg-cs-gold rounded-full flex items-center justify-center z-10 text-white font-bold">
                      1
                    </div>
                    <div className="order-3 hidden md:block w-[45%]"></div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                    <div className="order-1 hidden md:block w-[45%]"></div>
                    <div className="order-1 md:order-2 mb-4 md:mb-0 w-10 h-10 bg-cs-gold rounded-full flex items-center justify-center z-10 text-white font-bold">
                      2
                    </div>
                    <div className="order-2 md:order-3 w-full md:w-[45%] bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-2">Writing & Customization</h3>
                      <p className="text-cs-gray">
                        Our professional writers craft a compelling cover letter that aligns with the job requirements and showcases your value.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                    <div className="order-2 md:order-1 w-full md:w-[45%] bg-white p-6 rounded-lg shadow-md md:text-right">
                      <h3 className="text-xl font-bold mb-2">Review & Refinement</h3>
                      <p className="text-cs-gray">
                        You review the draft and provide feedback. We make necessary adjustments until you're completely satisfied.
                      </p>
                    </div>
                    <div className="order-1 md:order-2 mb-4 md:mb-0 w-10 h-10 bg-cs-gold rounded-full flex items-center justify-center z-10 text-white font-bold">
                      3
                    </div>
                    <div className="order-3 hidden md:block w-[45%]"></div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                    <div className="order-1 hidden md:block w-[45%]"></div>
                    <div className="order-1 md:order-2 mb-4 md:mb-0 w-10 h-10 bg-cs-gold rounded-full flex items-center justify-center z-10 text-white font-bold">
                      4
                    </div>
                    <div className="order-2 md:order-3 w-full md:w-[45%] bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-2">Final Delivery</h3>
                      <p className="text-cs-gray">
                        You receive the final cover letter in multiple formats (Word, PDF) ready to be submitted with your applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Real success stories from our cover letter clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex text-cs-gold mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-cs-gray italic mb-6">
                  "The cover letter did exactly what it needed to do - it got me the interview! The writer captured my voice perfectly while highlighting my most relevant experience."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Jessica R.</h4>
                    <p className="text-sm text-cs-gray">Project Manager</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex text-cs-gold mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-cs-gray italic mb-6">
                  "After sending out my new cover letter with job applications, I received responses from 3 companies within a week. The difference in response rate was remarkable!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Thomas B.</h4>
                    <p className="text-sm text-cs-gray">Sales Executive</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex text-cs-gold mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-cs-gray italic mb-6">
                  "As a career changer, I needed a cover letter that explained my transition. Career Solutions created a compelling narrative that helped employers see my transferable skills."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Aisha K.</h4>
                    <p className="text-sm text-cs-gray">UX Designer</p>
                  </div>
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
                Ready to Make a Lasting First Impression?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a professionally written cover letter that complements your CV and helps you stand out from the competition.
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

export default CoverLetter;
