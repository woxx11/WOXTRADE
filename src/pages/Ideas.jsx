import React, { useState } from "react";
import { motion } from "framer-motion";

const Ideas = () => {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      user: "MarketKing",
      pair: "BTCUSD",
      rate: 78,
      desc: "Bitcoin 60k darajasini sinab ko'radi.",
    },
    {
      id: 2,
      user: "GoldHunter",
      pair: "XAUUSD",
      rate: 42,
      desc: "Oltinda pasayish kutilmoqda, ehtiyot bo'ling.",
    },
  ]);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto bg-white min-h-screen">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900">Trading Ideas</h1>
          <p className="text-slate-500">
            Hamjamiyat tahlillari bilan tanishing.
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-600 transition-all"
        >
          + Analiz qo'shish
        </button>
      </div>

      <div className="grid gap-8">
        {ideas.map((idea) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 p-8 rounded-[35px] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 uppercase">
                  {idea.user[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{idea.user}</h4>
                  <span className="text-blue-500 text-xs font-bold bg-blue-50 px-2 py-1 rounded">
                    {idea.pair}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                {idea.desc}
              </p>
            </div>
            <div className="md:text-right border-l md:border-l-slate-200 md:pl-10 flex flex-col justify-center">
              <div
                className={`text-5xl font-black ${
                  idea.rate > 50 ? "text-green-500" : "text-red-500"
                }`}
              >
                {idea.rate}%
              </div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                Analiz aniqligi
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analiz qo'shish modali */}
      {showAdd && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <div className="bg-white p-10 rounded-[40px] w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-6">Yangi Analiz</h2>
            <input
              className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl mb-4 outline-none font-bold"
              placeholder="Valyuta juftligi (masalan: BTCUSD)"
            />
            <textarea
              className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl mb-6 outline-none h-32"
              placeholder="Tahlilingizni yozing..."
            />
            <div className="flex gap-4">
              <button
                onClick={() => setShowAdd(false)}
                className="flex-1 font-bold text-slate-400"
              >
                Yopish
              </button>
              <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100">
                E'lon qilish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Ideas;
