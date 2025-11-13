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
      router.push('/thankyou');
    } else {
      setFormData({ name: '', phone: '' });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400 transition-all"
            required
          />
        </div>
        
        <div>
          <input
            type="tel"
            placeholder="Input your phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400 transition-all"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Memproses...
            </span>
          ) : (
            <>
              Daftar Sekarang
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </>
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