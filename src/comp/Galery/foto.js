import React from 'react'

const foto = ({img}) => {
    return (
        <div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids">
              <a
                href={`images/${img}`}
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src={`images/${img}`}
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            
        </div>
    )
}
export default foto
