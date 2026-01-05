import React from "react";
import { motion } from "framer-motion";

export default function Wallet() {
  const balance = localStorage.getItem("balance") || "5.00";

  return (
    <div className="w-full min-h-screen bg-white pt-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Hamyon</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-900 rounded-[32px] p-10 text-white shadow-2xl">
            <p className="text-slate-400 uppercase tracking-widest text-sm mb-2">
              Umumiy balans
            </p>
            <h2 className="text-6xl font-black mb-10">${balance}</h2>
            <div className="flex gap-4">
              <button className="bg-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all">
                Deposit
              </button>
              <button className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                Withdraw
              </button>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100">
            <h3 className="font-bold text-xl mb-6 text-slate-800">
              Tranzaksiyalar
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
                <div>
                  <p className="font-bold text-slate-800">Bonus</p>
                  <p className="text-xs text-slate-400">01.01.2024</p>
                </div>
                <span className="text-green-500 font-bold">+$5.00</span>
              </div>
              <p className="text-center text-slate-400 text-sm mt-4 italic">
                Boshqa amallar mavjud emas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
