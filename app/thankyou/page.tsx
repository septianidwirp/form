import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Desktop & Tablet Layout */}
        <div className="hidden md:block text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">MODENA</h2>
          </div>
          
          <h1 className="text-5xl font-bold text-purple-600 mb-2" style={{ fontFamily: 'cursive' }}>
            Mall
          </h1>
          <h1 className="text-5xl font-bold text-purple-500 mb-8" style={{ fontFamily: 'cursive' }}>
            to Mall
          </h1>
          
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-purple-600 mb-4">
              HI ELISA!
            </h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              welcome to
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto">
              Get ready to explore, experience, and enjoy a journey full of style, innovation, and exclusive surprises.
            </p>
            
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
            >
              Kembali ke Beranda
            </Link>
          </div>
          
          {/* Product Images */}
          <div className="relative h-64 mx-auto max-w-3xl">
            <div className="absolute bottom-0 left-1/4 w-24 h-28 bg-gray-200 rounded-2xl shadow-lg"></div>
            <div className="absolute bottom-0 left-1/3 w-32 h-40 bg-gray-300 rounded-2xl shadow-lg"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-36 bg-gray-400 rounded-full shadow-lg"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-56 bg-gray-400 rounded-2xl shadow-lg"></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-6 mb-6">
            <div className="text-right mb-4">
              <h2 className="text-2xl font-bold text-gray-900">MODENA</h2>
            </div>
            
            <h1 className="text-4xl font-bold text-purple-600 mb-1" style={{ fontFamily: 'cursive' }}>
              Mall
            </h1>
            <h1 className="text-4xl font-bold text-purple-500 mb-6" style={{ fontFamily: 'cursive' }}>
              to Mall
            </h1>
            
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-purple-600 mb-2">
                HI ELISA!
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                welcome to
              </h3>
              
              <p className="text-sm text-gray-600 mb-6">
                Get ready to explore, experience, and enjoy a journey full of style, innovation, and exclusive surprises.
              </p>
            </div>
          </div>
          
          <Link 
            href="/"
            className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg text-center"
          >
            Kembali ke Beranda
          </Link>
          
          {/* Mobile Product Images */}
          <div className="mt-8 relative h-40">
            <div className="absolute bottom-0 left-0 w-16 h-20 bg-gray-200 rounded-2xl"></div>
            <div className="absolute bottom-0 left-20 w-20 h-28 bg-gray-300 rounded-2xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-28 bg-gray-400 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-28 h-40 bg-gray-400 rounded-2xl"></div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">M care 15.007.15</p>
        </div>
      </div>
    </div>
  );
}