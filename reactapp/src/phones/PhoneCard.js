import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./Phone.module.css";

export const PhoneCard = ({
  id,
  name,
  manufacturer,
  description,
  color,
  price,
  imageFileName,
  screen,
  processor,
}) => {
  return (
    <Card className={classes.phoneCardView}>
      <Card.Body>
        <Card.Title>
          <strong>NAME:</strong> {name}
        </Card.Title>
        <Card.Text>Manufacturer: {manufacturer}</Card.Text>
        <Card.Text>Color: {color}</Card.Text>
        <Card.Text>Screen: {screen} Inches</Card.Text>
        <Card.Text>EMAIL: {processor} Ram</Card.Text>
        <img
          className={classes.phoneImg}
          src={`http://localhost:3000/${imageFileName}`}
          alt={imageFileName}
        />
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text>Price: {price} €</Card.Text>
        <Button className={classes.btnPrimary} href={`/${id}`}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
};
