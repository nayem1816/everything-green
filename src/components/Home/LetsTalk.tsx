import React from "react";

const LetsTalk = () => {
  return (
    <div className="py-16">
      <div className="container text-tertiary md:px-80">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl text-center text-primary md:px-32 font-dmSerif">
          Let’s talk About Data Architecture
        </h2>
        <p className="mt-8 text-center text-md md:text-2xl text-primary">
          Grow your business even further. Concinnity Limited is the only
          digital marketing agency in HK that power up your company’s online
          marketing campaign. Thrive in this highly competitive market when you
          start partnering with us. See a great improvement to the overall run
          of your campaign by trying one of our services today!
        </p>
        {/* make a button */}
        <div className="flex justify-center mt-8">
          <button className="bg-primary text-white px-20 py-3 rounded-xl text-xl md:text-2xl">
            Let’s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
