import React from "react";
import ReactDOM from "react-dom";
import './App.css';




const Application = () =>{
  return(
    <div>
      <HomeSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </div>
  )
}
//Add Parallax Scrolling
//Make Nav Bar Responsive
function HomeSection() {
  return (
    <div className="App">
    <div className = "Nav-links">
    <ul>
      <li><a href = '#home'><strong>Home</strong></a></li>
      <li><a href = '#About'><strong>About</strong></a></li>
      <li><a href = '#pic'><strong>Pictures</strong></a></li>
      <li><a href = '#contact'><strong>Contact</strong></a></li>

    </ul>
    </div>
      <header className="App-header">
        <h4>Welcome to my Website,Efe❤</h4>
      </header>
    </div>
  );
}

//Details Section
//Props not working with functional components
function FirstSection(){
    return (
      <div>
        {/* <div className = "App2-header" id = "About">
          <h1>The Details Section is here </h1>
        </div> */}
        <div>
          <img src = {'./Image.png'} alt = "Just me"></ img>
        </div>
        <div className = "App2-box">
          <p>
          Name : Odedunmoye Olaoluwa <br></br>
          Age : 20 something <br></br>
          Date of Birth: 24th of November <br></br>
          Height: I identify as a 6ft human <br></br>
          Hobies: <br></br>
          Likes: <br></br>
          Dislikes: <br></br>
          State of Origin: Kwara State
          </p>
        </div>
      </div>
    )
    
}

//Pictures Section
function SecondSection(){
  return(
    <div className = "App3">
      <h1 className = "App3-header" id = "pic"> The Pictures Section is here</h1>
      

    </div>
  )
}

//Contact Section
function ThirdSection(){
  return(
    <div className = "App4">
      <h1 className = "App4-header" id = "contact"> The Contact Me Section is here</h1>
      

    </div>
  )
}

//Copywright and All rights ain't reserved
function LastSection(){
  return(
    <div className = "App5">
      <h1 className = "App5-header">Copywright 2022</h1>
      <p>All rights ain't reserved, Muah💕</p>
    </div>
  )
}

//Home Page - Remains Vertical Nav bar with hidden line


//About me Page- Box that includes my details
//Pictures Page - Tiles of pictures that fade in and out when hovered upon
//Click here for a Surprise🎁 - Target is a new page that shows "THINKING ABOUT IT"
//Contact me Love😉- My details
//All right reserved
//Muah ❤


ReactDOM.render(<Application />, document.getElementById("base"));


// eslint-disable-next-line
export default "App";
