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
                <h1>Dominik Petrovic</h1>
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
            <p>Below is a collection of select projects I have worked on during my time as a developer. Click or tap on individual cards for details</p>
            <div className="projects-box">
                <Project 
                    image="./img/jvm-brotli.png" 
                    title="Jvm-Brotli" 
                    description="While working to implement Brotli compression in Javalin (see next project), I found the Java offerings for Brotli were out of date, buggy, or unsuitable for performance reasons. 
                    That’s when I decided to create my own cross-platform library with the goal of making Brotli easy to access for Java developers and consumers on all platforms. What makes Jvm-Brotli uniquely helpful, is that including it in your own project is as simple as adding a single Maven or Gradle dependency. 
                    It will automatically download and use the correct native library based on the platform the dependent app is currently running on. This takes away all the complexity of JNI, making Brotli simple to include and easy to use." 
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
                <Project 
                    image="./img/connect-4-react.png" 
                    title="Connect 4 React" 
                    description="Connect 4 game written entirely in vanilla React. It can be played on the web link provided. The app is sensibly broken down into individual game components such as: the game board component, which is made up of 6 row components, which are in turn made up of 7 cell components each."
                    website="https://nixxcode.com/connect4react/"
                    github="https://github.com/nixxcode/connect4react"
                />
                <Project 
                    image="./img/responsive-web-template.png" 
                    title="Responsive Web Template" 
                    description="Fully responsive, mobile-first web template, featuring multiple screen-width breakpoints that sensibly resize web content depending on the viewer’s screen size. Built with accessibility in mind. Every element on the site is accessible via keyboard (tab and enter)."
                    website="https://nixxcode.com/responsive-web-template/"
                    github="https://github.com/nixxcode/responsive-web-template"
                />

            </div>
        </div>


    const Project = props => {
        let webLinkStyle = props.website === "" ? {display: "none"} : null 
        
        return(
            <div className="project-container" onClick={() => handleProjectClick(props)}>
                <div className="image-container">
                    <img src={props.image} alt={props.title} />
                </div>
                <h5>{props.title}</h5>
                <div className="project-links-container" onClick={e => e.stopPropagation()}>
                    <a target="_blank" href={props.website} style={webLinkStyle}><i className="fas fa-globe"></i>Website</a>
                    <a target="_blank" href={props.github}><i className="fas fa-code-branch"></i>Github</a>
                </div>
            </div>
        )
    }


    const ProjectDetails = () => 
        <div className="project-details">
            <span className="close" onClick={() => handleCloseClick()} >X</span>
            <h3>{state.overlayTitle}</h3>
            <pre>{state.overlayDescription}</pre>
        </div>

    const Overlay = () => {
            return (
                <div 
                    className="overlay" 
                    id="overlay" 
                    style={{display: state.overlayVisible ? "block" : "none"}}
                >
                        <ProjectDetails />
                </div>
            )
    }


    const handleCloseClick = () => {
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


