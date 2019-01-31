// Background component

import React from "react";
import "./style.css";

// returns a Bootstrap "jumbotron" class <div> with inline CSS
// has a {children} param so other components can exist within its open and close tags
function Background({ children }) {
  return (
    <>
      {children}

      <div id="bgPhotoCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-wrap="true" data-interval="30000">

        <div className="carousel-inner">
          <div className="item carousel-item active"   style={{ backgroundImage: "url(/assets/images/bg-1.jpg)" }}>
            <img src="/assets/images/bg-1.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-2.jpg)" }}>
            <img src="/assets/images/bg-2.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-3.jpg)" }}>
            <img src="/assets/images/bg-3.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-4.jpg)" }}>
            <img src="/assets/images/bg-4.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-5.jpg)" }}>
            <img src="/assets/images/bg-5.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-6.jpg)" }}>
            <img src="/assets/images/bg-6.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-7.jpg)" }}>
            <img src="/assets/images/bg-7.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-8.jpg)" }}>
            <img src="/assets/images/bg-8.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-9.jpg)" }}>
            <img src="/assets/images/bg-9.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-10.jpg)" }}>
            <img src="/assets/images/bg-10.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-11.jpg)" }}>
            <img src="/assets/images/bg-11.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-12.jpg)" }}>
            <img src="/assets/images/bg-12.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-13.jpg)" }}>
            <img src="/assets/images/bg-13.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-14.jpg)" }}>
            <img src="/assets/images/bg-14.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-15.jpg)" }}>
            <img src="/assets/images/bg-15.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-16.jpg)" }}>
            <img src="/assets/images/bg-16.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-17.jpg)" }}>
            <img src="/assets/images/bg-17.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-18.jpg)" }}>
            <img src="/assets/images/bg-18.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-19.jpg)" }}>
            <img src="/assets/images/bg-19.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-20.jpg)" }}>
            <img src="/assets/images/bg-20.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-21.jpg)" }}>
            <img src="/assets/images/bg-21.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-22.jpg)" }}>
            <img src="/assets/images/bg-22.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-23.jpg)" }}>
            <img src="/assets/images/bg-23.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-24.jpg)" }}>
            <img src="/assets/images/bg-24.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-25.jpg)" }}>
            <img src="/assets/images/bg-25.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-26.jpg)" }}>
            <img src="/assets/images/bg-26.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-27.jpg)" }}>
            <img src="/assets/images/bg-27.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-28.jpg)" }}>
            <img src="/assets/images/bg-28.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-29.jpg)" }}>
            <img src="/assets/images/bg-29.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-30.jpg)" }}>
            <img src="/assets/images/bg-30.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-31.jpg)" }}>
            <img src="/assets/images/bg-31.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-32.jpg)" }}>
            <img src="/assets/images/bg-32.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-33.jpg)" }}>
            <img src="/assets/images/bg-33.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item  "   style={{ backgroundImage: "url(/assets/images/bg-34.jpg)" }}>
            <img src="/assets/images/bg-34.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item"   style={{ backgroundImage: "url(/assets/images/bg-35.jpg)" }}>
            <img src="/assets/images/bg-35.jpg" className="carouselImage" alt="name" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
