import React from "react";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
export default function Socials() {
    return (
        <footer className="footer">
            <div className="socials">
                <a href="https://twitter.com"><img src={ twitter } alt="twitter icon"/></a>
                <a href="https://facebook.com"><img src={ facebook } alt="facebook"/></a>
                <a href="https://instagram.com"><img src={ instagram } alt="instagram"/></a>
                <a href="https://github.com/Oskilla69"><img src={ github } alt="github"/></a>
            </div>
        </footer>
    )
}