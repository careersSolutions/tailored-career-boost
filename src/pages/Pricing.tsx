
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import { CheckCircle, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
  const cvWritingPackages = [
    {
      title: "Basic",
      price: "£99",
      description: "Perfect for entry-level professionals or recent graduates.",
      features: [
        "Professional CV writing",
        "ATS-friendly format",
        "2 rounds of revisions",
        "48-hour delivery",
        "1-on-1 consultation (15 min)",
      ],
      link: "/contact",
    },
    {
      title: "Professional",
      price: "£199",
      description: "Ideal for mid-level professionals looking to advance their careers.",
      features: [
        "Everything in Basic",
        "Keyword optimization",
        "Cover letter included",
        "LinkedIn summary",
        "3 rounds of revisions",
        "1-on-1 consultation (30 min)",
      ],
      popular: true,
      link: "/contact",
    },
    {
      title: "Executive",
      price: "£299",
      description: "Tailored for senior professionals and executives.",
      features: [
        "Everything in Professional",
        "Executive CV format",
        "Cover letter & thank you letter",
        "Complete LinkedIn profile optimization",
        "5 rounds of revisions",
        "1-on-1 consultation (60 min)",
        "Priority support",
      ],
      link: "/contact",
    }
  ];

  const linkedinPackages = [
    {
      title: "Basic",
      price: "£79",
      description: "Essential LinkedIn optimization for better visibility.",
      features: [
        "Profile headline optimization",
        "Professional summary",
        "Skills optimization",
        "1 round of revisions",
        "5-day delivery",
      ],
      link: "/contact",
    },
    {
      title: "Professional",
      price: "£149",
      description: "Comprehensive LinkedIn profile enhancement for networking.",
      features: [
        "Everything in Basic",
        "Experience section optimization",
        "Projects & achievements highlight",
        "Background photo selection",
        "2 rounds of revisions",
        "3-day delivery",
      ],
      popular: true,
      link: "/contact",
    },
    {
      title: "Executive",
      price: "£249",
      description: "Premium LinkedIn presence for industry leaders.",
      features: [
        "Everything in Professional",
        "Personal branding strategy",
        "Endorsements strategy",
        "Recommendations writing",
        "Content publishing strategy",
        "3 rounds of revisions",
        "Priority support",
      ],
      link: "/contact",
    }
  ];

  const interviewPackages = [
    {
      title: "Single Session",
      price: "£99",
      description: "One-time interview preparation for an upcoming interview.",
      features: [
        "60-minute mock interview",
        "Industry-specific questions",
        "Personalized feedback",
        "Answer improvement tips",
        "Follow-up email support",
      ],
      link: "/contact",
    },
    {
      title: "Comprehensive",
      price: "£249",
      description: "Complete interview preparation program.",
      features: [
        "3 x 60-minute mock interviews",
        "Custom question preparation",
        "Body language coaching",
        "Salary negotiation tips",
        "2 weeks of email support",
        "Interview techniques guide",
      ],
      popular: true,
      link: "/contact",
    },
    {
      title: "Executive",
      price: "£399",
      description: "Premium coaching for executive-level interviews.",
      features: [
        "5 x 60-minute mock interviews",
        "Executive level questions",
        "Leadership assessment preparation",
        "Case study practice",
        "Presentation coaching",
        "Salary & benefits negotiation",
        "30 days of email support",
      ],
      link: "/contact",
    }
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
                Transparent Pricing for Career Services
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Choose the package that best fits your career needs and goals.
              </p>
              <p className="text-lg text-gray-300">
                All packages include personalized service from our professional team.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tabs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="cv-writing" className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-cs-light">
                  <TabsTrigger value="cv-writing" className="px-6 py-3">CV Writing</TabsTrigger>
                  <TabsTrigger value="linkedin" className="px-6 py-3">LinkedIn Optimization</TabsTrigger>
                  <TabsTrigger value="interview" className="px-6 py-3">Interview Coaching</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="cv-writing">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {cvWritingPackages.map((pkg, index) => (
                    <PricingCard
                      key={index}
                      title={pkg.title}
                      price={pkg.price}
                      description={pkg.description}
                      features={pkg.features}
                      popular={pkg.popular}
                      link={pkg.link}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="linkedin">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {linkedinPackages.map((pkg, index) => (
                    <PricingCard
                      key={index}
                      title={pkg.title}
                      price={pkg.price}
                      description={pkg.description}
                      features={pkg.features}
                      popular={pkg.popular}
                      link={pkg.link}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="interview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {interviewPackages.map((pkg, index) => (
                    <PricingCard
                      key={index}
                      title={pkg.title}
                      price={pkg.price}
                      description={pkg.description}
                      features={pkg.features}
                      popular={pkg.popular}
                      link={pkg.link}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Combo Deals Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Value Packages</h2>
              <p className="text-lg text-cs-gray max-w-3xl mx-auto">
                Save with our combined service packages designed to provide comprehensive career support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-cs-gold">
                <div className="bg-cs-gold text-cs-navy text-center py-2 font-medium">
                  Most Popular Combination
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-2">Career Starter</h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold">£299</span>
                    <span className="text-cs-gray ml-2 line-through">£427</span>
                    <span className="text-cs-gold font-medium ml-2">Save 30%</span>
                  </div>
                  <p className="text-cs-gray text-center mb-6">
                    Complete package for professionals starting their job search.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-cs-gray">Professional CV (Professional package)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-cs-gray">Cover Letter Writing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-cs-gray">LinkedIn Optimization (Basic package)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-cs-gray">Job Application Strategy Session (30 min)</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-cs-gold text-cs-navy hover:bg-cs-gold/90">
                    Get Started
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-2">Career Accelerator</h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold">£499</span>
                    <span className="text-cs-gray ml-2 line-through">£747</span>
                    <span className="text-cs-gold font-medium ml-2">Save 33%</span>
                  </div>
                  <p className="text-cs-gray text-center mb-6">
                    Premium package for professionals aiming for career advancement.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-cs-gray">Executive CV</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-cs-gray">Cover Letter & Thank You Letter</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-cs-gray">LinkedIn Optimization (Professional package)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-cs-gray">Single Interview Coaching Session</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cs-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-cs-gray">Priority Support & Delivery</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-cs-navy text-white hover:bg-cs-navy/90">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-cs-gray max-w-3xl mx-auto">
                Find answers to common questions about our services and pricing.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-cs-light rounded-lg p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-cs-navy mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">How long does it take to receive my completed CV?</h3>
                    <p className="text-cs-gray">
                      Delivery times vary based on the package you select, ranging from 2-7 business days. The Basic package has a 48-hour turnaround time, Professional takes 3-5 days, and Executive takes 5-7 days due to the comprehensive nature of the service.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-cs-light rounded-lg p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-cs-navy mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Can I request revisions to my documents?</h3>
                    <p className="text-cs-gray">
                      Yes, all packages include revision rounds. The number of revisions depends on your chosen package. We're committed to your satisfaction and will work with you until you're happy with the final documents.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-cs-light rounded-lg p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-cs-navy mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
                    <p className="text-cs-gray">
                      We accept all major credit and debit cards, PayPal, and bank transfers. Payment is required before we begin working on your documents. We offer secure payment processing to protect your information.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-cs-light rounded-lg p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-cs-navy mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Do you offer refunds?</h3>
                    <p className="text-cs-gray">
                      We offer a satisfaction guarantee. If you're not satisfied with our service, we'll work with you to address your concerns. Refund policies vary by service, and details can be found in our terms of service.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-cs-light rounded-lg p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-cs-navy mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Can I upgrade my package after purchasing?</h3>
                    <p className="text-cs-gray">
                      Yes, you can upgrade to a higher package at any time by paying the difference in price. Contact our customer service team to arrange an upgrade.
                    </p>
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
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help you choose the right package for your career needs.
              </p>
              <Button className="bg-cs-gold text-cs-navy hover:bg-cs-gold/90 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
