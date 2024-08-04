import React from 'react'

function Cinemas(props){
  return (

   <div >
    <section className="Movie">

  <figure className="Tv">    
  <img className="pic" src={props.pic}></img>
  <div className="Songs">
   <audio  src={props.song} controls></audio>
   <audio  src={props.song1}controls></audio>
   <audio  src={props.song2} controls></audio>
   <audio  src={props.song3} controls></audio>
   </div>
   <video className="screen" src={props.play}controls></video>
   </figure>
   </section>
   
   
   </div>
   
  )
}

export default Cinemas