import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Phone, ArrowLeft } from 'lucide-react';
import MedicalShapesBackground from '../components/MedicalShapesBackground';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // initialize navigate

  return (
    <div className="min-h-[60vh] bg-white mt-1 relative">
      <MedicalShapesBackground />
      <section className="relative bg-transparent pt-12 pb-4 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* BACK LINK */}
          <Link
            to="/"
            className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[#09637E] font-medium shadow-sm hover:shadow-md hover:border-[#09637E] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>

          {/* LEFT SIDE IMAGE */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1">
            <img
              src="/doctor.png"
              alt="Doctor"
              className="w-68 h-68 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px]  object-contain"
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 order-1 lg:order-2 lg:mt-0 mt-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Create account
            </h2>
            <p className="mt-2 text-gray-600 max-w-md mx-auto lg:mx-0">
              To schedule your visit with our specialists
            </p>

            <form className="mt-6 space-y-4 max-w-md mx-auto lg:mx-0">
              
              {/* NAME FIELDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E]"
                />
              </div>

              {/* EMAIL FIELD */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E]"
                />
              </div>

              {/* PHONE FIELD */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full pl-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E]"
                />
              </div>

              {/* PASSWORD FIELD */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* TERMS */}
              <div className="flex gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                <span>I agree to Terms & Privacy Policy</span>
              </div>

              {/* CREATE ACCOUNT BUTTON */}
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="w-full bg-[#09637E] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(9,99,126,0.6)]"
              >
                Create Account
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-[#09637E] font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;