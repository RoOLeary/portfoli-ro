import React, { useState } from 'react';

function Banner(props) {
  // console.log(props.text);
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
    { bannerOpen && (
      <div className="fixed-top sticky p-4 w-full md:bottom-8 md:w-auto z-60 bg-[#d00027] border-y-[10px] py-2 border-y-[#d00027] text-yellow-400 font-black text-center">
       {props?.text ? props.text : 'Optimistic Text Here'}
      </div>
    )}
    </>
  );
}

export default Banner;