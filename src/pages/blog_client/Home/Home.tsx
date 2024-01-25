import React from "react";
import HomeMenu from "~/components/blog_menu/HomeMenu";
import HomeHeader from "~/pages/blog_client/Home/HomeHeader";
import HomeFooter from "~/pages/blog_client/Home/HomeFooter";
import HomeBody from "~/pages/blog_client/Home/HomeBody";
import HomeSideOptions from "~/pages/blog_client/Home/HomeSideOptions";
import HomeBodyAlt from "~/pages/blog_client/Home/HomeBodyAlt";

function Home(): JSX.Element {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:p-10">
        <div className="flex w-full flex-col">
          <HomeHeader />
          {/*<HomeBodyAlt />*/}
          {/*<HomeBody />*/}
          {/*<HomeFooter />*/}
        </div>
        {/*<div className="flex w-1/4 flex-col">*/}
        {/*  <HomeSideOptions />*/}
        {/*</div>*/}
      </div>
    </>
  );
}

export default Home;
