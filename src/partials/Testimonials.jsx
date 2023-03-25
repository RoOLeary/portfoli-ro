import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import Pablo from '../images/pablo.jpeg';
import Lukasz from '../images/lukasz.jpeg';
import Paddy from '../images/paddy.jpeg';

function Testimonials() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const indicatorSlide = currentSlide + 1;
 
  const testimonials = [
    {
      quote: '“Ronan is a fantastic team player who genuinely cares about delivering a first-rate experience to customers, users and stakeholders. Not only he has a deep technical understanding, but he also knows how to apply that knowledge in the most efficient way. Ro is a humble, intelligent, hard working man that will go out of his way to ensure the success of any project. 10/10 would recommend! “', 
      author: 'Pablo Roman', 
      image: Pablo,
      twitter: '@pabloroman',
      position: 'CTO at Squares. ex-CTO at TNW' 
    },
    {
      quote: '“Ronan is an excellent developer. He\'s an accomplished coder and strategist, not to mention an engaging and reliable person to work with. I\'m happy to endorse and recommend Ronan.“', 
      author: 'Paddy Ryan', 
      image: Paddy,
      twitter: '@paddyphillipryan',
      position: 'CTO Nutriband, Founder Run Republic' 
    },
    {
      quote: '“It is pleasure to highly recommended Ronan O\'Leary. Ronan is an exceptional web developer. He has an excellent ability to effectively listen and to proceed with each task at hand, both large and small. Ronan is detail oriented, well organised and also cares about visual style guides, comps, and code examples to work collaboratively to develop a user interface and template system that meets our needs. “', 
      author: 'Lukasz Kulakowki', 
      image: Lukasz,
      twitter: '@lukasz',
      position: 'Integrated Art Director EF' 
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="h2 mb-4">What others say...</h2>
          </div>

          

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto" data-aos="zoom-y-out">
            <div className="relative border-2 border-gray-200 rounded bg-white">
            {/* <span className="-mt-8 font-black text-center">{indicatorSlide} / {testimonials.length}</span> */}
             
              
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  image={testimonial.image}
                  twitter={testimonial.twitter}
                  position={testimonial.position}
                  isActive={index === currentSlide}
                />
                
              ))}

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;