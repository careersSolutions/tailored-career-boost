import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CVUploadForm from '@/components/CVUploadForm';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useUser } from '@supabase/auth-helpers-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CVReview = () => {
  const user = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const benefits = [
    "Detailed analysis of your current CV",
    "Identification of strengths and improvement areas",
    "Personalized recommendations from industry experts",
    "Tips to make your CV ATS-friendly",
    "Actionable advice to increase interview chances",
    "Quick turnaround time (within 48 hours)"
  ];

  const handleCVReviewAccess = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit your CV for review",
        variant: "destructive",
      });
      navigate('/sign-in', { state: { from: '/cv-review' } });
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cs-navy to-[#0D2E5C] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Get Your Free Professional CV Review
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Discover how your CV measures up in today's competitive job market.
              </p>
              <p className="text-lg text-gray-300">
                Upload your CV now and receive expert feedback within 48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Section */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-cs-navy">Upload Your CV</h2>
                {user ? (
                  <CVUploadForm />
                ) : (
                  <div className="text-center p-6">
                    <p className="mb-4">Please sign in to submit your CV for review</p>
                    <Button 
                      onClick={() => navigate('/sign-in', { state: { from: '/cv-review' } })}
                      className="bg-cs-navy hover:bg-cs-navy/90"
                    >
                      Sign In
                    </Button>
                  </div>
                )}
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-cs-navy">What You'll Receive</h2>
                <div className="bg-cs-light rounded-lg p-8 mb-8">
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-cs-gold mr-3 shrink-0 mt-0.5" />
                        <span className="text-cs-gray">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cs-navy rounded-lg p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Why Choose Our CV Review?</h3>
                  <p className="mb-4">
                    Our expert CV reviewers have helped thousands of professionals across various industries secure their dream jobs.
                  </p>
                  <p className="mb-4">
                    We provide actionable feedback that you can immediately implement to improve your CV's effectiveness.
                  </p>
                  <div className="flex items-center text-cs-gold mt-6">
                    <a href="/services/cv-writing" className="flex items-center font-medium hover:underline">
                      Explore our full CV writing services <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cs-navy text-white flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Submit Your CV</h3>
                <p className="text-cs-gray">
                  Complete the form and upload your current CV in PDF or Word format.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cs-navy text-white flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Expert Review</h3>
                <p className="text-cs-gray">
                  Our CV specialists analyze your document against industry standards and best practices.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cs-navy text-white flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Receive Feedback</h3>
                <p className="text-cs-gray">
                  Get detailed feedback and personalized recommendations within 48 hours via email.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-cs-light rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Is this service really free?</h3>
                <p className="text-cs-gray">
                  Yes, our CV review service is completely free with no hidden charges or obligations.
                </p>
              </div>
              <div className="bg-cs-light rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">How long will it take to receive my review?</h3>
                <p className="text-cs-gray">
                  You'll receive your personalized CV review within 48 hours of submission.
                </p>
              </div>
              <div className="bg-cs-light rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Who will review my CV?</h3>
                <p className="text-cs-gray">
                  Your CV will be reviewed by our professional CV writers with expertise in your industry.
                </p>
              </div>
              <div className="bg-cs-light rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What if I need more comprehensive help?</h3>
                <p className="text-cs-gray">
                  After your free review, you can choose to upgrade to our professional CV writing services if you'd like more extensive assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CVReview;
