import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { Hero } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

import { HomeHero } from "@/components/layout/sections/home";

import DynamicSlider from "@/components/layout/Animation/common/DynamicTextSlider";


export const metadata = {
  title: "Shadcn - Landing template",
  description: "Free Shadcn landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    // <>
    //   <Hero4 />
    //   <SponsorsSection />
    //   <BenefitsSection />
    //   <FeaturesSection />
    //   <ServicesSection />
    //   <TestimonialSection />
    //   <TeamSection />
      
    //   <PricingSection />
    //   <ContactSection />
    //   <FAQSection />
    //    <CommunitySection />
    //   <FooterSection />
    // </>
     <>
      <Hero />

      <div>
        <DynamicSlider
          text="Rahul Jangir - Rahul Jangir -"
          speed={0.1}
          scrollScrub={0.5}
          framerMotionVariants={{
            initial: { y: 0 },
            enter: {
              y: 0,
              transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 2.0 },
            },
          }}
          pauseOnHover={true}
          className="my-custom-slider" // Optional additional class
        />
      </div>
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      
      <PricingSection />
      <ContactSection />
      <FAQSection />
       <CommunitySection />
      <FooterSection />
    </>
  );
}
