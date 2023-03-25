import React, { useState } from 'react';

function Columns() {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>

      <div className="flex flex-wrap md:flex-nowrap md:flex max-w-6xl mx-auto px-4 sm:px-6 gap-4 mb-12">
        <div className='column one'><h3 className="text-white font-bold">Column 1</h3></div>
        <div className='column two'><h3 className="text-white font-bold">Column 2</h3></div>
      </div>
    </>
  );
}

export default Columns;