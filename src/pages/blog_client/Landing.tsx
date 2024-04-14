import React, { useState } from "react";
import { FaMicroscope, FaMoon, FaSun } from "react-icons/fa";
import { Button, Divider, Switch } from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "~/pages/blog_client/sections/Header";
import Hero from "~/pages/blog_client/sections/Hero";
import Recents from "~/pages/blog_client/sections/Recents";
import Articles from "~/pages/blog_client/sections/Articles";
import Pricings from "~/pages/blog_client/sections/Pricings";
import BackgroundStyle from "~/pages/blog_client/components/BackgroundStyle";
import BackgroundStyleBottom from "~/pages/blog_client/components/BackgroundStyleBottom";
import SocialMedia from "~/pages/blog_client/sections/SocialMedia";
import Footer from "~/pages/blog_client/sections/Footer";

function Landing() {
  return (
    <div className="gradient leading-normal tracking-normal text-white">
      <Header />
      <Hero />
      {/*<BackgroundStyle />*/}
      <Recents />
      <Articles />
      {/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
      {/*<BackgroundStyleBottom />*/}
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Landing;
