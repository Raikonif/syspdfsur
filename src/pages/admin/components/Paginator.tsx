import React from "react";
import { Pagination } from "@nextui-org/react";

function Paginator() {
  return (
    <div className="hidden w-full justify-center lg:flex">
      <Pagination isCompact showControls total={10} initialPage={1} color="secondary" size="lg" />
    </div>
  );
}

export default Paginator;
