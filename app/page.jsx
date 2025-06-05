'use client';
import './globals.css';
import Image from 'next/image';
import Head from 'next/head';
import { FaTiktok, FaYoutube, FaPinterest } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Caffeinated Sarcasm Co.</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 text-brown-900 font-['Comic_Neue'] min-h-screen">
        <div className="text-center py-10 px-4">
          <Image
            src="/images/angry-coffee-cup.png"
            alt="Caffeinated Sarcasm Logo"
            width={80}
            height={80}
            className="mx-auto rounded-full mb-4"
          />

          <h1 className="text-5xl font-bold">Funny Quotes for Tired People</h1>
          <p className="text-2xl mt-2 font-semibold tracking-wide">COFFEE. SARCASM. REPEAT.</p>

          <div className="flex justify-center mt-4 space-x-6 text-3xl">
            <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-pink-600 transition-colors" />
            </a>
            <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-600 transition-colors" />
            </a>
            <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="hover:text-red-500 transition-colors" />
            </a>
          </div>

          <p className="max-w-xl mx-auto mt-6 text-lg">
            We're a bold, coffee-fueled design brand slinging sarcastic quotes and quirky illustrations on
            everything from t-shirts to snarky coloring books. Life is too short for boring merch — join us if
            you're tired, caffeinated, and gloriously unfiltered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 pb-10">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="font-bold text-2xl">Redbubble Shop</h2>
            <p className="mt-1">Funny & bold POD designs available on Redbubble</p>
            <a
              href="https://www.redbubble.com/people/Sarkadib/shop?ref=account-nav-dropdown"
              target="_blank"
              className="mt-3 inline-block px-6 py-2 bg-yellow-300 hover:bg-yellow-400 text-brown-900 font-semibold rounded"
            >
              Visit Redbubble
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="font-bold text-2xl">TeePublic Store</h2>
            <p className="mt-1">Explore hilarious tees and more on TeePublic</p>
            <a
              href="https://www.teepublic.com/user/caffeinated-sarcasm-co"
              target="_blank"
              className="mt-3 inline-block px-6 py-2 bg-yellow-300 hover:bg-yellow-400 text-brown-900 font-semibold rounded"
            >
              Visit TeePublic
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="font-bold text-2xl">Amazon KDP</h2>
            <p>Snarky coloring books and more on Amazon</p>
            <p className="text-gray-400 mt-2">Coming Soon</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="font-bold text-2xl">Amazon Merch</h2>
            <p>Premium merch directly via Amazon</p>
            <p className="text-gray-400 mt-2">Coming Soon</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center md:col-span-2">
            <h2 className="font-bold text-2xl">Printify</h2>
            <p>More sarcastic merch — coming soon!</p>
            <p className="text-gray-400 mt-2">Coming Soon</p>
          </div>
        </div>

        <div className="bg-white max-w-md mx-auto p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold">Stay caffeinated and sarcastic ☕</h3>
          <p className="text-sm mt-2">
            Subscribe to our newsletter to get exclusive updates, product drops, and free sarcasm.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-brown-900 font-semibold rounded-r"
            >
              Subscribe
            </button>
          </form>
        </div>

        <footer className="text-center text-sm mt-10 pb-6">
          © 2025 Caffeinated Sarcasm Co. All rights reserved.
        </footer>
      </div>
    </>
  );
}
