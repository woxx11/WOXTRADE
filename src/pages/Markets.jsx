import React, { useState } from "react";
import { motion } from "framer-motion";

const Markets = () => {
  const [modal, setModal] = useState(null);

  const assets = [
    { name: "XAUUSD", price: "2034.45", change: "-0.45%" },
    { name: "USDJPY", price: "148.12", change: "+0.12%" },
    { name: "EURUSD", price: "1.0850", change: "+0.05%" },
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto bg-white min-h-screen">
      <h1 className="text-4xl font-black mb-2 text-slate-900">Bozorlar</h1>
      <p className="text-slate-400 mb-10 uppercase tracking-widest text-sm font-bold">
        Yangi marketlar qo'shilish jarayonida...
      </p>

      {/* TradingView Chart Integratsiyasi */}
      <div className="w-full h-[500px] bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 shadow-inner mb-12">
        <iframe
          title="Chart"
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d4d&symbol=FX%3AEURUSD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=light&style=1&timezone=Etc%2FUTC"
          className="w-full h-full border-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <div
            key={asset.name}
            className="bg-white p-8 rounded-[35px] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all border-b-4 border-b-blue-600"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-black text-slate-800">
                  {asset.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    asset.change.includes("+")
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {asset.change}
                </span>
              </div>
              <p className="text-4xl font-mono text-slate-900 mb-8">
                {asset.price}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setModal("BUY")}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-100"
              >
                BUY
              </button>
              <button
                onClick={() => setModal("SELL")}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-red-100"
              >
                SELL
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal oyna */}
      {modal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-10 rounded-[40px] w-full max-w-md"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              {modal} Order
            </h2>
            <p className="text-slate-500 mb-8">
              Qancha miqdorda pul tikmoqchisiz?
            </p>
            <input
              type="number"
              className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl mb-6 outline-none focus:border-blue-500 text-slate-900 font-bold text-xl"
              placeholder="$ 0.00"
            />
            <div className="flex gap-4">
              <button
                onClick={() => setModal(null)}
                className="flex-1 font-bold text-slate-400"
              >
                Bekor qilish
              </button>
              <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold">
                Tasdiqlash
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default Markets;
