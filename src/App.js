import React, { useState } from "react";
import "./App.css";
import Header from "./comp/Header/Header";
import Navbar from "./comp/navbar/nav";
import About from "./comp/About/about";
import Skill from "./comp/Skill/skil";
import Footer from "./comp/Footer/footer";
import Academy from "./comp/Academy/academy";
import Home from "./home";
import Contact from "./comp/Contact/contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [tampil, setTampil] = useState(null);
  const tampilkan = () => {
    tampil ? setTampil(false) : setTampil(true);
    console.log(tampil);
  };
  return (
    <div className="App">
      <Header click={tampilkan}></Header>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/skill" component={Skill}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/galery" component={()=> <h1 style={{margin :"20px auto"}}>Masih Kosong </h1>}></Route>
        <Route path="/academy" component={Academy}></Route>
        {tampil && <Navbar click={tampilkan}></Navbar>}
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
