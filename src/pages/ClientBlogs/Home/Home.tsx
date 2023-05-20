import React from "react";
import HomeMenu from "~/components/blog_menu/HomeMenu";
import HomeHeader from "~/pages/ClientBlogs/Home/HomeHeader";
import HomeFooter from "~/pages/ClientBlogs/Home/HomeFooter";
import HomeBody from "~/pages/ClientBlogs/Home/HomeBody";
import HomeSideOptions from "~/pages/ClientBlogs/Home/HomeSideOptions";

function Home(): JSX.Element {
  return (
    <>
      <div className="m-16 flex h-screen w-full justify-center p-10">
        <div className="flex flex-col items-center">
          <HomeHeader />
          <HomeBody />
          <HomeFooter />
        </div>
        <div className="flex flex-col">
          <HomeSideOptions />
        </div>
      </div>
    </>
  );
}

export default Home;
