import React from "react";
import { Toaster } from "react-hot-toast";
import AdminMenu from "~/pages/admin/components/AdminMenu";
import { Outlet } from "react-router-dom";
import Header from "~/pages/admin/components/Header";
import Paginator from "~/pages/admin/cases/components/Paginator";

function AdminPanel() {
  return (
    <div className="flex flex-col lg:flex-row">
      <AdminMenu />
      <div className="flex w-full flex-col">
        <Header />
        <div className="mt-20 lg:mt-0">
          <Outlet />
          <Paginator />
        </div>
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
