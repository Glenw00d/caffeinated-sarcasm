'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DesignsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="p-10 text-center min-h-screen bg-yellow-100 text-brown-900 font-['Comic_Neue']">
      <h1 className="text-4xl font-bold mb-4">My Designs</h1>
      <p className="text-lg mb-6">Upload and preview your design files below.</p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      {selectedImage && (
        <div className="mt-4">
          <p className="font-semibold mb-2">Preview:</p>
          <Image
            src={selectedImage}
            alt="Uploaded design preview"
            width={300}
            height={300}
            className="mx-auto rounded shadow-lg"
          />
        </div>
      )}

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
