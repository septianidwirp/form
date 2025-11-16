'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Guest';
  const firstName = name.split(' ')[0];

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/bg-mobile.svg')`,
      }}
    >
      {/* Gunakan media query tailwind untuk ubah background di desktop */}
      <style jsx>{`
        @media (min-width: 768px) {
          div[style] {
            background-image: url('/images/bg-thanks-dekstop.png') !important;
            background-size: cover;
          }
        }
      `}</style>

      <div className="w-full max-w-6xl px-4">
        {/* Desktop & Tablet Layout */}
        <div className="hidden md:flex flex-col items-center">
          {/* Text Content */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-purple-600 mb-2 uppercase">
              HI {firstName}!
            </h2>
            <h3 className="text-3xl font-medium text-gray-700 mb-6">
              welcome to
            </h3>
            
            <div className="mb-6">
              <h1 className="text-5xl font-bold text-black mb-1">
                MODENA
              </h1>
              <div className="text-7xl font-bold leading-tight">
                <span className="text-indigo-900" style={{ fontFamily: 'cursive' }}>Mall</span>
              </div>
              <div className="text-7xl font-bold leading-tight">
                <span className="text-purple-600" style={{ fontFamily: 'cursive' }}>to Mall</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Get ready to explore, experience, and enjoy a journey<br />
              full of style, innovation, and exclusive surprises.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col">
          {/* Text Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-600 mb-2 uppercase">
              HI {firstName}!
            </h2>
            <h3 className="text-2xl font-medium text-gray-700 mb-4">
              welcome to
            </h3>
            
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-black mb-1">
                MODENA
              </h1>
              <div className="text-5xl font-bold leading-tight">
                <span className="text-indigo-900" style={{ fontFamily: 'cursive' }}>Mall</span>
              </div>
              <div className="text-5xl font-bold leading-tight">
                <span className="text-purple-600" style={{ fontFamily: 'cursive' }}>to Mall</span>
              </div>
            </div>

            <p className="text-sm text-gray-700 px-4 leading-relaxed">
              Get ready to explore, experience, and enjoy a journey full of style, innovation, and exclusive surprises.
            </p>
          </div>

          {/* Mobile Product Images */}
          <div className="relative w-full h-72">
            {/* Washing Machine */}
            <div className="absolute bottom-0 left-[5%] w-28 h-32 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rice Cooker */}
            <div className="absolute bottom-8 left-[20%] w-24 h-24 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
                <div className="w-16 h-14 bg-black rounded-xl relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>

            {/* Vacuum Cleaner */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-48 bg-white rounded-full shadow-xl overflow-hidden flex flex-col items-center justify-end p-2">
              <div className="w-10 h-32 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full mb-2"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg"></div>
            </div>

            {/* Refrigerator */}
            <div className="absolute bottom-0 right-[5%] w-32 h-56 bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute top-[40%] left-0 right-0 h-1 bg-gray-600"></div>
              <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-600 rounded"></div>
              <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYou() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}