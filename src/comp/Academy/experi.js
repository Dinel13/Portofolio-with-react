import React from "react";
import Project from "./project"

export default function experi() {
  const data = [
    {
      thn: 2021,
      nama: "Website GenBI Sulsel",
      des: "Web app yang dibagun dengan MERN stack dan GraphQL",
      situs: "genbisulsel.cyou",
      github :"github.com/Dinel13/genbii",
      wrna : "clr-green"
    },{
      thn: 2020,
      nama: "GenBI App",
      des: "Aplikasi cross platform dengan mengunakan react-native",
      situs: "/",
      github :"github.com/Dinel13/GenBI-App",
      wrna : "blue"
    },{
      thn: 2020,
      nama: "TodoList App",
      des: "Aplikasi android untuk mencatat rencana atau kegiatan",
      situs: "app-debug.apk",
      github :"github.com/Dinel13/TodoList-App",
      wrna : "clr-green"
    },{
      thn: 2020,
      nama: "Corona Info",
      des: "Website untuk pantau penyebaran covid-19 di Indonesia",
      situs: "crna.netlify.app",
      github :"github.com/Dinel13/corona_pp",
      wrna : "blue"
      
    }, {
      thn: 2020,
      nama: "Toko Udin",
      des: "Website Ecommerance untuk belanja online smartphone",
      situs: "tokokudin.netlify.app",
      github :"github.com/Dinel13/ecommerance_react",
      wrna : "clr-green"
    }, {
      thn: 2020,
      nama: "Bacot",
      des: "Website Chatting dengan mengunakan websoket.io",
      situs: "diskusi.netlify.app",
      github :"github.com/Dinel13/chat",
      wrna : "blue"
    },
  ];

  return (
    <div className="edu">
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
