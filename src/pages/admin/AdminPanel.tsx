import React from "react";
import { Toaster } from "react-hot-toast";
import AdminMenu from "~/pages/admin/AdminMenu";

function AdminPanel() {
  return (
    <div className="flex flex-col">
      <AdminMenu />
      <Toaster
        toastOptions={{
          className: "dark:bg-gray-800 dark:text-white",
        }}
      />
    </div>
  );
}

export default AdminPanel;
