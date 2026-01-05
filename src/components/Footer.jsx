import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-white">WOXTRADE</h2>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Your Trading Partner. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
