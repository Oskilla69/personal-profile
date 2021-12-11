import React from "react";
import cookie from "../images/cookie.jpeg"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"
export default function Card() {
    return (
        <div className="card">
            <img className="profilePic" src={ cookie } alt="professional profile"/>
            <div className="details">
                <h2 className="name">Oscar Fan</h2>
                <h4 className="role">Software Developer</h4>
                <div className="links">
                    <a href="https://gmail.com"><img src={ email } alt="email icon"/></a>
                    <a href="https://www.linkedin.com/in/oscar-fan-25019373/"><img src={ linkedin } alt="linkedin icon"/></a>
                </div>
                <div className="detailedDetails">
                    <h3 className="about">About</h3>
                    <p className="aboutInfo">I am a recent Computer Science graduate at UNSW majoring in Artificial Intelligence. Since I have been young, I have always had a passion for creating and building things, and this has extended to software development.</p>

                    <h3 className="interests">Interests</h3>
                    <p className="interestsInfo">Reading Japanese and Korean webtoons.</p>
                </div>
            </div>
        </div>
    )
}