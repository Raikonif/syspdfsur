import React from "react";
import Blog from "~/pages/blog_client/home/components/Blog";
import CallToAction from "~/pages/blog_client/home/components/CallToAction";
import Features from "~/pages/blog_client/home/components/Features";
import HeroSection from "~/pages/blog_client/home/components/HeroSection";
import Stats from "~/pages/blog_client/home/components/Stats";
import Testimonials from "~/pages/blog_client/home/components/Testimonials";
import AppFooter from "~/pages/blog_client/home/components/AppFooter";

function Landing() {
  return (
    <main className="mb-40 space-y-40">
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
      <AppFooter />
    </main>
  );
}

export default Landing;
