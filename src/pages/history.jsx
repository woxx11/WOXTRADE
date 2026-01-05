import React from "react";

export default function History() {
  const history = [
    {
      id: 1,
      pair: "XAUUSD",
      type: "SELL",
      amount: "$4.00",
      result: "In Progress",
      color: "text-blue-500",
    },
    {
      id: 2,
      pair: "BTCUSD",
      type: "BUY",
      amount: "$1.00",
      result: "Completed",
      color: "text-green-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-24 px-4 md:px-10 text-slate-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black mb-10">Savdo Tarixi</h1>
        <div className="overflow-hidden rounded-[32px] border border-slate-100">
          <table className="w-full text-left bg-white">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-6 font-bold text-slate-500">Aktiv</th>
                <th className="p-6 font-bold text-slate-500">Tur</th>
                <th className="p-6 font-bold text-slate-500">Miqdor</th>
                <th className="p-6 font-bold text-slate-500">Holat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {history.map((h) => (
                <tr key={h.id} className="hover:bg-slate-50 transition-all">
                  <td className="p-6 font-bold">{h.pair}</td>
                  <td
                    className={`p-6 font-bold ${
                      h.type === "BUY" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {h.type}
                  </td>
                  <td className="p-6 font-mono font-bold">{h.amount}</td>
                  <td className={`p-6 font-bold ${h.color}`}>{h.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
