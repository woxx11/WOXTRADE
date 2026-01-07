import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const marketList = [
  {
    sym: "FX:XAUUSD",
    name: "GOLD",
    icon: "https://cryptologos.cc/logos/pax-gold-paxg-logo.png",
    change: "+1.2%",
  },
  {
    sym: "BINANCE:BTCUSDT",
    name: "BTC / USDT",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    change: "+2.4%",
  },
  {
    sym: "BINANCE:ETHUSDT",
    name: "ETH / USDT",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    change: "-0.5%",
  },
  {
    sym: "FX:EURUSD",
    name: "EUR / USD",
    icon: "https://static.vecteezy.com/system/resources/previews/010/160/458/non_2x/eur-icon-sign-symbol-design-free-png.png",
    change: "+0.1%",
  },
  {
    sym: "NASDAQ:TSLA",
    name: "TESLA",
    icon: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logo.wine.svg",
    change: "-1.8%",
  },
  {
    sym: "NASDAQ:AAPL",
    name: "APPLE",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    change: "+0.8%",
  },
  {
    sym: "FX:GBPUSD",
    name: "GBP / USD",
    icon: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
    change: "+0.3%",
  },
  {
    sym: "BINANCE:SOLUSDT",
    name: "SOLANA",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
    change: "+5.6%",
  },
];

const timeframes = [
  { label: "1m", value: "1" },
  { label: "5m", value: "5" },
  { label: "15m", value: "15" },
  { label: "1h", value: "60" },
  { label: "4h", value: "240" },
  { label: "1D", value: "D" },
  { label: "1W", value: "W" },
];

