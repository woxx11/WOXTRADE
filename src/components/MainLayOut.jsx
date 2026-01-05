import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React from "react";

export default function MainLayOut() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      {/* max-w olib tashlandi yoki kengaytirildi, p-0 qilingdi */}
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
