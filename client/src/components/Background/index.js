// Background component

import React from "react";
import "./style.css";

// returns a Bootstrap "jumbotron" class <div> with inline CSS
// has a {children} param so other components can exist within its open and close tags
function Background({ children }) {
  return (
    <>
      {children}

      <div id="bgPhotoCarousel" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item carousel-item active" style={{ backgroundImage: "url(/assets/images/bg-1.jpg)" }}>
          {/* <img src="" className="carouselImage" alt="name" /> */}
          <img src="/assets/images/bg-1.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item" style={{ backgroundImage: "url(/assets/images/bg-2.jpg)" }}>
            <img src="/assets/images/bg-2.jpg" className="carouselImage" alt="name" />
          </div>

          <div className="item carousel-item" style={{ backgroundImage: "url(/assets/images/bg-3.jpg)" }}>
            <img src="/assets/images/bg-3.jpg" className="carouselImage" alt="name" />
          </div>

          {/* <div id="bg-1" className="carousel-item active">
            <img src="/assets/images/bg-1.jpg" className="carouselImage" alt="name" />
          </div>

          <div id="bg-2" className="carousel-item">
            <img src="/assets/images/bg-2.jpg" className="carouselImage" alt="name" />
          </div>

          <div id="bg-3" className="carousel-item">
            <img src="/assets/images/bg-3.jpg" className="carouselImage" alt="name" />
          </div>
        </div> */}

          {/* <div className="item" style={{ backgroundImage: "url(http://placehold.it/400x400)" }}>
          <img src="http://placehold.it/400x400" />
        </div> */}

          {/* <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a> */}

          {/* <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a> */}
        </div>
      </div>
    </>
  );
}

export default Background;

{
  /* <div id="photo">
      {children}
    </div> */
}
