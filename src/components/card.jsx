import React from 'react'

const Card = (props) => {
  // console.log();
  
  return (
    <div className='dv'>
        <div className='card'>
            <img id='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvxTSEnrwX9bf4J96xrYmFsvUVPxbx434NP61hTlsrC8A6dsF9bQ1Wkpx&s=10" alt="" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='btn'>Click Here</button>
        </div>
    </div>
  )
}

export default Card