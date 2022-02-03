import React from "react";

export default function TextSkil() {
  return (
    <div className="col-md-10 my-ser-left mx-auto">
      <div className="white-shadow">
        <div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
          <h6>1</h6>
        </div>
        <div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
          <h4>Backend Development</h4>
          <p>
            Mengembangkan sistem Backend mengunakan Golang atau Node.js melauli
            Rest Api ataupun Grpc. Berinteraksi dengan berbagai database Sql
            (MySQL, PostgreSQL dan Cloud SQL) maupun database NoSql (MongoDB dan
            Cloud Firestore).
          </p>
        </div>
      </div>
      <div className="white-shadow">
        <div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
          <h6>2</h6>
        </div>
        <div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
          <h4>Frontend Development</h4>
          <p>
            Memastikan tampilah website yang baik dan interaktif dengan
            menggunakan javascript murni maupun library atau framework React.js,
            Next.js dan Redux. Membuat website lebih menarik dengan css murni
            atau mengunakan framework seperti Tailwind dan Bootsrap.
          </p>
        </div>
      </div>
      <div className="white-shadow">
        <div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
          <h6>3</h6>
        </div>
        <div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
          <h4>Devops</h4>
          <p>
            Mendeploy dan memastikan website berjalan yang baik dan stabil
            dengan mengunakan sistem operasi linux pada berbagai layanan cloud
            seperti Google Cloud Platform, Amazon Web Services dan Alibaba
            Cloud.
          </p>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="clearfix"> </div>
      <div className="white-shadow">
        <div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
          <h6>4</h6>
        </div>
        <div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
          <h4>Skill penunjang</h4>
          <p>
            Mengunakan berbagai alat untuk membantu menyelesaikan tugas seperti Git with Github, GIMP, Datagrip, Figma dan Postman.
          </p>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  );
}
