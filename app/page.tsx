import RegistrationForm from '@/components/RegistrationForm';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0 -z-10">
          <Image
            src="/images/Desktop.png"
            alt="Desktop Background"
            width={1440}
            height={1024}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Desktop & Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-2 min-h-screen">
          {/* Left Side - Product Images */}
          <div className="relative flex items-center justify-center p-8 overflow-hidden">
            {/* Mall to Mall Logo */}
            <div className="absolute" style={{ left: "75px", top: "40px" }}>
              <img
                src="/maltomal.svg"
                alt="Mall to Mall Logo"
                style={{ width: "270.46px", height: "186px" }}
              />
            </div>

            {/* Teks Lokasi */}
            <div
              className="absolute text-gray-700 leading-tight"
              style={{
                left: "290.53px",
                top: "190.46px",
                width: "232.9px",
                height: "66.54px",
              }}
            >
              <p className="text-sm font-bold">at Senayan City LT</p>
              <p className="text-sm font-bold">GF Lobby East</p>
            </div>
          </div>
          {/* Right Side - Registration Form */}
          <div className="flex flex-col items-center justify-center p-8 lg:p-12">
            <div className="w-full max-w-md">
              <div className="text-right mb-8">
                <Image 
                  src="/logo.svg" 
                  alt="MODENA Logo" 
                  width={160} 
                  height={60} 
                  className="inline-block"
                  priority
                />
              </div>
              
             {/* Wrapper center untuk heading + periode */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2
              style={{
                margin: 0,
                fontFamily: '"Modena Sans", sans-serif',
                fontSize: "48px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#40415B",
                WebkitTextStroke: "0.9px #000",
                lineHeight: "1.2",
                textShadow: "0px 2px 0px rgba(0,0,0,1), 0px 6px 12px rgba(0,0,0,0.18)",
                display: "inline-block",
              }}
            >
              Register to get
              <br />
              special discounts
            </h2>

            {/* Periode — satu baris, tepat di bawah heading, centered */}
            <p
              style={{
                marginTop: "26px",
                fontFamily: '"Modena Sans", sans-serif',
                fontWeight: 600,
                fontSize: "18px",
                letterSpacing: "-0.01em",
                color: "#7E4F98",
                WebkitTextStroke: "0.8px #000",
                textShadow: "0px 1px 2px rgba(0,0,0,0.35)",
                textAlign: "center",
                margin: 0,
                display: "inline-block",
              }}
            >
              Periode 13 Januari - 12 Februari 2025
            </p>
          </div>

              <div className="flex justify-center mt-8">
                <Image
                  src="/discount.svg"
                  alt="Discount Promo"
                  width={535}
                  height={94}
                  priority
                  className="mx-auto"
                />
              </div>

              <div className="flex flex-col items-center mt-10">
                <h3
                  style={{
                    fontFamily: '"Modena Sans", sans-serif',
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  Enter your phone number
                </h3>

                <p
                    style={{
                      fontFamily: '"Modena Sans", sans-serif',
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "120%",
                      letterSpacing: "-0.005em",
                      color: "#3E3E3E",
                      textAlign: "center",
                      width: "396px",
                      marginTop: "8px", 
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              
              <RegistrationForm />
              
              <div
                style={{
                  position: 'absolute',
                  bottom: '-70px',  
                  right: '100px',   
                  width: '100px',
                  height: '31px',
                }}
              >
                <Image src="/logofooter.svg" alt="Footer Logo" width={100} height={31} />
              </div>
      
            </div>
          </div>
        </div>


  {/* Mobile Layout */}
<div className="md:hidden relative w-full min-h-screen overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
  {/* Background */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/bg-mobile.svg"
      alt="Mobile Background"
      width={375}
      height={1200}
      className="w-full h-auto"
      priority
    />
  </div>

  {/* Content */}
  <div className="flex flex-col items-center pt-6 pb-12 min-h-screen">
    {/* MODENA Logo */}
    <div className="w-[127.95px] h-[32.87px] mb-8" style={{ marginTop: '24px' }}>
      <Image
        src="/logo.svg"
        alt="MODENA Logo"
        width={128}
        height={33}
        style={{ objectFit: 'contain' }}
      />
    </div>

    {/* Maltomal Logo */}
    <div className="w-[126px] h-[93px] mb-6">
      <Image
        src="/maltomal.svg"
        alt="Maltomal Logo"
        width={126}
        height={93}
        style={{ objectFit: 'contain' }}
      />
    </div>

    {/* Register Text */}
    <h2
  className="text-center mb-2 whitespace-nowrap"
  style={{
    fontFamily: 'Modena Sans, sans-serif',
    fontWeight: 700,
    fontSize: '22px',
    color: '#40415B',
  }}
>
  Register to get special discounts
</h2>


    {/* Periode Text */}
    <p
      className="text-center mb-6"
      style={{
        fontFamily: 'Modena Sans, sans-serif',
        fontWeight: 600,
        fontSize: '16px',
        letterSpacing: '-1%',
        color: '#7E4F98',
        width: '353px',
        height: '19px',
      }}
    >
      Periode 13 Januari - 12 Februari 2025
    </p>

    {/* Registration Form */}
    <div className="w-full px-6">
      <RegistrationForm />
    </div>
  </div>
</div>

      </div>
    </div>
  );
}