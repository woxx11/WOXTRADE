import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import AuthLayOut from "./components/AuthLayOut";
import MainLayOut from "./components/MainLayOut";
import ProtectedRoute from "./components/protectedRoute";

import History from "./pages/history";
import Wallet from "./pages/wallet";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Markets from "./pages/Markets";
import Ideas from "./pages/Ideas";
import Idea from "./pages/Idea";
import CreateIdea from "./pages/CreateIdea";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      {/* AUTH ROUTES - Kirish va Ro'yxatdan o'tish */}
      <Route element={<AuthLayOut />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* PROTECTED ROUTES - Faqat login qilganlar uchun */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayOut />
          </ProtectedRoute>
        }
      >
        {/* Asosiy sahifa - Markets yoki Home dan birini index qiling */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="markets" element={<Markets />} />
        <Route path="ideas" element={<Ideas />} />
        <Route path="idea/:id" element={<Idea />} />
        <Route path="create-idea" element={<CreateIdea />} />
        <Route path="profile" element={<Profile />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="history" element={<History />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 404 - Topilmagan sahifalar uchun (Ixtiyoriy) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
