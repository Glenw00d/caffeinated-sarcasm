'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="p-10 text-center min-h-screen bg-yellow-100 text-brown-900 font-['Comic_Neue']">
      <h1 className="text-4xl font-bold mb-4">About the Company</h1>
      <p className="text-lg max-w-xl mx-auto leading-relaxed">
        <strong>Caffeinated Sarcasm Co.</strong> is a bold, coffee-fueled design brand that creates sarcastic, witty merch
        for tired people. We craft funny, edgy designs for those who live off caffeine and live life with a smirk.
        <br /><br />
        Whether it's a mug that says what you're thinking or a shirt that screams your mood, we're here to make sure you’re seen and caffeinated.
        <br /><br />
        ☕ Coffee. Sarcasm. Repeat.
      </p>

      <div className="mt-10">
        <Link href="/">
          <button className="px-6 py-2 bg-yellow-300 hover:bg-yellow-400 text-brown-900 font-semibold rounded">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
