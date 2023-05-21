import React from "react";
import HomeMenu from "~/components/blog_menu/HomeMenu";
import HomeHeader from "~/pages/ClientBlogs/Home/HomeHeader";
import HomeFooter from "~/pages/ClientBlogs/Home/HomeFooter";
import HomeBody from "~/pages/ClientBlogs/Home/HomeBody";
import HomeSideOptions from "~/pages/ClientBlogs/Home/HomeSideOptions";

function Home(): JSX.Element {
  return (
    <>
      <div className="m-16 flex h-screen w-screen justify-center p-10 pt-20">
        <div className="flex w-full flex-col items-center">
          <HomeHeader />
          <HomeBody />
          <HomeFooter />
        </div>
        {/*<div className="flex w-1/4 flex-col">*/}
        {/*  <HomeSideOptions />*/}
        {/*</div>*/}
      </div>
    </>
  );
}

export default Home;
