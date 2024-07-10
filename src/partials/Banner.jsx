import React, { useState } from 'react';

function Banner(props) {
  // console.log(props.text);
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
    { bannerOpen && (
      <div className="flex p-4 w-full md:bottom-8 md:w-auto z-60 bg-red-500 text-white font-black mb-4">
       {props?.text ? props.text : 'Optimistic Text Here'}
      </div>
    )}
    </>
  );
}

export default Banner;