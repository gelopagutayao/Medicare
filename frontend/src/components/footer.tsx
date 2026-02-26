import { FaFacebookF, FaInstagram, FaTiktok, FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <img src="/LOGO.png" alt="Medicare Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold"><span className="text-[#09637E]">Medi</span>care.</span>
          </div>
          <p className="text-sm font-light">Expert care delivered to your home.</p>
          <div className="flex gap-3 mt-2">
            <FaFacebookF className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer transition" />
            <FaInstagram className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer transition" />
            <FaTiktok className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer transition" />
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex gap-16">
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-5 text-sm">
              <li>Telehealth</li>
              <li>Primary Care</li>
              <li>Mental Health</li>
              <li>Pharmacy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-5 text-sm">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-semibold mb-2">Newsletter/App</h3>
          <ul className="space-y-4 text-sm mb-2">
            <li>Stay Healthy</li>
            <li>Contact Us</li>
          </ul>
          <input
            type="text"
            placeholder="Search...."
            className="border border-gray-300 rounded px-2 py-1 text-sm w-full md:w-48"
          />
          <div className="flex gap-2 mt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-md cursor-pointer hover:bg-gray-700 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <span className="text-xs">Google Play</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-md cursor-pointer hover:bg-gray-700 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-xs">App Store</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <p>© 2026 Medicare. All rights reserved.</p>
        <div className="flex items-center justify-end gap-2">
          <span>Developer: Geylouu |</span>
          <FaReact className="w-4 h-4 text-[#61DBFB]" />
          <SiVite className="w-4 h-4 text-[rgb(242,141,242)]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
