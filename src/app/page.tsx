"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Cloud, Shield } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline
          navItems={[
            { label: "Home", href: "hero" },
            { label: "About Us", href: "about" },
            { label: "Services", href: "feature" },
            { label: "Contact", href: "contact" }
          ]}
          brandName="Your IT Company"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Innovative IT Solutions"
            description="Empowering businesses with cutting-edge technology solutions."
            imageSrc="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="Who We Are"
            description="At Your IT Company, we are dedicated to providing top-notch IT services."
            bulletPoints={[
              { title: "Innovation", description: "Pioneering new ways to enhance your tech environment." },
              { title: "Excellence", description: "Delivering the highest quality IT solutions for your business." }
            ]}
            imageSrc="https://images.pexels.com/photos/34325550/pexels-photo-34325550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Services"
            description="Explore the range of IT services we offer to elevate your business."
            features={[
              { title: "Cloud Computing", description: "Seamless cloud integration.", icon: Cloud },
              { title: "Cybersecurity", description: "Protecting your data with advanced security.", icon: Shield }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            title="Meet Our Team"
            description="The dedicated professionals driving innovation."
            members={[
              { id: "1", name: "Jane D.", role: "Tech Lead", imageSrc: "https://images.pexels.com/photos/7640798/pexels-photo-7640798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Clients Say"
            description="Hear from our satisfied clients."
            testimonials={[
              { id: "1", name: "John Smith", role: "CEO", company: "Tech Innovators", rating: 5, imageSrc: "https://images.pexels.com/photos/8866823/pexels-photo-8866823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Connected"
            description="Subscribe to our newsletter for updates and insights."
            onSubmit={() => console.log('Newsletter signed up')}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Services", items: [
                { label: "Cloud Integration", href: "services#cloud" },
                { label: "Cybersecurity", href: "services#cybersecurity" }
              ]},
              { title: "Company", items: [
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" }
              ]}
            ]}
            copyrightText="© 2025 Your IT Company"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
