import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // State-lar
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || { email: "user@example.com" }
  );
  const [username, setUsername] = useState(
    user.username || user.email.split("@")[0]
  );
  const [password, setPassword] = useState("");
  const [is2FA, setIs2FA] = useState(
    JSON.parse(localStorage.getItem("2fa")) || false
  );
  const [isSaving, setIsSaving] = useState(false);

  const balance = localStorage.getItem("balance") || "5.00";
  const history = JSON.parse(localStorage.getItem("trade_history")) || [];

  // Statistika
  const totalTrades = history.length;
  const buyTrades = history.filter((h) => h.type === "BUY").length;
  const sellTrades = history.filter((h) => h.type === "SELL").length;

  // Ma'lumotlarni saqlash funksiyasi
  const handleSaveInfo = () => {
    setIsSaving(true);

    // Yangi user obyektini yaratish
    const updatedUser = { ...user, username: username };

    // LocalStorage-ga saqlash
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsSaving(false);
      alert("Ma'lumotlar muvaffaqiyatli saqlandi!");
    }, 1000);
  };

  // 2FA toggler
  const toggle2FA = () => {
    const newState = !is2FA;
    setIs2FA(newState);
    localStorage.setItem("2fa", JSON.stringify(newState));
  };

  // Chiqish funksiyasi
  const handleLogout = () => {
    if (window.confirm("Rostdan ham hisobdan chiqmoqchimisiz?")) {
      localStorage.removeItem("auth"); // Login holatini o'chirish
      navigate("/login");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* TOP SECTION: User Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-10 mb-8"
        >
          <div className="relative">
            <div className="w-32 h-32 bg-slate-900 rounded-[40px] flex items-center justify-center text-white text-4xl font-black shadow-2xl">
              {username.substring(0, 2).toUpperCase()}
            </div>
            <div
              className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white ${
                is2FA ? "bg-green-500" : "bg-slate-300"
              }`}
            ></div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">
              {username}
            </h1>
            <p className="text-slate-400 font-bold mb-4">{user.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">
                Professional Trader
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-50 text-red-500 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
              >
                Chiqish
              </button>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-[35px] border border-slate-100 text-center min-w-[200px]">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">
              Mavjud Balans
            </p>
            <h3 className="text-3xl font-black text-blue-600">
              ${parseFloat(balance).toFixed(2)}
            </h3>
          </div>
        </motion.div>

        {/* MIDDLE SECTION: Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              label: "Jami Savdolar",
              value: totalTrades,
              color: "text-slate-900",
              icon: "📊",
            },
            {
              label: "Buy Orderlar",
              value: buyTrades,
              color: "text-green-500",
              icon: "📈",
            },
            {
              label: "Sell Orderlar",
              value: sellTrades,
              color: "text-red-500",
              icon: "📉",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[35px] border border-slate-100 shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                  {stat.label}
                </p>
                <h4 className={`text-4xl font-black ${stat.color}`}>
                  {stat.value}
                </h4>
              </div>
              <span className="text-4xl">{stat.icon}</span>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Settings Card */}
          <motion.div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-8">
              Hisob Sozlamalari
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">
                  Foydalanuvchi Nomi
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl outline-none focus:border-blue-600 transition-all font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">
                  Parolni Yangilash
                </label>
                <input
                  type="password"
                  placeholder="Yangi parol"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl outline-none focus:border-blue-600 transition-all font-bold"
                />
              </div>
              <button
                onClick={handleSaveInfo}
                disabled={isSaving}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-600 transition-all disabled:opacity-50"
              >
                {isSaving ? "Saqlanmoqda..." : "Ma'lumotlarni Saqlash"}
              </button>
            </div>
          </motion.div>

          {/* Verification / Security Card */}
          <motion.div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Xavfsizlik
              </h3>
              <p className="text-slate-400 font-medium mb-8">
                Hisobingizni himoya qiling
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-green-50 rounded-3xl border border-green-100">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-green-500">✔</span>
                    <span className="font-bold text-green-700">
                      Email tasdiqlangan
                    </span>
                  </div>
                </div>

                <div
                  className={`flex items-center justify-between p-6 rounded-3xl border transition-all ${
                    is2FA
                      ? "bg-blue-50 border-blue-100"
                      : "bg-slate-50 border-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{is2FA ? "🛡" : "🔓"}</span>
                    <div>
                      <p
                        className={`font-bold ${
                          is2FA ? "text-blue-700" : "text-slate-400"
                        }`}
                      >
                        2FA Himoyasi
                      </p>
                      <p className="text-[10px] uppercase font-black opacity-50">
                        {is2FA ? "Yoqilgan" : "O'chirilgan"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={toggle2FA}
                    className={`font-black text-sm uppercase px-4 py-2 rounded-xl transition-all ${
                      is2FA ? "bg-blue-600 text-white" : "text-blue-600"
                    }`}
                  >
                    {is2FA ? "O'chirish" : "Yoqish"}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 p-8 bg-blue-600 rounded-[35px] text-white">
              <h4 className="font-black text-xl mb-2">VIP Trader</h4>
              <p className="text-blue-100 text-sm mb-4">
                Savdo komissiyalarini 0% gacha tushiring.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
                Hozir faollashtirish
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
