import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Wallet() {
  const [balance, setBalance] = useState(
    parseFloat(localStorage.getItem("balance") || "5.00")
  );
  const [modal, setModal] = useState({ open: false, method: "" });
  const [amount, setAmount] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("trade_history") || "[]")
  );

  // Pul qo'shish funksiyasi
  const handleDeposit = () => {
    const depVal = parseFloat(amount);
    if (!depVal || depVal <= 0) return alert("To'g'ri miqdor kiriting!");

    const newBalance = (balance + depVal).toFixed(2);
    setBalance(parseFloat(newBalance));
    localStorage.setItem("balance", newBalance);

    // Tarixga qo'shish
    const newRecord = {
      id: Date.now(),
      pair: `Deposit (${modal.method})`,
      type: "INCOME",
      amount: depVal,
      status: "Success",
      date: new Date().toLocaleDateString(),
    };
    const updatedHistory = [newRecord, ...history];
    setHistory(updatedHistory);
    localStorage.setItem("trade_history", JSON.stringify(updatedHistory));

    setModal({ open: false, method: "" });
    setAmount("");
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: MAIN CARD & ACTIONS */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden bg-slate-900 rounded-[50px] p-12 text-white shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">
                      Umumiy Balans
                    </p>
                    <h2 className="text-7xl font-black text-blue-500 tracking-tighter">
                      ${balance.toFixed(2)}
                    </h2>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                      className="w-12 brightness-200"
                      alt="Visa"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setModal({ open: true, method: "Visa" })}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black transition-all active:scale-95 shadow-xl shadow-blue-500/20"
                  >
                    + To'ldirish
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-black transition-all">
                    Yechib olish
                  </button>
                </div>
              </div>

              {/* Background Abstract Circles */}
              <div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-[-50px] left-[-50px] w-60 h-60 bg-purple-600/10 blur-[80px] rounded-full"></div>
            </motion.div>

            {/* PAYMENT METHODS QUICK VIEW */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Uzcard", "Humo", "MasterCard", "Crypto"].map((m) => (
                <div
                  key={m}
                  className="bg-white p-6 rounded-[30px] border border-slate-100 shadow-sm text-center hover:border-blue-200 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-50">
                    <span className="text-xl">💳</span>
                  </div>
                  <p className="font-bold text-slate-800 text-sm">{m}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: RECENT ACTIVITY */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 h-full min-h-[500px]">
              <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter">
                Faollik
              </h3>
              <div className="space-y-6">
                {history.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${
                          item.type === "INCOME"
                            ? "bg-green-50 text-green-600"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {item.type === "INCOME" ? "↓" : "⇄"}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">
                          {item.pair}
                        </p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`font-black ${
                        item.type === "INCOME"
                          ? "text-green-500"
                          : "text-slate-900"
                      }`}
                    >
                      {item.type === "INCOME" ? "+" : ""}${item.amount}
                    </p>
                  </div>
                ))}
                {history.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-slate-400 font-bold text-sm italic">
                      Hali operatsiyalar yo'q
                    </p>
                  </div>
                )}
              </div>
              <button className="w-full mt-10 py-4 text-slate-400 font-bold text-sm border-t border-slate-50 hover:text-blue-600 transition-all">
                Barcha operatsiyalar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DEPOSIT MODAL */}
      <AnimatePresence>
        {modal.open && (
          <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white p-10 rounded-[40px] w-full max-w-md shadow-2xl"
            >
              <h2 className="text-3xl font-black mb-2 text-slate-900">
                To'ldirish
              </h2>
              <p className="text-slate-400 font-medium mb-8">
                Metod:{" "}
                <span className="text-blue-600 font-bold">{modal.method}</span>
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Karta raqami
                  </p>
                  <input
                    type="text"
                    placeholder="8600 0000 0000 0000"
                    className="w-full bg-transparent outline-none font-mono text-lg font-bold text-slate-700"
                  />
                </div>

                <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2 ml-1">
                    Summa ($)
                  </p>
                  <input
                    type="number"
                    autoFocus
                    placeholder="0.00"
                    className="w-full bg-transparent outline-none text-3xl font-black text-blue-600"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setModal({ open: false, method: "" })}
                  className="flex-1 py-4 font-bold text-slate-400"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={handleDeposit}
                  className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black shadow-xl shadow-slate-200 active:scale-95 transition-all"
                >
                  Tasdiqlash
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
