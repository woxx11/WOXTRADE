import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Layouts
import AuthLayOut from "./components/AuthLayOut";
import MainLayOut from "./components/MainLayOut";
import ProtectedRoute from "./components/protectedRoute";

// Pages
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
import Academy from "./pages/academy";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Splash screen faqat bir marta sayt ochilganda ko'rinadi
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 soniya kutish
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        // 🚀 SPLASH SCREEN ANIMATSIYASI
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-6xl font-black tracking-tighter text-slate-900"
          >
            WOX<span className="text-blue-600">TRADE</span>
          </motion.h1>
        </motion.div>
      ) : (
        // 🌐 ASOSIY SAYT YO'LLARI
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
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="markets" element={<Markets />} />
            <Route path="ideas" element={<Ideas />} />
            <Route path="idea/:id" element={<Idea />} />
            <Route path="create-idea" element={<CreateIdea />} />
            <Route path="profile" element={<Profile />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="history" element={<History />} />
            <Route path="academy" element={<Academy />} />{" "}
            {/* O'rganish sahifasi */}
          </Route>

          {/* 404 - Topilmagan sahifalar uchun */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}
