import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function History() {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("trade_history") || "[]")
  );
  const [filter, setFilter] = useState("ALL"); // ALL, BUY, SELL, INCOME

  // Filtrlash logikasi
  const filteredHistory = history.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "BUY") return item.type === "BUY";
    if (filter === "SELL") return item.type === "SELL";
    if (filter === "INCOME") return item.type === "INCOME";
    return true;
  });

  const deleteHistory = () => {
    if (window.confirm("Barcha tarixni o'chirib tashlamoqchimisiz?")) {
      localStorage.setItem("trade_history", "[]");
      setHistory([]);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
              Amallar Tarixi
            </h1>
            <p className="text-slate-400 font-medium mt-1">
              Barcha savdo va moliyaviy tranzaksiyalaringiz
            </p>
          </div>
          <button
            onClick={deleteHistory}
            className="text-red-500 font-bold text-sm bg-red-50 px-6 py-3 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
          >
            Tarixni tozalash
          </button>
        </div>

        {/* FILTERS */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {["ALL", "BUY", "SELL", "INCOME"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                filter === f
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-200"
                  : "bg-white text-slate-400 border border-slate-100 hover:bg-slate-50"
              }`}
            >
              {f === "INCOME" ? "To'lovlar" : f}
            </button>
          ))}
        </div>

        {/* TABLE HEADER - DESKTOP ONLY */}
        <div className="hidden md:grid grid-cols-4 px-8 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <span>Aktiv / Tur</span>
          <span className="text-center">Sana va Vaqt</span>
          <span className="text-center">Miqdor</span>
          <span className="text-right">Holat</span>
        </div>

        {/* LIST */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredHistory.length > 0 ? (
              filteredHistory.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={item.id}
                  className="bg-white p-6 md:p-8 rounded-[35px] border border-slate-100 shadow-sm flex flex-col md:grid md:grid-cols-4 items-center gap-4 transition-all hover:shadow-md"
                >
                  {/* Pair & Type */}
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg ${
                        item.type === "BUY"
                          ? "bg-green-50 text-green-500"
                          : item.type === "SELL"
                          ? "bg-red-50 text-red-500"
                          : "bg-blue-50 text-blue-500"
                      }`}
                    >
                      {item.type === "BUY"
                        ? "↑"
                        : item.type === "SELL"
                        ? "↓"
                        : "💸"}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900">{item.pair}</h4>
                      <p
                        className={`text-[10px] font-black uppercase ${
                          item.type === "BUY"
                            ? "text-green-500"
                            : item.type === "SELL"
                            ? "text-red-500"
                            : "text-blue-500"
                        }`}
                      >
                        {item.type}
                      </p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-center w-full md:w-auto">
                    <p className="text-sm font-bold text-slate-800">
                      {item.date}
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold">
                      Bajarilgan vaqt
                    </p>
                  </div>

                  {/* Amount */}
                  <div className="text-center w-full md:w-auto">
                    <p
                      className={`text-xl font-black ${
                        item.type === "INCOME"
                          ? "text-green-500"
                          : "text-slate-900"
                      }`}
                    >
                      {item.type === "INCOME" ? "+" : ""}$
                      {parseFloat(item.amount).toFixed(2)}
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Hajm
                    </p>
                  </div>

                  {/* Status */}
                  <div className="text-right w-full md:w-auto flex justify-center md:justify-end">
                    <span
                      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter ${
                        item.status === "Success" || item.status === "Closed"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {item.status || "Completed"}
                    </span>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-[40px] p-20 text-center border border-dashed border-slate-200"
              >
                <div className="text-6xl mb-4">📂</div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  Hozircha ma'lumot yo'q
                </h3>
                <p className="text-slate-400 max-w-xs mx-auto">
                  Siz qilgan barcha savdolar va to'lovlar shu yerda jamlanadi.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
