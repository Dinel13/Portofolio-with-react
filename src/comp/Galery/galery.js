import React from "react";
import Foto from "../comp/galery/foto";

export default function galery() {
  const imge = ["g1.jpg", "g2.jpg", "g3.jpg","g4.jpg","g5.jpg","g6.jpg","g7.jpg","g8.jpg","g9.jpg","g10.jpg","g11.jpg","g12.jpg"];
  return (
    <div>
      <div id="galery" className="gallery">
        <div className="container">
          <h3 className="title clr">Gallery</h3>
          <div className="gallery-info">
            {imge.map( (item,index) => (
              <Foto key={index} img={item}></Foto>              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
