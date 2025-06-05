import { ExternalLink } from "lucide-react";
import { FaTiktok, FaYoutube, FaPinterest } from "react-icons/fa";
import "./globals.css";

export default function CaffeinatedSarcasmCo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b08968] via-[#e6ccb2] to-[#f5ebe0] p-6 font-comic">
      <header className="text-center mb-10">
        <div className="w-28 h-28 mx-auto mb-4 bg-[#4e342e] rounded-full flex items-center justify-center text-white text-xl font-bold">
          Logo
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-[#4e342e]">Caffeinated Sarcasm Co.</h1>
        <p className="text-xl mt-2 text-[#6d4c41] italic">Bold sarcasm for tired humans ☕</p>
        <div className="flex justify-center gap-4 mt-4 text-[#4e342e] text-2xl">
          <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
        </div>
      </header>
      <section className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-lg text-[#4e342e]">We’re a bold, coffee-fueled design brand slinging sarcastic quotes and quirky illustrations...</p>
      </section>
      <footer className="text-center text-sm mt-10 text-[#5d4037]">
        © 2025 Caffeinated Sarcasm Co. All rights reserved.
      </footer>
    </div>
  );
}
