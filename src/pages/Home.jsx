import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              Yangi avlod trading platformasi
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Kelajakni <span className="text-blue-600">Smart Trading</span>{" "}
              <br /> bilan quring.
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-medium">
              Dunyo bozorlariga kirish, professional tahlillar va hamjamiyat
              g'oyalari — barchasi bir joyda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/markets")}
                className="bg-slate-900 text-white px-10 py-5 rounded-[25px] font-black text-lg shadow-2xl shadow-slate-200 hover:scale-105 transition-all"
              >
                Savdoni boshlash
              </button>
              <button
                onClick={() => navigate("/academy")}
                className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-[25px] font-black text-lg hover:bg-slate-50 transition-all"
              >
                O'rganish
              </button>
            </div>
          </motion.div>

          {/* VIRTUAL DASHBOARD (Rasm o'rniga kod bilan chizilgan) */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 50 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-10 relative max-w-5xl mx-auto px-4"
          >
            <div className="bg-white rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
              <div className="bg-slate-50/50 border-b border-slate-100 px-8 py-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  Smart Terminal v2.0
                </div>
              </div>

              <div className="p-6 md:p-10 grid grid-cols-12 gap-6 bg-gradient-to-br from-white to-slate-50/50">
                {/* Fake Chart Area */}
                <div className="col-span-12 lg:col-span-8 bg-white rounded-[30px] border border-slate-100 p-6 h-[300px] shadow-sm relative overflow-hidden text-left">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="font-black text-slate-900 text-lg">
                        BTC / USDT
                      </h4>
                      <p className="text-green-500 font-bold text-xs">+4.28%</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-slate-50 rounded-lg"></div>
                      <div className="w-20 h-8 bg-blue-600 rounded-lg"></div>
                    </div>
                  </div>
                  {/* CSS Animated Wave */}
                  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-50 to-transparent flex items-end px-2">
                    <div className="flex items-end gap-1 w-full h-full">
                      {[40, 70, 50, 90, 110, 80, 120, 140, 100, 130, 160].map(
                        (h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${(h / 160) * 100}%` }}
                            transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                            className="flex-1 bg-blue-600/20 rounded-t-lg"
                          ></motion.div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Side Info */}
                <div className="col-span-12 lg:col-span-4 space-y-6 text-left">
                  <div className="bg-slate-900 rounded-[30px] p-6 text-white">
                    <p className="text-slate-400 text-[10px] font-black uppercase mb-1">
                      Hamyon
                    </p>
                    <h3 className="text-2xl font-black mb-4">$12,450.00</h3>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-[30px] border border-slate-100 p-6 shadow-sm">
                    <p className="text-slate-400 text-[10px] font-black uppercase mb-4">
                      Live Market
                    </p>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center h-4"
                        >
                          <div className="w-1/3 h-full bg-slate-100 rounded-full"></div>
                          <div className="w-1/4 h-full bg-green-50 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400/10 blur-[120px] rounded-full"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400/10 blur-[150px] rounded-full"></div>
        </div>
      </section>

      {/* 2. LIVE MARKETS TICKER */}
      <section className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-8">
            {[
              { name: "BTC/USDT", price: "96,432.00", change: "+2.4%" },
              { name: "ETH/USDT", price: "3,241.50", change: "-0.8%" },
              { name: "GOLD", price: "2,654.10", change: "+1.2%" },
              { name: "EUR/USD", price: "1.0842", change: "+0.1%" },
            ].map((coin, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-black text-slate-900">{coin.name}</span>
                <span className="font-mono font-bold text-slate-600">
                  ${coin.price}
                </span>
                <span
                  className={`text-xs font-black ${
                    coin.change.includes("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-3xl shadow-xl shadow-blue-200">
              ⚡
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              Ultra-Tezkor Savdo
            </h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Millisekundlar ichida buyurtmalar bering. Bizning texnologiyamiz
              sizga bozordan orqada qolmaslikni kafolatlaydi.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center text-3xl shadow-xl shadow-slate-200">
              🛡
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              Maksimal Xavfsizlik
            </h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Sizning mablag'laringiz bank darajasidagi shifrlash tizimlari
              bilan himoyalangan.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-purple-600 rounded-3xl flex items-center justify-center text-3xl shadow-xl shadow-purple-200">
              🌍
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              Global Hamjamiyat
            </h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Minglab professional traderlar bilan birga bo'ling va o'z
              tahlillaringizni ulashing.
            </p>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS */}
      <section className="py-20 bg-slate-900 rounded-[60px] mx-4 md:mx-10 my-20 px-6 overflow-hidden relative text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">
          <div>
            <h4 className="text-5xl font-black text-blue-500 mb-2">$4.2B+</h4>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
              Oborot
            </p>
          </div>
          <div>
            <h4 className="text-5xl font-black mb-2">120K+</h4>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
              Traderlar
            </p>
          </div>
          <div>
            <h4 className="text-5xl font-black mb-2">0.01s</h4>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
              Tezlik
            </p>
          </div>
          <div>
            <h4 className="text-5xl font-black text-blue-500 mb-2">24/7</h4>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
              Support
            </p>
          </div>
        </div>
      </section>

      {/* 5. ACADEMY TEASER (Kod bilan chizilgan interaktiv karta) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 text-left">
            <h2 className="text-5xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
              Tradingni noldan <br /> biz bilan o'rganing.
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg text-left">
                    Boshlang'ich darslar
                  </h5>
                  <p className="text-slate-500 text-left">
                    Bozor qanday ishlashi haqida to'liq kurs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">
                  2
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg text-left">
                    Texnik Tahlil
                  </h5>
                  <p className="text-slate-500 text-left">
                    Grafiklar va indikatorlar bilan ishlash.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("/academy")}
              className="mt-12 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black shadow-xl"
            >
              Akademiyaga o'tish
            </button>
          </div>

          <div className="flex-1 bg-slate-50 p-10 rounded-[50px] border border-slate-100 relative w-full">
            <div className="bg-white p-8 rounded-[35px] shadow-2xl relative z-10 text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black">
                  TC
                </div>
                <div>
                  <h4 className="font-black text-slate-900 leading-none">
                    Texnik Tahlil Kursi
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">
                    Sizning natijangiz
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-black text-blue-600">
                  <span>Progress</span>
                  <span>65%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-blue-600"></div>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <div className="flex-1 h-12 bg-slate-50 rounded-xl"></div>
                <div className="flex-1 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-[10px] font-black tracking-widest">
                  DAVOM ETTIRISH
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-[-10px] bg-white p-6 rounded-[30px] shadow-xl border border-slate-50 rotate-12 z-20">
              <span className="text-3xl font-black text-green-500">+85%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-10">
          Moliyaviy erkinlikka bir qadam qoldi.
        </h2>
        <button
          onClick={() => navigate("/register")}
          className="bg-slate-900 text-white px-16 py-6 rounded-[30px] font-black text-2xl shadow-2xl hover:bg-blue-600 transition-all"
        >
          Hozir ro'yxatdan o'ting
        </button>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-20 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
          Smart Trading Platform 2026
        </p>
      </footer>
    </div>
  );
}
