import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  onClose: (change: boolean) => void;
}
function SignOutModal({ onClose }: IProps): JSX.Element {
  const navigate = useNavigate();
  const closeSession = () => {
    navigate("/auth");
  };

  return (
    <div className=" fixed z-20 flex h-60 w-80 flex-col items-center justify-center rounded-xl border border-gray-300 bg-white shadow-2xl">
      <h1 className="text-sans-serif text-bold mb-12 text-2xl">Close Your Session?</h1>
      <div className="m-4 flex justify-between">
        <button
          className="active: mx-7 rounded-xl bg-green-500 px-7 py-2 text-white hover:bg-green-400 active:bg-green-200"
          onClick={closeSession}
        >
          Yes
        </button>
        <button
          className="mx-7 rounded-xl bg-red-600 px-7 py-1 text-white hover:bg-red-500 active:bg-red-300"
          onClick={() => onClose(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default SignOutModal;
