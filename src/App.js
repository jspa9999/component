import logo from './logo.svg';
import './App.css';
import Cinemas from "./components/Cinemas";


function App() {
  return (
    <div className="App">

<section className="Movie">

<figure className="Tv">
    <img className="pic" src="./images/bahubali.webp"></img>
    <ul className="Songs">
    <audio  src="./audio/s1.mp3" controls></audio>
    <audio  src="./audio/s2.mp3" controls></audio>
    <audio  src="./audio/m1.mp3" controls></audio>
    <audio  src="./audio/m2.mp3" controls></audio>
    </ul>
    <video className="screen" src="./video/v1.mp4" controls></video>
    </figure>

   
  <Cinemas pic="./images/im.jpeg" song="./audio/b1.mp3" song1="./audio/b2.mp3"
   song3="./audio/b3.mp3" song4="./audio/b4.mp3" play="./video/v2.mp4"></Cinemas>  
   
   
  <Cinemas pic="./images/kan.jpg" song="./audio/k1.mp3" song1="./audio/k2.mp3"
   song3="./audio/k3.mp3" song4="./audio/k4.mp3" play="./video/v4.mp4"></Cinemas>  
   
   <Cinemas pic="./images/dj.webp" song="./audio/d1.mp3" song1="./audio/d2.mp3"
   song3="./audio/d3.mp3" song4="./audio/d4.mp3" play="./video/v3.mp4"></Cinemas>
   
     

      
     </section>
     </div> 
  )
}

export default App;
