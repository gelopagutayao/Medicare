import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <img src="/src/assets/LOGO.png" alt="Medicare Logo" className="w-10 h-10" />
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
            <img src="/google-play-badge.png" alt="Google Play" className="h-8 cursor-pointer" />
            <img src="/app-store-badge.png" alt="App Store" className="h-8 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <p>© 2026 Medicare. All rights reserved.</p>
<p className="text-right flex items-center justify-end space-x-2">
            Developer: Geylouu |
            {/* React Icon */}
            <svg className="w-5 h-5" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="react" x1="69.881" x2="42.119" y1="6.818" y2="92.727"><stop offset="0" stopColor="#61DAFB"/><stop offset="1" stopColor="#21FFFF"/></linearGradient>
                <path fill="url(#react)" d="M87.854 26.116c2.453 7.415-1.059 13.188-1.224 13.637a59.14 59.14 0 0 1-10.122 4.036c-.475.144-.963.284-1.461.418.53-2.226 1.132-4.564 1.855-6.918 2.684-8.736 5.952-17.637 6.952-11.173zm-22.67 9.667a254.65 254.65 0 0 0-2.396 13.794c-2.423 9.64-5.399 19.076-5.502 19.467a59.14 59.14 0 0 1-10.123-4.036c-.458-.144-.926-.29-1.398-.438.607-2.052 1.271-4.124 2.013-6.159 2.66-7.285 5.787-14.667 6.848-11.436 1.7 5.18 2.722 10.196 3.557 14.962-2.539 1.32-5.163 2.461-7.878 3.384a214.43 214.43 0 0 0 5.534-19.372c1.37-5.53 2.533-10.878 3.343-14.929 2.721-.858 5.464-1.558 8.193-1.873-1.302 4.602-2.475 9.54-3.191 14.64zm-8.491-1.663c1.342 5.3 2.443 10.787 3.165 16.233a202.523 202.523 0 0 1-6.936 2.639c-2.225-5.89-4.641-11.64-5.974-16.427-1.307-4.704-2.108-8.84-2.612-12.17 3.734.265 7.589.854 11.357 1.695zm12.127 2.457c-1.128-4.052-2.404-8.053-3.752-11.938a214.53 214.53 0 0 1 5.045-2.769 202.318 202.318 0 0 1-.342 14.737 175.437 175.437 0 0 1-2.952-14.406c2.237.274 4.424.635 6.555 1.068a201.324 201.324 0 0 1-4.554 13.308zm7.137 2.096a257.236 257.236 0 0 0-3.868-15.265c1.928.127 3.905.308 5.92.546a214.402 214.402 0 0 1-2.052 14.719zm3.617-16.038c2.077.135 4.113.334 6.106.599a255.125 255.125 0 0 0-2.052-10.299 236.685 236.685 0 0 0-3.261 9.053q-.594.647-1.171 1.308c-.048-.188-.095-.376-.141-.564a202.546 202.546 0 0 1-.581-2.238c.142.06.284.122.424.183l.576.242z"/>
            </svg>
            {/* Vite Icon */}
            <svg className="w-5 h-5" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <path fill="#646CFF" d="M73.1 85.6H54.9L25.4 42.4h38.4L73.1 85.6z"/><path fill="#646CFF" d="M64 97.6c-5.8 0-10.8-1.4-15.3-3.9l9.9-19.8h10.8c0 1.1.1 2.3.1 3.6c0 7.9-2.3 14.4-5.5 20.1z"/>
                <path fill="#646CFF" d="M102.6 42.4H64v43.2h18.1c7.9 0 14.3-2.3 20.5-11.6zM88.3 66.4H70.2v-9.6h18.1c3.7 0 5.9 1.6 5.9 4.8c0 3.2-2.2 4.8-5.9 4.8z"/>
                <path fill="#646CFF" d="M64 32L25.4 75.2h18.1l4.4-8.8h18.2l4.4 8.8h18.1L64 32zm-3.6 24.8l7.6-15.2l7.6 15.2h-15.2z"/>
            </svg>
            </p>

        </div>
    </footer>
  );
};

export default Footer;
