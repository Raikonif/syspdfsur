import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import GeneralMenu from "~/components/menu/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
import Header from "~/pages/patients/components/Header";
import SearchButton from "~/components/menu/search/SearchButton";
import ProfileCard from "~/components/menu/Profile/ProfileCard";
import SignOutModal from "~/components/menu/Profile/SignOutModal";
import toast, { Toaster } from "react-hot-toast";

function GeneralLayout(): JSX.Element {
  const [mobileMode, setMobileMode] = useState<boolean>(false);
  const [modalSignOut, setModalSignOut] = useState<boolean>(false);
  const [modalProfile, setModalProfile] = useState<boolean>(false);

  useEffect(() => {
    toast.success("Welcome to your System Nandy!");
  }, [Toaster]);

  useEffect(() => {
    const handleMobileMode = () => {
      if (window.innerWidth < 640) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    };
    window.addEventListener("resize", handleMobileMode);
    return () => {
      window.removeEventListener("resize", handleMobileMode);
    };
  }, []);
  return (
    <div className="flex h-screen items-center justify-center bg-white ">
      <div
        className={`${
          mobileMode ? "flex h-screen w-full flex-col bg-white" : "flex h-screen w-screen bg-white"
        }`}
      >
        <div className="w-40">
          <GeneralMenu itemList={homeOptions.menuOptions} isMobileMode={mobileMode} />
        </div>
        <div className="flex h-full w-full flex-col">
          <Outlet />
          <Toaster />
        </div>
        {modalProfile && <ProfileCard openModal={() => setModalSignOut(true)} />}
        {modalSignOut && (
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-400 bg-opacity-50 backdrop-blur-sm">
            <SignOutModal onClose={() => setModalSignOut(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneralLayout;
