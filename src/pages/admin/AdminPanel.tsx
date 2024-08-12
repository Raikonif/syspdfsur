import React, { useContext } from "react";
import AdminMenu from "~/pages/admin/components/AdminMenu";
import { Outlet } from "react-router-dom";
import Header from "~/pages/admin/components/Header";
import Paginator from "~/pages/admin/components/Paginator";
import ModalCRUDCase from "~/pages/admin/cases/components/ModalCRUDCase";
import ModalDelete from "~/components/ModalDelete";
import ProgressCircle from "~/components/ProgressCircle";
import AdminContext from "~/pages/admin/context/AdminContext";

function AdminPanel() {
  const { loading, loadingAttributes } = useContext(AdminContext);
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <AdminMenu />
      <div className="flex w-full flex-col">
        <Header />
        <div className="mt-20 h-full lg:mt-0">
          <Outlet />
          <Paginator />
        </div>
      </div>
      {loading && (
        <ProgressCircle text={loadingAttributes.message} color={loadingAttributes.color} />
      )}
      <ModalCRUDCase />
      <ModalDelete />
    </div>
  );
}

export default AdminPanel;
