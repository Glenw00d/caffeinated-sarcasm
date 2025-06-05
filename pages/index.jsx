import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-yellow-50 text-brown-800 font-sans min-h-screen">
      <div className="text-center py-10 px-4">
        <Image
          src="/images/angry-coffee-cup.png"
          alt="Caffeinated Sarcasm Logo"
          width={80}
          height={80}
          className="mx-auto rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold">Funny Quotes for Tired People</h1>
        <p className="text-lg mt-2">COFFEE. SARCASM. REPEAT.</p>

        <p className="max-w-xl mx-auto mt-6 text-md">
          We're a bold, coffee-fueled design brand slinging sarcastic quotes and quirky illustrations on everything from t-shirts to snarky coloring books. Life is too short for boring merch — join us if you're tired, caffeinated, and gloriously unfiltered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4 pb-10">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="font-bold text-xl">Redbubble Shop</h2>
          <p>Funny & bold POD designs available on Redbubble</p>
          <a href="https://www.redbubble.com/people/YOURSHOP" target="_blank" className="mt-2 inline-block px-4 py-2 border border-brown-800 text-brown-800 hover:bg-brown-100">Visit Redbubble</a>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="font-bold text-xl">TeePublic Store</h2>
          <p>Explore hilarious tees and more on TeePublic</p>
          <a href="https://www.teepublic.com/user/YOURSHOP" target="_blank" className="mt-2 inline-block px-4 py-2 border border-brown-800 text-brown-800 hover:bg-brown-100">Visit TeePublic</a>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="font-bold text-xl">Amazon KDP</h2>
          <p>Snarky coloring books and more on Amazon</p>
          <p className="text-gray-400">Coming Soon</p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="font-bold text-xl">Amazon Merch</h2>
          <p>Premium merch directly via Amazon</p>
          <p className="text-gray-400">Coming Soon</p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center md:col-span-2">
          <h2 className="font-bold text-xl">Printify</h2>
          <p>More sarcastic merch — coming soon!</p>
          <p className="text-gray-400">Coming Soon</p>
        </div>
      </div>

      <div className="bg-white max-w-md mx-auto p-6 rounded shadow text-center">
        <h3 className="text-xl font-semibold">Stay caffeinated and sarcastic ☕</h3>
        <p className="text-sm mt-2">Subscribe to our newsletter to get exclusive updates, product drops, and free sarcasm.</p>
        <form className="mt-4 flex">
          <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 border border-gray-300 rounded-l" />
          <button type="submit" className="px-4 py-2 bg-brown-800 text-white rounded-r">Subscribe</button>
        </form>
      </div>

      <footer className="text-center text-sm mt-10 pb-6">
        © 2025 Caffeinated Sarcasm Co. All rights reserved.
      </footer>
    </div>
  );
}
