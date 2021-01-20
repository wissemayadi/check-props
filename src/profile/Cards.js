import React from 'react';
const Cards = ({
    member: { name, secondName, photo },
    handelName,
    desc,
  }) => {
    return (
      <Card style={{ width: "18rem", margin: "40px 0 40px 0" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{secondName}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="primary" onClick={() => handelName(name)}>
            Say Hi
          </Button>
        </Card.Body>
      </Card>
    );
  };
  

  export default Cards;