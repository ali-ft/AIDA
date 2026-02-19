import { Hero } from "../components/Hero";
import { Challenge } from "../components/Challenge";
import { Solution } from "../components/Solution";
import { TrustedPartners } from "../components/TrustedPartners";
import { Benefits } from "../components/Benefits";
import { SmarterWay } from "../components/SmarterWay";
// import { PreviousCustomers } from "../components/PreviousCustomers";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { CourseModules } from "../components/CourseModules";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { SeoHead } from "../components/SeoHead";

export function Home() {
  return (
    <>
      <SeoHead
        title="AIDA - International AI Training Center | Enterprise AI Education"
        description="AIDA Training Center: Premier destination for comprehensive AI education. Empower your C-levels, managers, and employees with robust AI skills for sustainable growth. Transform your organization with cutting-edge AI training."
        keywords="AI training, artificial intelligence, machine learning, enterprise AI, AI education, Dubai AI training, UAE AI courses, C-level AI training, workforce AI skills, AIDA"
        url="/"
        image="/assets/hero-section-new.png"
      />
      <div id="home">
        <Hero />
      </div>

      <div id="challenge">
        <Challenge />
      </div>

      <div id="solution">
        <Solution />
      </div>

      <TrustedPartners />

      <div id="benefits">
        <Benefits />
      </div>

      <div id="smarter-way">
        <SmarterWay />
      </div>

      {/* <div id="customers">
        <PreviousCustomers />
      </div> */}

      <div id="why-us">
        <WhyUs />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="modules">
        <CourseModules />
      </div>

      {/* <div id="pricing">
        <Pricing />
      </div> */}

      <div id="faq">
        <FAQ />
      </div>
    </>
  );
}