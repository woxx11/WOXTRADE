import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Ideas() {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      user: "CryptoWhale",
      role: "Pro Trader",
      avatar: "CW",
      type: "analysis",
      market: "BTC/USDT",
      direction: "Long",
      target: "$102,000",
      text: "Bitcoin 4 soatlik grafikda bayroq shaklini (Bull Flag) hosil qildi. O'sish ehtimoli juda yuqori.",
      accuracy: 92,
      likes: 124,
      time: "2m ago",
    },
    {
      id: 2,
      user: "GoldHunter",
      role: "Expert",
      avatar: "GH",
      type: "discussion",
      text: "Bugungi iqtisodiy yangiliklar oltin narxiga qanday ta'sir qiladi deb o'ylaysizlar?",
      likes: 45,
      time: "15m ago",
    },
    {
      id: 3,
      user: "ScalpKing",
      role: "Day Trader",
      avatar: "SK",
      type: "analysis",
      market: "XAUUSD",
      direction: "Short",
      target: "$2,640",
      text: "Oltin qarshilik zonasidan qaytmoqda. Qisqa muddatli sotuv (Short) uchun qulay fursat.",
      accuracy: 78,
      likes: 89,
      time: "1h ago",
    },
    // ... ko'proq ma'lumotlar
  ]);

  const [modal, setModal] = useState(false);
  const [postType, setPostType] = useState("analysis"); // analysis yoki discussion
  const [formData, setFormData] = useState({
    market: "",
    direction: "Long",
    text: "",
  });

  const handlePost = () => {
    if (!formData.text) return alert("Matn kiriting!");
    const newPost = {
      id: Date.now(),
      user: "Siz (Me)",
      role: "Trader",
      avatar: "ME",
      type: postType,
      market: formData.market,
      direction: formData.direction,
      text: formData.text,
      likes: 0,
      time: "Hozirgina",
      accuracy:
        postType === "analysis" ? Math.floor(Math.random() * 40) + 60 : null,
    };
    setIdeas([newPost, ...ideas]);
    setModal(false);
    setFormData({ market: "", direction: "Long", text: "" });
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
              Trading G'oyalar
            </h1>
            <p className="text-slate-400 font-medium">
              Jamiyatning eng so'nggi tahlillari
            </p>
          </div>
          <button
            onClick={() => setModal(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-all"
          >
            Fikr bildirish
          </button>
        </div>

        {/* FEED */}
        <div className="space-y-6">
          {ideas.map((idea) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={idea.id}
              className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              {/* User Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-sm">
                    {idea.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none mb-1">
                      {idea.user}
                    </h4>
                    <span className="text-[10px] text-blue-600 font-black uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md">
                      {idea.role}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {idea.time}
                </span>
              </div>

              {/* Analysis Badge (Only for analysis) */}
              {idea.type === "analysis" && (
                <div className="flex gap-3 mb-4">
                  <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="font-black text-xs text-slate-700">
                      {idea.market}
                    </span>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-xl text-xs font-black ${
                      idea.direction === "Long"
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {idea.direction.toUpperCase()}
                  </div>
                  {idea.target && (
                    <div className="bg-yellow-50 border border-yellow-100 px-4 py-2 rounded-xl text-xs font-black text-yellow-700">
                      Target: {idea.target}
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {idea.text}
              </p>

              {/* Footer Stats */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                <div className="flex gap-6">
                  <button className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-all">
                    <span className="text-xl">♥</span>
                    <span className="text-sm font-bold">{idea.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-all">
                    <span className="text-xl">🗨</span>
                    <span className="text-sm font-bold">Sharhlar</span>
                  </button>
                </div>

                {idea.accuracy && (
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600"
                        style={{ width: `${idea.accuracy}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-black text-blue-600">
                      {idea.accuracy}%
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CREATE POST MODAL */}
      <AnimatePresence>
        {modal && (
          <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-10 rounded-[40px] w-full max-w-xl shadow-2xl overflow-hidden"
            >
              <h2 className="text-3xl font-black mb-8 text-slate-900">
                G'oya yuklash
              </h2>

              {/* Type Selector */}
              <div className="flex gap-4 mb-8 bg-slate-50 p-2 rounded-2xl">
                <button
                  onClick={() => setPostType("analysis")}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                    postType === "analysis"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-slate-400"
                  }`}
                >
                  Texnik Tahlil
                </button>
                <button
                  onClick={() => setPostType("discussion")}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                    postType === "discussion"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-slate-400"
                  }`}
                >
                  Oddiy Fikr
                </button>
              </div>

              {postType === "analysis" && (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    className="bg-slate-50 p-4 rounded-2xl outline-none border border-slate-100 font-bold"
                    placeholder="Market (masalan: BTCUSD)"
                    onChange={(e) =>
                      setFormData({ ...formData, market: e.target.value })
                    }
                  />
                  <select
                    className="bg-slate-50 p-4 rounded-2xl outline-none border border-slate-100 font-bold"
                    onChange={(e) =>
                      setFormData({ ...formData, direction: e.target.value })
                    }
                  >
                    <option value="Long">LONG / BUY</option>
                    <option value="Short">SHORT / SELL</option>
                  </select>
                </div>
              )}

              <textarea
                className="w-full bg-slate-50 p-6 rounded-3xl mb-8 outline-none border border-slate-100 h-40 text-lg"
                placeholder="Fikringizni batafsil yozing..."
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
              ></textarea>

              <div className="flex gap-4">
                <button
                  onClick={() => setModal(false)}
                  className="flex-1 font-bold text-slate-400"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={handlePost}
                  className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-black shadow-xl"
                >
                  Postni yuklash
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
