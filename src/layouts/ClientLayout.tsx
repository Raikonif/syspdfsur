import React from "react";

import { Outlet } from "react-router-dom";

function ClientLayout(): JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center">
      <Outlet />
    </div>
  );
}

export default ClientLayout;
