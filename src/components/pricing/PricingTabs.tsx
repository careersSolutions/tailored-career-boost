
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingCard from '@/components/PricingCard';
import { cvWritingPackages, linkedinPackages, interviewPackages } from '@/data/pricingData';

const PricingTabs = () => {
  return (
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
  );
};

export default PricingTabs;
