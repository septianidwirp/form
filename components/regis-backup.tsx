'use client';

import { useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  phone: string;
}

interface ModalState {
  isOpen: boolean;
  type: 'success' | 'error';
  message: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<ModalState>({ 
    isOpen: false, 
    type: 'success', 
    message: '' 
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setModal({
          isOpen: true,
          type: 'success',
          message: data.message
        });
      } else {
        setModal({
          isOpen: true,
          type: 'error',
          message: data.message
        });
      }
    } catch (error) {
      setModal({
        isOpen: true,
        type: 'error',
        message: 'Terjadi kesalahan, silakan coba lagi'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    const currentType = modal.type;
    setModal({ isOpen: false, type: 'success', message: '' });
    
    if (currentType === 'success') {
      // Pass nama via URL parameter
      router.push(`/thankyou?name=${encodeURIComponent(formData.name)}`);
    } else {
      setFormData({ name: '', phone: '' });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-8 space-y-4">
        {/* Input Nama */}
        <div className="w-[345px]">
          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full h-[47px] pl-6 pr-6 rounded-full border border-gray-200 bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 shadow-sm"
          />
        </div>

        {/* Input Nomor Telepon */}
        <div className="w-[345px]">

          <input
  type="tel"
  name="phone"
  placeholder="Input your phone number"
  value={formData.phone}
  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
  required
  pattern="[0-9]{9,13}"
  title="Masukkan nomor telepon 9–13 digit angka tanpa spasi atau simbol"
  className="w-full h-[47px] pl-6 pr-6 rounded-full border border-gray-200 bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 shadow-sm"
          />
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-[345px] h-[47px] bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Memproses...
            </span>
          ) : (
            "Daftar Sekarang"
          )}
        </button>
      </form>
      
      <Modal
        isOpen={modal.isOpen}
        onClose={handleCloseModal}
        type={modal.type}
        message={modal.message}
      />
    </>
  );
}