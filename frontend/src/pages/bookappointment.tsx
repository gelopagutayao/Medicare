import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Phone, FileText, ArrowLeft } from 'lucide-react';
import MedicalShapesBackground from '../components/MedicalShapesBackground';

const BookAppointment = () => {
  const specialties = [
    'General Physician',
    'Cardiologist',
    'Dermatologist',
    'Pediatrician',
    'Orthopedic',
    'Neurologist',
    'Ophthalmologist',
    'ENT Specialist'
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  return (
    <div className="min-h-screen bg-white shadow py-12 px-4 relative">
      <MedicalShapesBackground />
      <Link to="/" className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[#09637E] font-medium shadow-sm hover:shadow-md hover:border-[#09637E] transition-all duration-300">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      
      <div className="max-w-2xl mx-auto relative z-10">
        

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Book an Appointment</h2>
          <p className="text-gray-600 mt-2">Schedule your visit with our specialists</p>
        </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialty
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition bg-white">
                <option value="">Select specialty</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition bg-white">
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes (Optional)
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  placeholder="Describe your symptoms or concerns..."
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#09637E] focus:border-[#09637E] outline-none transition resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#09637E] text-white py-3 rounded-lg font-medium hover:bg-[#074d5f] transition duration-300 hover:shadow-[0_0_20px_rgba(9,99,126,0.6)]"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
