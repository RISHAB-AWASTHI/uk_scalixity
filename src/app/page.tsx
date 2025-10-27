import * as React from "react";

import { ScalixityHero } from "@/app/components/scalixity-hero";
import { ScalixityDashboardAnalytics } from "@/app/components/scalixity-dashboard-analytics";
import WhatWeDo from "@/app/components/what-we-do";
import WhatWeOffer from "@/app/components/WhatWeOffer";
import WhyChooseUs from "@/app/components/why-choose-us";
import ClientTestimonials from "@/app/components/client-testimonials";
import InternationalClients from "@/app/components/international-clients";
import ContactForm from "@/app/components/contact-form";
import ScalixityCTA from "@/app/components/cta";
import PopupWrapper from "@/app/components/popup-wrapper";
import InfoModalWrapper from "@/app/components/info-modal-wrapper";
import ResourcesComponent from "@/app/components/resources";
import { Footer } from "@/app/components/footer";
export default function ScalixityPage() {

  return (
    <div className="min-h-screen flex flex-col bg-[#F2E5DC]">
      
      {/* Hero Section */}
      <ScalixityHero />
      
      {/* Dashboard Analytics Section */}
      {/* <ScalixityDashboardAnalytics /> */}
      
      {/* What We Offer Section */}
      <WhatWeOffer />
      
      {/* What We Do Section */}
      {/* <WhatWeDo /> */}

      
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Resources Section */}
      <ResourcesComponent />
    
      {/* Client Testimonials Section */}
      <ClientTestimonials />
      
      {/* International Clients Section */}
      <InternationalClients />
     
      {/* CTA Section */}
      <ScalixityCTA />

       {/* Contact Form Section */}
       <ContactForm />

      {/* Popup Form */}
      <PopupWrapper />

      {/* Info Modal */}
      <InfoModalWrapper />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
