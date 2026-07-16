import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setIsLoading(true);

    // Simulate database lookup / API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1800);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-[#0F0F15]/95 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(230,175,46,0.15)] z-10 animate-scaleUp flex flex-col">
        {/* Decorative Top Accent Light */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E6AF2E] to-transparent" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center p-10 py-16 space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#E6AF2E]/10 border border-[#E6AF2E] flex items-center justify-center text-[#E6AF2E] animate-pulse">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight">
                Access Granted
              </h3>
              <p className="text-sm text-gray-400 max-w-xs">
                Welcome to Gebixcuts Client Portal. Synchronizing your cinematic projects...
              </p>
            </div>
            <div className="w-12 h-1 bg-[#E6AF2E] rounded-full animate-widthGrow" />
          </div>
        ) : (
          /* Main Auth Form */
          <div className="p-8 flex flex-col">
            {/* Logo Header */}
            <div className="flex flex-col items-center text-center mt-4 mb-8">
              <img 
                src="/logo.svg" 
                alt="Gebixcuts Logo" 
                className="h-12 w-auto object-contain mb-3" 
              />
              <p className="text-xs text-[#E6AF2E] uppercase font-bold tracking-[0.2em]">
                {mode === 'login' ? 'Client & Student Portal' : 'Create Academy Account'}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-xs text-red-400 font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#161622] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E6AF2E]/80 transition-all font-sans"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#161622] border border-white/10 rounded-xl py-3 pl-11 pr-11 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E6AF2E]/80 transition-all font-sans"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                  </button>
                </div>
              </div>

              {mode === 'login' && (
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:text-white">
                    <input type="checkbox" className="rounded border-white/10 bg-white/5 text-[#E6AF2E] focus:ring-0 focus:ring-offset-0" />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="text-[#E6AF2E] hover:underline font-semibold">
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E6AF2E] to-[#F5C542] text-black font-heading font-extrabold text-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(230,175,46,0.25)] disabled:opacity-55 disabled:cursor-not-allowed mt-6"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{mode === 'login' ? 'Sign In to Portal' : 'Create Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Social Authentication */}
            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0F0F15] px-3 text-gray-500 font-bold tracking-wider">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button 
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    setIsSuccess(true);
                    setTimeout(() => {
                      setIsSuccess(false);
                      onClose();
                    }, 1800);
                  }, 1200);
                }}
                className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-white transition-all active:scale-[0.98]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.63 5.63 0 0 1 8.27 12.89a5.63 5.63 0 0 1 5.72-5.629c1.47 0 2.82.52 3.88 1.488l3.19-3.19A10.05 10.05 0 0 0 13.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.77 0 9.6-4.06 9.6-9.79 0-.66-.08-1.3-.23-1.92H12.24Z" />
                </svg>
                <span>Google</span>
              </button>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    setIsSuccess(true);
                    setTimeout(() => {
                      setIsSuccess(false);
                      onClose();
                    }, 1800);
                  }, 1200);
                }}
                className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-white transition-all active:scale-[0.98]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33Z" />
                </svg>
                <span>Apple</span>
              </button>
            </div>

            <div className="mt-8 text-center text-xs">
              <span className="text-gray-500">
                {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="text-[#E6AF2E] hover:underline font-extrabold"
              >
                {mode === 'login' ? 'Create Account' : 'Sign In'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
