import { Link } from 'react-router-dom';
import { Star, ArrowRight } from "lucide-react";
import stethoscope from '../assets/icons/stethoscope.png';
import signature from '../assets/icons/signature.png';
import MedicalShapesBackground from '../components/MedicalShapesBackground';

const Heropage = () => {
  return (
    <div className="min-h-[60vh] bg-white mt-1 relative">
      <MedicalShapesBackground />
      <section className="relative bg-transparent pt-12 pb-4 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* LEFT SIDE */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1">
            <img 
              src="/hero1.png" 
              alt="Doctor" 
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] object-contain" 
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 order-1 lg:order-2 lg:mt-0 mt-6">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Expert care, from <br className="hidden sm:block" /> the comfort of your couch
            </h1>

            <p className="mt-4 sm:mt-5 text-gray-600 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
              Connect with certified specialists in under 15 minutes through our
              secure, HIPAA-compliant platform
            </p>

            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/book-appointment" className="bg-[#09637E] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(9,99,126,0.6)]">
                <img src={stethoscope} alt="Stethoscope" className="w-5 h-5 inline mr-2 brightness-0 invert" /> Book Appointment
              </Link>

              <Link to="/signup" className="bg-[#09637E] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(9,99,126,0.6)]">
                <img src={signature} alt="Signature" className="w-5 h-5 inline mr-2 brightness-0 invert" /> Sign up
              </Link>
            </div>

            <div className="mt-7 sm:mt-9.25 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
              <div className="flex items-center border-[#09637E] gap-2 border px-4 sm:px-6 py-2 rounded-lg bg-white shadow-sm text-xs sm:text-sm">
                <Star size={16} className="text-[#09637E]" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>

              <div className="flex items-center gap-2 border border-[#09637E] px-3 sm:px-4 py-2 rounded-lg bg-white shadow-sm">
                <span className="text-xs sm:text-sm font-medium">
                  Over 10,000+ happy patients
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-teal-700 transition"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>
   
  </div>
  );
};

export default Heropage;
