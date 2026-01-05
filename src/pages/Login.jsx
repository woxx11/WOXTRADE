import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.email === email && user?.password === password) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("balance", "5.00"); // Birinchi kirganda balansni belgilash
      navigate("/home");
    } else {
      alert("Email yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6">
      {/* Orqa fondagi yengil effektlar */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[450px] bg-white border border-slate-100 p-12 rounded-[40px] shadow-2xl shadow-slate-200/50 z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">Xush kelibsiz</h1>
          <p className="text-slate-400 font-medium">Tizimga kirish uchun ma'lumotlarni kiriting</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 ml-2">Email</label>
            <input
              type="email"
              required
              className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-semibold"
              placeholder="example@mail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 ml-2">Parol</label>
            <input
              type="password"
              required
              className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-semibold"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full bg-slate-900 hover:bg-blue-600 text-white py-5 rounded-2xl font-bold transition-all shadow-lg shadow-slate-200 mt-4 active:scale-95">
            Kirish
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400 font-medium">
            Hisobingiz yo'qmi?{" "}
            <Link to="/register" className="text-blue-600 font-bold hover:underline">
              Ro'yxatdan o'ting
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}