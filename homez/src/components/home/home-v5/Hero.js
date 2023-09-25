import React from "react";

const Hero = () => {
  const item = {
    image: "/images/Omris/berlin-5613467_1280.jpg",
  };

  return (
    <div className="hero-large-home5" style={{ height: "600px" }}>
      <div className="item">
        <div
          className="slider-slide-item"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "0px -70px"  // Crop 100px from the top
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-left position-relative">
                {/* All text details and buttons have been removed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
