import React from "react";

export default function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user") || '{"email":"User","password":"***"}'
  );

  return (
    <div className="w-full min-h-screen bg-slate-50 pt-32 px-6 flex justify-center text-slate-900">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-[40px] p-12 shadow-xl shadow-slate-200/50 border border-white">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-4xl font-black text-white mb-6">
              {user.email[0].toUpperCase()}
            </div>
            <h1 className="text-3xl font-black mb-1 text-slate-900">
              {user.email}
            </h1>
            <p className="text-slate-400 mb-10 tracking-widest uppercase text-xs font-bold">
              VIP TRADER
            </p>

            <div className="w-full grid grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-slate-400 text-xs font-bold uppercase mb-2">
                  Username
                </p>
                <p className="text-slate-900 font-bold">
                  {user.email.split("@")[0]}
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-slate-400 text-xs font-bold uppercase mb-2">
                  Parol
                </p>
                <p className="text-slate-900 font-bold">••••••••</p>
              </div>
            </div>

            <button className="w-full py-4 bg-red-50 text-red-500 rounded-2xl font-bold hover:bg-red-500 hover:text-white transition-all">
              Tizimdan chiqish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
