import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import Pablo from '../images/pablo.jpeg';
import Lukasz from '../images/lukasz.jpeg';

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
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Trusted by over 20,000 companies all over the world</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis
                blandit libero cursus mattis.</p>
          </div> */}

          

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

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