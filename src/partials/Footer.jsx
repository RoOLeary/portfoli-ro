import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
       
          {/* 1st block */}
          {/* <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              
              <Link to="/" className="inline-block" aria-label="Cruip">
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
                </svg>
              </Link>
            </div>
          </div> 

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4 pb-12">© 2023 Ronan O'Leary. Made in Amsterdam by <a className="font-bold text-black hover:underline" href="https://busylittlepixels.com/">busy<span class="text-red-500">little</span>pixels</a>. All rights reserved.</div>

      
      </div>
    </footer>
  );
}

export default Footer;
