import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import MedicalShapesBackground from '../components/MedicalShapesBackground';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative">
      <MedicalShapesBackground />
      <Link to="/" className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[#09637E] font-medium shadow-sm hover:shadow-md hover:border-[#09637E] transition-all duration-300">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
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

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-[#09637E] border-gray-300 rounded focus:ring-[#09637E]" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#09637E] hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#09637E] text-white py-3 rounded-lg font-medium hover:bg-[#074d5f] transition duration-300 hover:shadow-[0_0_20px_rgba(9,99,126,0.6)]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#09637E] font-medium hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
