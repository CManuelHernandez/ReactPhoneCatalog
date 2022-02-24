import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
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
        <Card.Title className={classes.phoneCardTitle}>{name}</Card.Title>
        <Row>
          <Col md={6} className={classes.phoneInfo}>
            <Card.Text>Manufacturer: {manufacturer}</Card.Text>
            <Card.Text>Color: {color}</Card.Text>
          </Col>
          <Col md={6} className={classes.phoneInfo}>
            <Card.Text>Screen: {screen} Inches</Card.Text>
            <Card.Text>Processor: {processor} Ram</Card.Text>
          </Col>
        </Row>
        <img
          className={classes.phoneImg}
          src={`http://localhost:3000/${imageFileName}`}
          alt={imageFileName}
        />
        <Card.Text style={{ textAlign: "center", marginTop: 10 }}>
          Description: {description}
        </Card.Text>
        <Card.Text style={{ textAlign: "right", fontSize: 40 }}>
          {price} €
        </Card.Text>
        <Button className={classes.btnPrimary} href={`/${id}`}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
};
