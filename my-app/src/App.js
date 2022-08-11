import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import pic from './OLAS.jpg';
import pic1 from "./images/First One.jpg";
import pic2 from "./images/Second One.jpg";
import pic3 from "./images/Third One.jpg";
import pic4 from "./images/Fourth One.jpg";
import pic5 from "./images/Fifth One.jpg";
import pic6 from "./images/Sixth One.jpg";
import pic7 from "./images/Seventh One.jpg";
import pic8 from "./images/Eight One.jpg";





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
      <div id = "About" className = "App2">
        {/* <div className = "App2-header" id = "About">
          <h1>The Details Section is here </h1>
        </div> */}
        <div className = "Image">
          <img src = {pic} alt = "Just me"/>
          <div>
            <p>Odedunmoye Olaoluwa</p>
            <p>FrontEnd Developer</p>
          </div>
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
      <h3>Gallery Arena</h3>
      <div className = "App3-pictures">
      <div className = "Pictures">
        <img src = {pic1} alt = "pic" />
        <div><p>First Picture</p></div>
      </div>
      <div className = "Pictures">
        <img src = {pic2} alt = "pic"/>
        <div><p>Second Picture</p></div>
      </div>
      <div className = "Pictures">
        <img src = {pic3} alt = "pic"/>
        <div><p>Third Picture</p></div>
      </div>
      <div className = "Pictures">
        <img src = {pic4} alt = "pic"/>
        <div><p>Fourth Picture</p></div>
      </div>
      <div className = "Pictures">
        <img src = {pic5} alt = "pic"/>
        <div><p>Fifth Picture</p></div>
      </div>
      <div className = "Pictures">
        <img src = {pic6} alt = "pic"/>
        <div><p>Sixth Picture</p></div>
      </div>
      <div className = "Pictures">
        <img src = {pic7} alt = "pic"/>
        <div><p>Seventh Picture</p></div>
      </div>
      <div className = "Pictures">
        <img src = {pic8} alt = "pic"/>
        <div><p>Eight Picture</p></div>
      </div>
      </div>

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
