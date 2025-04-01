
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cs-navy to-[#0D2E5C] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-300">
                We're here to answer your questions and help you advance your career.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Details & Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-cs-navy">Get In Touch</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="bg-cs-light p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-cs-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-cs-gray">+44 123 456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cs-light p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-cs-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-cs-gray">info@careersolutions.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cs-light p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-cs-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Office</h3>
                      <p className="text-cs-gray">123 Career Street, London, UK</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cs-light p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-cs-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                      <p className="text-cs-gray">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-cs-gray">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-cs-gray">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-cs-navy text-white p-6 rounded-lg">
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-cs-gold mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Need Immediate Assistance?</h3>
                      <p className="mb-3">
                        For urgent inquiries, our live chat is available during business hours.
                      </p>
                      <button className="bg-cs-gold text-cs-navy px-4 py-2 rounded-md font-medium">
                        Start Live Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-cs-navy">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-cs-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-lg text-cs-gray max-w-2xl mx-auto">
                Visit our office for a face-to-face consultation with our career experts.
              </p>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 max-w-5xl mx-auto">
              <div className="w-full h-[400px] bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-cs-gray">
                  {/* In a real implementation, this would be replaced with an actual map */}
                  Interactive Map Would Be Displayed Here
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

export default Contact;
