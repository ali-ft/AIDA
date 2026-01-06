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

export function Home() {
  return (
    <>
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