export default function Markets() {
  const [selected, setSelected] = useState(marketList[0]);
  const [time, setTime] = useState("D");
  const [balance, setBalance] = useState(
    parseFloat(localStorage.getItem("balance") || "5.00")
  );
  const [modal, setModal] = useState({ open: false, type: "" });
  const [amount, setAmount] = useState("");

  const handleTrade = () => {
    const val = parseFloat(amount);
    if (!val || val > balance || val <= 0)
      return alert("Mablag' yetarli emas yoki noto'g'ri miqdor!");

    const newBalance = (balance - val).toFixed(2);
    setBalance(parseFloat(newBalance));
    localStorage.setItem("balance", newBalance);

    const history = JSON.parse(localStorage.getItem("trade_history") || "[]");
    history.unshift({
      id: Date.now(),
      pair: selected.name,
      type: modal.type,
      amount: val,
      status: "Open",
      date: new Date().toLocaleTimeString(),
    });
    localStorage.setItem("trade_history", JSON.stringify(history));

    setModal({ open: false, type: "" });
    setAmount("");
    alert(`${modal.type} order $${val} miqdorida ochildi!`);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] pt-24 pb-10 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6">
        {/* LEFT SIDE: MARKET LIST */}
        <aside className="col-span-12 lg:col-span-3 space-y-4">
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-900 mb-6">
              Marketlar
            </h2>
            <div className="space-y-2 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
              {marketList.map((m) => (
                <motion.button
                  key={m.sym}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelected(m)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                    selected.sym === m.sym
                      ? "bg-blue-600 shadow-lg shadow-blue-100"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={m.icon}
                      className={`w-8 h-8 object-contain ${
                        selected.sym === m.sym ? "invert brightness-200" : ""
                      }`}
                      alt=""
                    />
                    <div className="text-left">
                      <p
                        className={`font-bold text-sm ${
                          selected.sym === m.sym
                            ? "text-white"
                            : "text-slate-800"
                        }`}
                      >
                        {m.name}
                      </p>
                      <p
                        className={`text-[10px] ${
                          selected.sym === m.sym
                            ? "text-blue-100"
                            : "text-slate-400"
                        }`}
                      >
                        24h Vol: $2.4M
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-black ${
                      m.change.includes("+") ? "text-green-500" : "text-red-500"
                    } ${selected.sym === m.sym ? "!text-white" : ""}`}
                  >
                    {m.change}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </aside>

        {/* CENTER: CHART AREA */}
        <section className="col-span-12 lg:col-span-6 space-y-6">
          <div className="bg-white p-4 rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
            {/* Chart Header */}
            <div className="flex justify-between items-center mb-6 px-4 pt-2">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-black text-slate-900">
                  {selected.name}
                </h1>
                <div className="flex gap-2 bg-slate-50 p-1 rounded-xl">
                  {timeframes.map((tf) => (
                    <button
                      key={tf.value}
                      onClick={() => setTime(tf.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        time === tf.value
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {tf.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-mono font-black text-slate-900 tracking-tighter">
                  $64,231.40
                </p>
                <p className="text-xs font-bold text-green-500">+2.41% (24h)</p>
              </div>
            </div>

            {/* TradingView Iframe */}
            <div className="h-[550px] w-full rounded-3xl overflow-hidden border border-slate-50">
              <iframe
                key={`${selected.sym}-${time}`}
                title="TradingView Chart"
                className="w-full h-full"
                src={`https://s.tradingview.com/widgetembed/?symbol=${selected.sym}&interval=${time}&theme=light&style=1&timezone=Etc%2FUTC&withdateranges=true&hide_side_toolbar=true&allow_symbol_change=false&save_image=false`}
              />
            </div>
          </div>
        </section>

        {/* RIGHT SIDE: TRADE PANEL */}
        <aside className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-slate-900 p-8 rounded-[40px] shadow-2xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest mb-2">
                Sizning Balansingiz
              </p>
              <h2 className="text-5xl font-black text-blue-500 mb-8">
                ${balance.toFixed(2)}
              </h2>

              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-xs text-slate-500 mb-1">
                    Leverage (Yelka)
                  </p>
                  <p className="font-bold">x100 Isolated</p>
                </div>
                <button
                  onClick={() => setModal({ open: true, type: "BUY" })}
                  className="w-full bg-green-500 hover:bg-green-600 py-5 rounded-2xl font-black text-xl shadow-lg shadow-green-500/20 transition-all active:scale-95"
                >
                  BUY / LONG
                </button>
                <button
                  onClick={() => setModal({ open: true, type: "SELL" })}
                  className="w-full bg-red-500 hover:bg-red-600 py-5 rounded-2xl font-black text-xl shadow-lg shadow-red-500/20 transition-all active:scale-95"
                >
                  SELL / SHORT
                </button>
              </div>
            </div>
            <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full"></div>
          </div>

          <div className="bg-white p-6 rounded-[32px] border border-slate-100">
            <h3 className="font-black text-slate-900 mb-4">
              Savdo Ma'lumotlari
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Komissiya:</span>
                <span className="font-bold text-slate-800">0.00%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Spread:</span>
                <span className="font-bold text-slate-800">0.2 pips</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* TRADE MODAL */}
      <AnimatePresence>
        {modal.open && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-10 rounded-[40px] w-full max-w-md shadow-2xl"
            >
              <h2
                className={`text-3xl font-black mb-2 ${
                  modal.type === "BUY" ? "text-green-500" : "text-red-500"
                }`}
              >
                {selected.name} {modal.type}
              </h2>
              <p className="text-slate-400 font-medium mb-8">
                Balansda: ${balance.toFixed(2)}
              </p>

              <div className="relative mb-8">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-300">
                  $
                </span>
                <input
                  type="number"
                  autoFocus
                  className="w-full bg-slate-50 border-2 border-slate-100 p-6 pl-12 rounded-3xl outline-none focus:border-blue-600 transition-all text-2xl font-black"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setModal({ open: false, type: "" })}
                  className="flex-1 py-4 font-bold text-slate-400"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={handleTrade}
                  className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-200"
                >
                  Orderni ochish
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
