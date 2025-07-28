import React, { useState } from 'react'

const About = () => {
  // State for hover effects on each main div
  const [hovered, setHovered] = useState({
    codeshare: false,
    keyfeatures: false,
    ourmission: false,
    usecase: false,
    builtwith: false,
    last: false
  });

  // Helper to get style with hover effect
  const getHoverStyle = (base = {}) => ({
    ...base,
    transform: 'scale(1)',
    boxShadow: '0 2px 12px 0 #a6c1ee33',
    transition: 'background 0.6s, box-shadow 0.6s, transform 0.3s',
  });
  const getHoveredStyle = (base = {}) => ({
    ...base,
    transform: 'scale(1.04)',
    boxShadow: '0 8px 32px 0 #a6c1ee66',
    transition: 'background 0.6s, box-shadow 0.6s, transform 0.3s',
  });

  return (
    <div id="about-main">
      <div className="about-first">

        <div
          className="codeshare"
          style={hovered.codeshare ? getHoveredStyle() : getHoverStyle()}
          onMouseEnter={() => setHovered(h => ({ ...h, codeshare: true }))}
          onMouseLeave={() => setHovered(h => ({ ...h, codeshare: false }))}
        >

          <h1> ABOUT CODESHARE</h1>
            <h4>CodeShareHub is a collaborative code-sharing platform
                designed to streamline the way developers write, share,
                and discover code snippets across the web. Built for developers
                by developers, it enables individuals and teams to collaborate 
                efficiently on small code blocks, UI components, backend logic, 
                and full-stack snippets.</h4><br />
             

          </div>

          <div
            className="key-features"
            style={hovered.keyfeatures ? getHoveredStyle() : getHoverStyle()}
            onMouseEnter={() => setHovered(h => ({ ...h, keyfeatures: true }))}
            onMouseLeave={() => setHovered(h => ({ ...h, keyfeatures: false }))}
          >

               <h1> Features</h1>
               <ul style={{paddingLeft: '20px', margin: 0}}>
                <li style={{marginBottom: '10px'}}>Instant Code Sharing</li>
                <li style={{marginBottom: '10px'}}>Multi-language Support</li>
                <li style={{marginBottom: '10px'}}>Live Preview</li>
                <li style={{marginBottom: '10px'}}>Collaborative Editing</li>
                <li style={{marginBottom: '10px'}}>Snippet Collections</li>
                <li style={{marginBottom: '10px'}}>Dark Mode & Theme Switcher</li>
               </ul>

          </div>    
             

               <div
                 className="our-misson"
                 style={hovered.ourmission ? getHoveredStyle() : getHoverStyle()}
                 onMouseEnter={() => setHovered(h => ({ ...h, ourmission: true }))}
                 onMouseLeave={() => setHovered(h => ({ ...h, ourmission: false }))}
               >

               <h1> Our Mission</h1>
               <h4>Our mission is to foster a global community of developers who learn and grow by 
                sharing knowledge. We believe in open-source collaboration and the power of
                 accessible code to fuel innovation.</h4> <br /><br />

                  </div>
            </div>
              <div className="about-second">

                <div
                  className="use-case"
                  style={hovered.usecase ? getHoveredStyle() : getHoverStyle()}
                  onMouseEnter={() => setHovered(h => ({ ...h, usecase: true }))}
                  onMouseLeave={() => setHovered(h => ({ ...h, usecase: false }))}
                >
                 <h1>Use Cases</h1>
                 <ul>
                  <li>Frontend developers testing new UI components  </li>

                    <li> Backend engineers sharing reusable functions </li>

                     <li> Students showcasing their assignments or experiments </li>

                       <li>Educators creating interactive examples for tutorials </li>

                      

                    </ul>

                    </div>
                   
                   
                   <div
                     className="built-with"
                     style={hovered.builtwith ? getHoveredStyle() : getHoverStyle()}
                     onMouseEnter={() => setHovered(h => ({ ...h, builtwith: true }))}
                     onMouseLeave={() => setHovered(h => ({ ...h, builtwith: false }))}
                   >
                    <h1> Built With</h1>
                    <ul>
                      <li>
                      React.js + Tailwind CSS </li>

                    <li>   Monaco Editor </li>

                     <li>  Firebase / Supabase / MongoDB  </li>

                     <li>  Vite / Webpack  </li>

                     <li>  Express.js (optional backend) </li>


                    </ul>
                    </div>

                    <div
                      className="last"
                      style={hovered.last ? getHoveredStyle() : getHoverStyle()}
                      onMouseEnter={() => setHovered(h => ({ ...h, last: true }))}
                      onMouseLeave={() => setHovered(h => ({ ...h, last: false }))}
                    >
                      <h1> Why CodeShareHub?</h1>
                     <ul>
                      <li>✅Real-Time Code Preview </li> 

                       <li>✅ Multi-Language Support </li>

                        <li> ✅ One-Click Sharing </li>  

                        <li>  ✅ Team Collaboration </li>

                        <li>✅ Organized Snippet Collections </li>

                      <li>✅ Dark Mode UI 😉</li>   </ul>
                    </div>
                    </div>
    </div>
  )
}

export default About