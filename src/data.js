import React from 'react';


const ActionComponent = ({Firstname}) => {
        const handleClick = (x) => {
        
          alert (`my name is `+x);
        };
       
        return (
          <a href="/" onClick={()=>handleClick(Firstname)}>
           
            Click me
          </a>
        );
       }



export default ActionComponent;