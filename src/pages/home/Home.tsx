import React from "react";
import HomeMenu from "~/components/blog_menu/HomeMenu";

function Home(): JSX.Element {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center">
        <HomeMenu />
      </div>
    </>
  );
}

export default Home;
