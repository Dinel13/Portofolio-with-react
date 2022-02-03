import React from "react";
import Project from "./project"

export default function experi() {
  const data = [
    {
      thn: 2022,
      nama: "Skripsi Tugas akhir",
      des: "Menganalis performa microservice yang menggunakan gRPC dan REST API",
      situs: "https://dinel.netlify.app/",
      github :"https://github.com/Dinel13/thesis-ac",
      wrna : "clr-green"
    },
    {
      thn: 2021,
      nama: "Lanjukang",
      des: "Web app untuk menawarkan layanan jasa terkait pariwisata",
      situs: "http://lanjukang.com",
      github :"https://github.com/Dinel13/lanjukang-be",
      wrna : "blue"
    },
    {
      thn: 2021,
      nama: "Suara Unhas",
      des: "Web app khusus mahasiswa unhas untuk berbagi tulisan",
      situs: "http://47.250.52.172:89/",
      github :"https://github.com/Dinel13/suara-unhas-fe",
      wrna : "clr-green"
    }
  ];

  return (
    <div className="edu">
      <br/>
      <div className="col-md-5 title">
        <h1>Project</h1>
      </div>
      <div className="col-md-7 proj">
       { data.map((item, index) => (
          <Project key={index} nilai={item}></Project>
          
       ))}     
        
      </div>
      
      <div className="clearfix"></div>
    </div>
  );
}
