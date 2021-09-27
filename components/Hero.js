import React from 'react';

export default function Hero({ initialLoad }) {
  return (
    <div
      className={`h-screen md:h-full flex flex-wrap justify-center items-start md:overflow-hidden w-full px-5 md:px-7 lg:px-20 mb-10 md:mb-0`}
      style={{ paddingTop: initialLoad ? '132px' : '' }}>
      {/* Add your hero components */}
      <h1>Your Components hee</h1>
    </div>
  );
}
