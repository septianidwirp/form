import RegistrationForm from '@/components/RegistrationForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:grid md:grid-cols-2 min-h-screen">
        {/* Left Side - Product Images */}
        <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute top-8 left-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-purple-600 mb-2" style={{ fontFamily: 'cursive' }}>
              Mall
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold text-purple-500 -mt-2" style={{ fontFamily: 'cursive' }}>
              to Mall
            </h1>
            <p className="text-sm text-gray-700 mt-2">at Senayan City LT</p>
            <p className="text-sm text-gray-700">GF Lobby East</p>
          </div>
          
          {/* Product Images - Positioned like in design */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Rice Cooker - Top Left */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-3xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-gray-200 rounded-2xl"></div>
            </div>
            
            {/* Washing Machine - Bottom Left */}
            <div className="absolute bottom-1/4 left-1/4 w-40 h-48 bg-white rounded-3xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <div className="w-32 h-40 bg-gray-200 rounded-2xl"></div>
            </div>
            
            {/* Vacuum - Center */}
            <div className="absolute top-1/3 left-1/2 w-24 h-40 bg-blue-100 rounded-3xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-32 bg-gray-300 rounded-full"></div>
            </div>
            
            {/* Refrigerator - Right */}
            <div className="absolute top-1/4 right-1/4 w-48 h-64 bg-white rounded-3xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <div className="w-40 h-56 bg-gray-400 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex flex-col items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            <div className="text-right mb-8">
              <h2 className="text-3xl font-bold text-gray-900">MODENA</h2>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Register to get
            </h2>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              special discounts
            </h2>
            
            <p className="text-purple-600 font-medium mb-8">
              Periode 13 Januari - 12 Februari 2025
            </p>
            
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Discount</p>
                  <p className="text-gray-600 text-sm">Up to</p>
                </div>
                <p className="text-6xl font-bold text-purple-600">25%</p>
                <div className="border-l-2 border-gray-300 pl-4">
                  <p className="text-sm text-gray-600">Buy <span className="text-4xl font-bold text-purple-600">3</span> Get <span className="text-4xl font-bold text-purple-600">25%</span> Disc.</p>
                  <p className="text-xs text-gray-500 mt-1">+ promo larga khusus Cookware</p>
                  <p className="text-xs text-gray-500">2K 240S CMWH harga Rp 98.000</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Enter your phone number
            </h3>
            
            <p className="text-sm text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            
            <RegistrationForm />
            
            <div className="mt-6 text-center text-gray-500">
              <p className="mb-4">or</p>
              <button className="w-full bg-white border-2 border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Register with Google
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen flex flex-col">
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 pb-12">
          <div className="text-right mb-4">
            <h2 className="text-2xl font-bold text-gray-900">MODENA</h2>
          </div>
          
          <h1 className="text-4xl font-bold text-purple-600 mb-1" style={{ fontFamily: 'cursive' }}>
            Mall
          </h1>
          <h1 className="text-4xl font-bold text-purple-500 -mt-1 mb-4" style={{ fontFamily: 'cursive' }}>
            to Mall
          </h1>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Register to get special discounts
          </h2>
          
          <p className="text-purple-600 font-medium mb-6">
            Periode 13 Januari - 12 Februari 2025
          </p>
        </div>

        <div className="flex-1 bg-white -mt-6 rounded-t-3xl p-6">
          <RegistrationForm />
          
          <div className="mt-6 text-center text-gray-500">
            <p className="mb-4">or</p>
            
            <button className="w-full bg-white border-2 border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center mb-3">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Register with Google
            </button>
            
            <button className="w-full bg-white border-2 border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center">
              <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Register with Facebook
            </button>
          </div>

          {/* Mobile Product Images */}
          <div className="mt-8 relative h-48">
            <div className="absolute bottom-0 left-0 w-20 h-24 bg-gray-200 rounded-2xl"></div>
            <div className="absolute bottom-0 left-24 w-24 h-32 bg-gray-300 rounded-2xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-32 bg-gray-400 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-48 bg-gray-400 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}