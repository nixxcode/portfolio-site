import React from "react"

import Main from "../components/main"
import Layout from "../components/layout"

export default () => 
    <Layout>
        <Main>
            <Headline />
            <Portfolio />
        </Main>
    </Layout>


const Headline = () => 
    <div className="headline-container">
        <h1>Hi, I'm Dominik</h1>
        <h2>Software Developer</h2>

        <p>Welcome to my portfolio website. To see some of my work, click the button below</p>
        <button type="button" className="view-projects" name="view-projects">VIEW PROJECTS</button>
    </div>


const Portfolio = () =>
    <div className="portfolio-container">
        <h1>Projects</h1>
    </div>
