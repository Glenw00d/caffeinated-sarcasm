'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function DesignsPage() {
  const designImages = [
    '/designs/404-errormotivation.png',
    '/designs/introvert-charging.png',
    '/designs/mentally-at-home.png',
    // További képeket ide vehetsz fel
  ];

  return (
    <div className="p-10 text-center min-h-screen bg-yellow-100 text-brown-900 font-['Comic_Neue']">
      <h1 className="text-4xl font-bold mb-4">My Designs</h1>
      <p className="text-lg mb-6">Here are some of our current design pieces:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {designImages.map((src, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <Image
              src={src}
              alt={`Design ${index + 1}`}
              width={300}
              height={300}
              className="mx-auto rounded"
            />
          </div>
        ))}
      </div>

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
