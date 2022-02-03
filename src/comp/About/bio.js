import React from "react";
import LinkSosmed from "../linkSosmed";
import Me from "./me.jpeg"

export default function bio() {
  return (
    <>
      <div className="col-md-4 col-xs-10 about-left">
        <img src={Me} className="img-responsive" alt="" />
      </div>
      <div className="col-md-7 about-right">
        <div className="about-me">
          <h2>Salahuddin </h2>
          <h4>Web Developer</h4>
        </div>
        <div className="desc">
          <p>
            Seorang pembelajar dan menyukai hal-hal baru.
            Memanfaatkan teknologi untuk memberikan dampak terutam melalui pengembangan website secara keseluruhan atau 
            fullstack. 
          </p>
          <div className="button-social">
            <LinkSosmed></LinkSosmed>
          </div>
        </div>
      </div>
    </>
  );
}
