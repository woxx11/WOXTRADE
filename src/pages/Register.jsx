import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Ro'yxatdan o'tdingiz! Endi kirishingiz mumkin.");
    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[450px] bg-white border border-slate-100 p-12 rounded-[40px] shadow-2xl shadow-slate-200/50 z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">
            Ro'yxatdan o'tish
          </h1>
          <p className="text-slate-400 font-medium">
            WOXTRADE hamjamiyatiga qo'shiling
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 ml-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-semibold"
              placeholder="yangi@mail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 ml-2">
              Parol yarating
            </label>
            <input
              type="password"
              required
              className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-semibold"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-slate-900 text-white py-5 rounded-2xl font-bold transition-all shadow-lg shadow-blue-100 mt-4 active:scale-95">
            Hisob yaratish
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400 font-medium">
            Hisobingiz bormi?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:underline"
            >
              Kirish sahifasi
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
