import React, { useState } from "react"

import Main from "../components/main"
import Layout from "../components/layout"


export default () => {
    
    const [state, setState] = useState({
        overlayVisible: false,
        overlayImage: "",
        overlayTitle: "",
        overlayDescription: ""
    })

    const Headline = () => 
    <div className="headline-container">
        <div className="intro-box">
            <i className="fas fa-laptop-code"></i>
            <div className="intro-text">
                <h1>Hi, I'm Dominik</h1>
                <h2>Software Developer</h2>
            </div>
        </div>

        <p>Welcome to my portfolio website. To see some of my work or to get in touch, use the buttons below</p>
        <div className="button-box">
            <button type="button" className="cta-button" name="view-projects">VIEW PROJECTS</button>
            <button type="button" className="cta-button" name="get-in-touch">GET IN TOUCH</button>
        </div>
    </div>


    const Portfolio = () =>
        <div className="portfolio-container">
            <h1>Projects</h1>
            <div className="projects-box">
                <Project 
                    image="./img/jvm-brotli.png" 
                    title="Jvm-Brotli" 
                    description="While working to implement Brotli compression in Javalin (see next project), I found the Java offerings for Brotli were out of date, buggy, or unsuitable for performance reasons. That’s when I decided to create my own cross-platform library with the goal of making Brotli easy to access for Java developers and consumers on all platforms. What makes Jvm-Brotli uniquely helpful, is that including it in your own project is as simple as adding a single Maven or Gradle dependency. It will automatically download and use the correct native library based on the platform the dependent app is currently running on. This takes away all the complexity of JNI, making Brotli simple to include and easy to use." 
                    website="https://jvmbrotli.com"
                    github="https://github.com/nixxcode/jvm-brotli"
                />
                <Project 
                    image="./img/javalin.png" 
                    title="Javalin" 
                    description="I have been working closely with Javalin’s maintainer to fix bugs and introduce brand new features to this fantastic and easy-to-use web framework.
                    My greatest contribution to the project was implementing Brotli compression capabilities for both static and dynamic web content. This got quite technical and complex, because Javalin’s static content handling is built on top of Jetty, so it was necessary to override the default content handling with our own robust approach.
                    Unsurprising for such a significant change, a few bugs and issues surfaced after we released the changes. However, many continuous integration tests and some bug fixes later, the result of our work speaks for itself. Javalin now supports the Brotli compression format, as well as having a streamlined, unified handler for both dynamic and static HTTP responses."
                    website="https://javalin.io"
                    github="https://github.com/tipsy/javalin"
                />
            </div>
        </div>


    const Project = props =>
        <div className="project-container" onClick={() => handleProjectClick(props)}>
            <div className="image-container">
                <img src={props.image} alt={props.title} />
            </div>
            <h5>{props.title}</h5>
            <div className="project-links-container" onClick={e => e.stopPropagation()}>
                <a target="_blank" href={props.website}><i className="fas fa-globe"></i>Website</a>
                <a target="_blank" href={props.github}><i className="fas fa-code-branch"></i>Github</a>
            </div>
        </div>


    const ProjectDetails = () => 
        <div className="project-details">
            <h3>{state.overlayTitle}</h3>
            <pre>{state.overlayDescription}</pre>
        </div>

    const Overlay = () => {
            return (
                <div 
                    className="overlay" 
                    id="overlay" 
                    onClick={() => handleOverlayClick()} 
                    style={{display: state.overlayVisible ? "block" : "none"}}
                >
                        <ProjectDetails />
                </div>
            )
    }


    const handleOverlayClick = () => {
        setState({ overlayVisible: false })
    }

    const handleProjectClick = (props) => {
        setState({ 
            overlayVisible: true,
            overlayImage: props.image,
            overlayTitle: props.title,
            overlayDescription: props.description         
        })
    }

    const handleLinkClick = () => {

    }


    return (
        <Layout>
            <Overlay />
            <Main>
                <Headline />
                <Portfolio />
            </Main>
        </Layout>
    )
}


