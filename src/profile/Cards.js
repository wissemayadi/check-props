import React from 'react';

const Cards = ({Firstname}) => {
  const handleClick = (x) => {
  
    alert (`my name is `+x);
  };
 
  return (
    

<Card style={{ width: "18rem", margin: "40px 0 40px 0" }}>
      <Card.Img variant="top" />
      <Card.Body>
          <Card.Title></Card.Title>
         <Card.Title></Card.Title>
          <Card.Text></Card.Text>
         <Button variant="primary"  onClick={()=>handleClick(Firstname)} />
              
      </Card.Body>
      </Card>
   )
   }
  
 
  

  export default Cards;

  
