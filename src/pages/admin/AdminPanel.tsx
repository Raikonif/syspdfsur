import React from "react";
import AdminMenu from "~/pages/admin/components/AdminMenu";
import { Outlet } from "react-router-dom";
import Header from "~/pages/admin/components/Header";
import Paginator from "~/pages/admin/components/Paginator";
import ModalCRUDCase from "~/pages/admin/cases/components/ModalCRUDCase";

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
      <ModalCRUDCase />
    </div>
  );
}

export default AdminPanel;
