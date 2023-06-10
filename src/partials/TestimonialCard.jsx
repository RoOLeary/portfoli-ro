import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialImage from '../images/pablo.jpeg';

const TestimonialCard = ({ quote, author, image, isActive, twitter, position }) => {


  
  return (
    <AnimatePresence>
    <motion.div
              style={{ overflow: "hidden" }}
              key={position}
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0)" }}
            >
    <div
      className={`testPanel${
        isActive ? " active" : ""
      }`}
    >
        
        <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
            <div className=" absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-red-600" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                    </svg>
                <img className="relative rounded-full" src={image} width="96" height="96" alt="Testimonial 01" />
            </div>
            <blockquote className="text-sm md:text-xl font-normal mb-4">
            {quote}
            </blockquote>
            <cite className="block font-bold text-lg not-italic mb-1">{author}</cite>
            <div className="text-gray-600">
                <span>{position}</span> {twitter ? <a className="text-red-600 hover:underline" href={`https://twitter.com/${twitter}`}>@{twitter}</a> : null}
            </div>
        </div>
    </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default TestimonialCard;
