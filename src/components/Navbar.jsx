import { Link, useNavigate, useLocation } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Markets", path: "/markets" },
    { name: "Ideas", path: "/ideas" },
    { name: "History", path: "/history" },
    { name: "Wallet", path: "/wallet" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter text-slate-900">
          WOX<span className="text-blue-600">TRADE</span>
        </h1>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-all hover:text-blue-600 ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-slate-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={logout}
            className="ml-4 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-xl text-sm font-bold transition-all border border-red-100"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
