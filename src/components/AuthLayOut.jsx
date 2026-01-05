import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayOut() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{ zIndex: 1 }}
    >
      <Outlet />
    </div>
  );
}
