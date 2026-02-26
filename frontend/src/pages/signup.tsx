import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 relative">
      <Link to="/" className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[#09637E] font-medium shadow-sm hover:shadow-md hover:border-[#09637E] transition-all duration-300 z-10">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
        <div className="hidden md:block relative">
          <img 
            src="/hero1.png" 
            alt="Doctor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09637E]/80 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold">Your Health,</h2>
            <h2 className="text-3xl font-bold">Our Priority</h2>
          </div>
        </div>

        <div className="bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Book an Appointment</h2>
          <p className="text-gray-500 mb-6">Schedule your visit with our specialists</p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="w-4 h-4 mt-1 text-[#09637E] border-gray-300 rounded focus:ring-[#09637E]" />
              <span className="text-sm text-gray-600">I agree to the Terms of Service and Privacy Policy</span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#09637E] text-white py-3 rounded-lg font-semibold hover:bg-[#074d5f] transition duration-300 hover:shadow-lg"
            >
              Book Appointment
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/signin" className="text-[#09637E] font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
