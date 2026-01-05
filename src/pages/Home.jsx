import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const news = [
    {
      id: 1,
      title: "XAUUSD tahlili",
      desc: "Oltin narxi Federal Rezerv qaroridan so'ng o'zgaruvchan bo'lib qolmoqda.",
      img: "https://images.unsplash.com/photo-1610373728347-c24b9b008d3e?q=80&w=500",
    },
    {
      id: 2,
      title: "Yangi bozorlar",
      desc: "Platformamizga tez kunda kriptovalyuta indekslari qo'shiladi.",
      img: "https://images.unsplash.com/photo-1639754390267-dc4661210c85?q=80&w=500",
    },
    {
      id: 3,
      title: "Dollar kuchi",
      desc: "AQSH dollari global bozorlarda o'z mavqeini mustahkamlamoqda.",
      img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=500",
    },
    {
      id: 4,
      title: "Ekspert maslahati",
      desc: "Bugungi savdo sessiyasi uchun risklarni boshqarish rejasi.",
      img: "https://images.unsplash.com/photo-1642388691919-41071276063b?q=80&w=500",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Professional Trading <br /> Endi Osonlashdi.
            </h1>
            <p className="text-slate-300 text-lg mb-8">
              WOXTRADE bilan dunyo bozorlarini tahlil qiling va o'z
              strategiyalaringizni real vaqtda sinab ko'ring.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold transition-all">
                Boshlash
              </button>
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 font-bold">
                Balans: $5.00
              </div>
            </div>
          </div>
          <div className="absolute right-[-100px] bottom-[-50px] opacity-20 text-[200px] font-black italic">
            TRADE
          </div>
        </motion.div>
      </section>

      {/* Market Stats Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["BTC +2.4%", "GOLD -0.4%", "EURUSD +0.1%", "NASDAQ +1.2%"].map(
            (stat, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center justify-between"
              >
                <span className="font-bold text-slate-700">
                  {stat.split(" ")[0]}
                </span>
                <span
                  className={`font-bold ${
                    stat.includes("+") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.split(" ")[1]}
                </span>
              </div>
            )
          )}
        </div>
      </section>

      {/* News Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Bozor Yangiliklari
          </h2>
          <button className="text-blue-600 font-bold">
            Hammasini ko'rish →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((n) => (
            <motion.div key={n.id} whileHover={{ y: -10 }} className="group">
              <div className="overflow-hidden rounded-3xl mb-4 h-48 border border-slate-100 shadow-sm">
                <img
                  src={n.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-duration-500"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {n.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{n.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
