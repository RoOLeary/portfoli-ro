import React from 'react';
import { Link } from 'react-router-dom';
import { WindMill } from './WindMill';

function Footer() {

  const goToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
       
          {/* 1st block */}
          {/* <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              
              <Link to="/" className="inline-block" aria-label="Ro">
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
          <div className="flex items-center justify-between">          
            <div className="text-sm text-gray-600 mr-4 pb-4 text-center">© {`${new Date().getFullYear()} `} Ronan O'Leary. Made with <span className="text-red-500">&hearts;</span> in Amsterdam by <a class="text-black font-black" href="https://busylittlepixels.com" target="_blank" rel="noopener nofollow">busy<span className="text-red-500">little</span>pixels</a></div>
            <div className="flex flex-col items-center justify-center pb-4">
              <a onClick={(event) => goToTop(event)} className="cursor-pointer">
                <WindMill />
              </a>
            </div>
          </div>

      
      </div>
    </footer>
  );
}

export default Footer;
