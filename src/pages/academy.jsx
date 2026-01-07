import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Trading o'zi nima?",
    a: "Trading — bu turli xil moliyaviy aktivlarni (valyuta, oltin, kripto) narx o'zgarishidan foyda olish maqsadida sotib olish va sotishdir.",
  },
  {
    q: "Qancha pul bilan boshlash kerak?",
    a: "WOXTRADE-da sizga boshlang'ich $5 beriladi. Real savdo uchun esa o'zingizga qulay summani (masalan $10) kiritishingiz mumkin.",
  },
  {
    q: "Risklar qanchalik yuqori?",
    a: "Trading yuqori riskli soha. Faqat yo'qotishga tayyor bo'lgan pulingiz bilan savdo qiling.",
  },
  {
    q: "Leverage (Yelka) nima?",
    a: "Bu brokerdan qarz olib, o'z pulingizdan ko'proq hajmda savdo qilish imkoniyati.",
  },
  {
    q: "Spread nima?",
    a: "Sotib olish (Ask) va sotish (Bid) narxlari o'rtasidagi farq.",
  },
  {
    q: "Texnik tahlil nima?",
    a: "O'tmishdagi narxlar va grafiklar asosida kelajakni bashorat qilish.",
  },
  {
    q: "Fundamental tahlil nima?",
    a: "Iqtisodiy yangiliklar, foiz stavkalari va siyosat asosida tahlil qilish.",
  },
  {
    q: "Scalping nima?",
    a: "Juda qisqa vaqt ichida (bir necha soniya yoki daqiqa) ko'plab kichik foyda olish strategiyasi.",
  },
  {
    q: "Stop-Loss nima?",
    a: "Yo'qotishlarni cheklash uchun avtomatik o'rnatiladigan buyruq.",
  },
  {
    q: "Take-Profit nima?",
    a: "Foydani avtomatik tarzda qayd etish buyrug'i.",
  },
];

export default function Academy() {
  const [open, setOpen] = useState(null);

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black text-slate-900 mb-8 text-center tracking-tighter">
          Trading Tushunchasi
        </h1>
        <div className="prose prose-slate max-w-none mb-20 text-slate-600 text-lg leading-relaxed">
          <p>
            Trading — bu san'at va intizom uyg'unligi. Muvaffaqiyatli trader
            bo'lish uchun siz nafaqat bozorlarni, balki o'z his-tuyg'ularingizni
            ham boshqarishni o'rganishingiz kerak. WOXTRADE akademiyasida biz
            sizga asosiy tushunchalarni sodda tilda tushuntiramiz.
          </p>
        </div>

        <h2 className="text-3xl font-black text-slate-800 mb-10 text-center uppercase tracking-widest">
          Eng ko'p beriladigan savollar
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-8 text-left flex justify-between items-center font-bold text-xl text-slate-800"
              >
                {f.q}
                <span className="text-blue-600">{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="px-8 pb-8 text-slate-500 text-lg leading-relaxed"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
