
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import PricingTabs from '@/components/pricing/PricingTabs';
import ComboDealSection from '@/components/pricing/ComboDealSection';
import FAQSection from '@/components/pricing/FAQSection';
import CTASection from '@/components/pricing/CTASection';

const Pricing = () => {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <PricingTabs />
        <ComboDealSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
