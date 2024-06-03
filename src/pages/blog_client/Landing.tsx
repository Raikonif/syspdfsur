import React from "react";
import Header from "~/pages/blog_client/sections/Header";
import Hero from "~/pages/blog_client/sections/Hero";
import Recents from "~/pages/blog_client/sections/Recents";
import Cases from "~/pages/blog_client/sections/Cases";
import Footer from "~/pages/blog_client/sections/Footer";

function Landing() {
  return (
    <div className="gradient leading-normal tracking-normal text-white">
      <Hero />
      {/*<BackgroundStyle />*/}
      {/*<Recents />*/}
      <Cases />
      {/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
      {/*<BackgroundStyleBottom />*/}
      {/*<SocialMedia />*/}
      <Footer />
    </div>
  );
}

export default Landing;
