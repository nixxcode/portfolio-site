import React from "react"

import Footer from "./footer"
import "../styles/global.css"
import "../styles/fontawesome/css/fontawesome.css"
import "../styles/fontawesome/css/solid.css"

export default ({ children }, props) => 
    <div className="container">
        {children}
        <Footer/ >
    </div>