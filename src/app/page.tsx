import Image from "next/image";
import React from "react";
export default function Contact(){
    return(
        <div className="container">
             <h1>Welcome to my Portfolio</h1>
      <h3>Hi! Iam Khalid Hussain learning Frontend-Development</h3>
      <ul className="ul">Skills i have
        <li>HTML</li>
        <li>CSS</li>
        <li>Typescript</li>
        <li>Learning Next.js</li>
        

      </ul>
      <Image
          src="/my-pic.jpg" 
          alt="this is my image"
          width={500} 
          height={500} 
        />


      
           
        </div>
    )
  }
