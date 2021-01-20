import React from 'react';

// import React, { Component } from 'react';


import ImageP from '/Users/naderayadi/Desktop/checkpoint/checkpro/src/imageInPublic.jpg';
const Picture = (props) => {
    return (
      <div className='picture'>
        <img src={ImageP} className='picture'  alt="i"/>
        {props.children}
      </div>
    )
  }
  
export default Picture;