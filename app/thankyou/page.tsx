'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Guest';
  const firstName = name.split(' ')[0];

  return (
    <div className="min-h-screen relative">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <div className="hidden md:block w-full h-full">
          <Image
            src="/images/bg-thanks-dekstop.png"
            alt="Desktop Background"
            width={1440}
            height={1024}
            className="w-full h-auto min-h-screen"
            priority
          />
        </div>

        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0 z-0">
          <Image
            src="/bg-mobile.svg"
            alt="Mobile Background"
            width={375}
            height={812}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-full max-w-6xl px-4 mx-auto">
          {/* Desktop & Tablet Layout */}
          <div className="hidden md:flex flex-col items-center min-h-screen justify-center">
            {/* Text Content */}
            <div className="text-center mb-16">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingTop: '50px',
                }}
              >
                <h2
                  style={{
                    width: '154px',
                    height: '38px',
                    fontFamily: 'Modena Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: '32px',
                    letterSpacing: '-3%',
                    color: '#8B4E9A',
                    opacity: 1,
                    textAlign: 'center',
                    margin: 0,
                  }}
                >
                  HI {firstName}!
                </h2>

                <h3
                  style={{
                    width: '200px',
                    fontFamily: 'Modena Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: '32px',
                    letterSpacing: '-3%',
                    color: '#8B4E9A',
                    opacity: 1,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    margin: '10px 0 0 0',
                  }}
                >
                  welcome to
                </h3>
              </div>

              <div className="mb-6">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '-50px',
                    marginBottom: '1rem',
                  }}
                >
                  <Image
                    src="/logo.svg"
                    alt="MODENA Logo"
                    width={175}
                    height={45.21}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                  }}
                >
                  <Image
                    src="/maltomal.svg"
                    alt="Maltomal Logo"
                    width={208.4}
                    height={156.1}
                  />
                </div>
              </div>

              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Get ready to explore, experience, and enjoy a journey
                <br />
                full of style, innovation, and exclusive surprises.
              </p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col">
            <div className="relative w-full flex flex-col items-center justify-start pt-6 pb-12">
              <h2 className="text-[32px] font-semibold text-[#8B4E9A] mb-2 text-center">
                HI {firstName}!
              </h2>
              <h3 className="text-[32px] font-semibold text-[#8B4E9A] mb-4 text-center">
                welcome to
              </h3>
              <Image src="/logo.svg" alt="MODENA Logo" width={175} height={45} className="mb-4" />
              <Image src="/maltomalmobile.svg" alt="Maltomal Logo" width={208} height={156} className="mb-6" />
              <p className="text-[20px] font-normal text-[#2E2E2E] leading-relaxed text-center max-w-[320px]">
                Get ready to explore, experience, and enjoy a journey full of style, innovation, and exclusive surprises.
              </p>
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
