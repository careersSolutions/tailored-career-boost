
import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="bg-cs-light rounded-lg p-6">
      <div className="flex items-start">
        <HelpCircle className="h-5 w-5 text-cs-navy mr-3 shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-bold mb-2">{question}</h3>
          <p className="text-cs-gray">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to receive my completed CV?",
      answer: "Delivery times vary based on the package you select, ranging from 2-7 business days. The Basic package has a 48-hour turnaround time, Professional takes 3-5 days, and Executive takes 5-7 days due to the comprehensive nature of the service."
    },
    {
      question: "Can I request revisions to my documents?",
      answer: "Yes, all packages include revision rounds. The number of revisions depends on your chosen package. We're committed to your satisfaction and will work with you until you're happy with the final documents."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, PayPal, and bank transfers. Payment is required before we begin working on your documents. We offer secure payment processing to protect your information."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a satisfaction guarantee. If you're not satisfied with our service, we'll work with you to address your concerns. Refund policies vary by service, and details can be found in our terms of service."
    },
    {
      question: "Can I upgrade my package after purchasing?",
      answer: "Yes, you can upgrade to a higher package at any time by paying the difference in price. Contact our customer service team to arrange an upgrade."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-cs-gray max-w-3xl mx-auto">
            Find answers to common questions about our services and pricing.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
