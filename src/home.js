import React from 'react'
import About from "./comp/About/about";
import Skil from "./comp/Skill/skil";
import Academi from "./comp/Academy/academy";
import Contact from "./comp/Contact/contact";

export default function home() {
    return (
        <div>
            <About></About>
            <Skil></Skil>
            <Academi></Academi>
            <Contact></Contact>
            
        </div>
    )
}
