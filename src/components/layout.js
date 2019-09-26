import React from "react"

import Footer from "./footer"

export default ({ children }, props) => 
    <div className="container">
        {children}
        <Footer/ >
    </div>