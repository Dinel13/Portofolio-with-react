import React from "react";

export default function myservice() {
  return (
      <div className="col-md-6 my-md-5 ">
        <div className="col-md-6 col-sm-6 col-xs-12 " style={{marginTop: "2em"}}>
          <div className="about-gap web">
            <span className="fa fa-television" aria-hidden="true"></span>
            <h3>Web Design</h3>
            <p>Saya membuat web yang menarik dan responsif</p>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 " style={{marginTop: "2em"}}>
          <div className="about-gap clr-green">
            <span className="fa fa-server" aria-hidden="true"></span>{" "}
            <h3>Web Server</h3>
            <p>Dibangun dengan teknologi javascript dan node </p>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 " style={{marginTop: "2em"}}>
          <div className="about-gap clr-green">
            <span className="fa fa-picture-o" aria-hidden="true"></span>
            <h3>Photograph</h3>
            <p>Dengan dukungan foto-foto hasil kamera pribadi saya</p>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 " style={{marginTop: "2em"}}>
          <div className="about-gap">
            <span className="fa fa-database" aria-hidden="true"></span>
            <h3>Database</h3>
            <p>Tersimpan dengan database MySQL atau MonggoDB</p>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
  );
}
