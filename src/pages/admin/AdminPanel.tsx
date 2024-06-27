import React from "react";
import { Toaster } from "react-hot-toast";
import AdminMenu from "~/pages/admin/components/AdminMenu";
import { Outlet } from "react-router-dom";
import Header from "~/pages/admin/components/Header";

function AdminPanel() {
  return (
    <div className="flex">
      <AdminMenu />
      <div className="flex w-full flex-col">
        <Header />
        <Outlet />
      </div>
      <Toaster
        toastOptions={{
          className: "dark:bg-gray-800 dark:text-white",
        }}
      />
    </div>
  );
}

export default AdminPanel;
