import logo from './logo.svg';
import './App.css';
import React from 'react';
import './index.js';
import bg from './img/bg.jpg'
import profilePic from './img/prof_pic.jpg'

// className tea extends React.Component{
//   render(){
//     return <h2>Hello let's make tea!</h2>
//   }
// }
function App() {
  return (
    <>
    
    <p>Which year are you studying?</p>
    <p id="hello1">I am in my 1st year and studying in AI and DS</p>
    <button type="button" onClick="myfunfor1st()">In my 1st</button>
    <button type="button" onClick="myfunfor2nd()">In my 2nd</button>
    <button type="button" onClick="myfunfor3rd()">In my 3rd</button>
    <button type="button" onClick="myfunforfinal()">In my final</button>
    <script src="JS\linkforHTML.js"></script>
    
    <div>
    <h1 style={{color:'white'}}>hello guys!</h1>
    <h2 style={{color:'white'}}>ello guys!</h2>
    <h3>ello guys!</h3>
    <h4>ello guys!</h4>
    <h5>ello guys!</h5>
    <h6>ello guys!</h6>
    <p>let's try out some lists!</p>
    </div>
    <div>
    <img src={profilePic} alt="profile_pic" width="300" height="300"/> 
    </div>
    <div>
    <br/>
    <fieldset>
    
        <p>let's try out unoredered lists</p>
        <ul>
            <li>apple</li>
            <li>oranga</li>
            <li>mango</li>
        </ul>
        <p>ordered lists!</p>
        <ol type="I" start ='3'>
            <li>mango</li>
            <li>dragon fruit</li>
            <li>litchi</li>

        </ol>
       

    </fieldset>

    </div>
    <br/>
    <div>
    <main className = "container">
        <div className = "box">BLUE</div>
        <div className = "box">PINK</div>
        <div className = "box">PURPLE</div>
        <div className = "box">YELLOW</div>
    </main>
    <p>please click on the link to register!</p>
    </div>

</>
  );
}

export default App;

