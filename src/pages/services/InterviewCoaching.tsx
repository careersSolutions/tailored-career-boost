
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Video, Users, MessageSquare, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const InterviewCoaching = () => {
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
                  Professional Interview Coaching
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Master the art of interviewing and present yourself with confidence to secure your dream job.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/pricing">
                    <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-6 text-lg">
                      View Coaching Packages
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
                <h2 className="text-2xl font-bold text-cs-navy mb-6">Why Interview Coaching Matters</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Only 2% of applicants make it to the interview stage - make it count</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">83% of hiring managers cite poor interview skills as a top disqualifier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Coached candidates are 2.8x more likely to receive job offers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Preparation boosts confidence - the #1 trait employers look for</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                    <span className="text-cs-gray">Proper salary negotiation can increase your starting offer by 7-15%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Interview Coaching Services</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Comprehensive preparation for every stage of the interview process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-lg mr-4">
                    <Video className="h-6 w-6 text-cs-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mock Interviews</h3>
                    <p className="text-cs-gray">
                      Realistic practice sessions tailored to your industry and target role, with immediate feedback and coaching.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Role-specific question preparation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Video recording for self-assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Detailed performance evaluation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-cs-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Interview Strategy</h3>
                    <p className="text-cs-gray">
                      Personalized strategies for showcasing your skills and experience in the most compelling way for specific employers.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Company-specific research methods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Achievement story development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Unique value proposition formulation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-cs-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Communication Coaching</h3>
                    <p className="text-cs-gray">
                      Techniques to improve your verbal and non-verbal communication skills for making a powerful impression.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Body language and voice modulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Concise and impactful answering techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Virtual interview presentation skills</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-lg mr-4">
                    <Lightbulb className="h-6 w-6 text-cs-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Specialized Preparation</h3>
                    <p className="text-cs-gray">
                      Targeted coaching for specific interview formats and challenges you may encounter.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Behavioral interview mastery (STAR method)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Technical interview preparation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-cs-gray">Salary negotiation strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Process Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Coaching Process</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Our proven approach to interview preparation
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="flex-1 md:pr-8">
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-cs-gold hidden md:block"></div>
                    
                    {/* Step 1 */}
                    <div className="flex mb-12 relative">
                      <div className="bg-cs-navy w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">1</div>
                      <div className="ml-8">
                        <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                        <p className="text-cs-gray mb-4">
                          We identify your target roles, experience level, and specific interviewing challenges through a detailed questionnaire and consultation call.
                        </p>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-cs-gray italic">
                            "The assessment was comprehensive and helped identify specific areas I needed to work on that I hadn't even considered." - James K.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="flex mb-12 relative">
                      <div className="bg-cs-navy w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">2</div>
                      <div className="ml-8">
                        <h3 className="text-xl font-bold mb-2">Customized Coaching Plan</h3>
                        <p className="text-cs-gray mb-4">
                          We develop a tailored coaching program that addresses your specific needs, industry requirements, and career goals.
                        </p>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-cs-gray italic">
                            "My coach created a plan that focused on exactly what I needed - behavioral interviews and executive presence." - Sophia M.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="flex mb-12 relative">
                      <div className="bg-cs-navy w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">3</div>
                      <div className="ml-8">
                        <h3 className="text-xl font-bold mb-2">Mock Interview Sessions</h3>
                        <p className="text-cs-gray mb-4">
                          Practice with realistic interview scenarios, receive immediate feedback, and refine your responses through multiple sessions.
                        </p>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-cs-gray italic">
                            "The mock interviews were incredibly realistic. My coach asked questions that later came up almost word-for-word in my actual interview!" - Alex T.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 4 */}
                    <div className="flex relative">
                      <div className="bg-cs-navy w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">4</div>
                      <div className="ml-8">
                        <h3 className="text-xl font-bold mb-2">Final Preparation & Follow-up</h3>
                        <p className="text-cs-gray mb-4">
                          Last-minute preparation before your interview and post-interview analysis to learn and improve for future opportunities.
                        </p>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-cs-gray italic">
                            "The day-before prep session calmed my nerves, and the follow-up helped me understand what worked well and what to improve for next time." - Rachel D.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <div className="w-20 h-1 bg-cs-gold mx-auto mb-6"></div>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Real clients who landed their dream jobs after our interview coaching
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="h-32 bg-gray-200 rounded-md mb-4"></div>
                <h3 className="text-xl font-bold mb-2">From Rejected to Hired</h3>
                <p className="text-cs-gray mb-4">
                  "After being rejected from three similar positions, I invested in interview coaching. With my coach's guidance, I completely transformed my interview approach and received two job offers within a month."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold text-sm">Mark J.</h4>
                    <p className="text-xs text-cs-gray">Software Developer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="h-32 bg-gray-200 rounded-md mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Career Change Success</h3>
                <p className="text-cs-gray mb-4">
                  "Transitioning from finance to marketing was challenging. The interview coaching helped me articulate my transferable skills effectively. I secured a role at my target company despite competing against candidates with direct experience."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold text-sm">Priya S.</h4>
                    <p className="text-xs text-cs-gray">Marketing Specialist</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-cs-light p-6 rounded-lg">
                <div className="h-32 bg-gray-200 rounded-md mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Executive Level Promotion</h3>
                <p className="text-cs-gray mb-4">
                  "The executive interview preparation was invaluable for my SVP interview. My coach helped me craft compelling leadership stories and prepare for strategic questions. I negotiated a salary 20% higher than initially offered."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold text-sm">Robert T.</h4>
                    <p className="text-xs text-cs-gray">SVP of Operations</p>
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
                Ready to Ace Your Next Interview?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Invest in your career success with professional interview coaching that gives you the competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/pricing">
                  <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-6 text-lg">
                    View Coaching Packages
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Schedule a Consultation
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

export default InterviewCoaching;
