import React, { ReactElement, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import GeneralMenu from "~/components/menu/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
import ProfileCard from "~/components/menu/Profile/ProfileCard";
import SignOutModal from "~/components/menu/Profile/SignOutModal";
import toast, { Toaster } from "react-hot-toast";
import AdminMenu from "~/pages/admin/components/AdminMenu";

function GeneralLayout(): ReactElement {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white ">
      <Outlet />
    </div>
  );
}

export default GeneralLayout;
