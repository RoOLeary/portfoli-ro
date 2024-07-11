import React, { useState } from 'react';

function Banner(props) {
  // console.log(props.text);
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
    { bannerOpen && (
      <div className="fixed-top sticky p-4 w-full md:bottom-8 md:w-auto z-60 bg-yellow-500 border-y-8 py-2 border-y-red-700 text-white font-black text-center mb-4">
       {props?.text ? props.text : 'Optimistic Text Here'}
      </div>
    )}
    </>
  );
}

export default Banner;