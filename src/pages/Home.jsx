import React from 'react'

const Home = () => {
  return (
    <div id='home'>
      <div id="top-home">
        <div id="text">
        <h1>
          Discover and Share Code Snippets
        </h1> <br />
        <p>
          Buy,sell,or share high-quality code components with the community
        </p><br />

        <button>Explore</button>
        </div>
      </div>

      <div id="bootom-home">
        <div id="left">
          <h2>
            Responsive Navbar
            </h2>
            <p>
              Fully responsive navigation bar using flexbox and Talwind
            </p><br />
            <h3>
              $20
            </h3><br />
            <button>Buy Code</button>
        </div>

        <div id="middle">
           <h2>
            Login UI Design
            </h2>
            <p>
              Modern animated Login form with validation
            </p><br />
            <h3>
              Free
            </h3><br />
            <button>Buy Code</button>
        </div>

        <div id="right">
            <h2>
              E-Commerce Product card
            </h2>
            <p>
              Stylish product card with effects and rating
            </p><br />
            <h3>
              $57
            </h3><br />
            <button>Buy Code</button>
        </div>

      </div>
        
    </div>
  )
}

export default Home