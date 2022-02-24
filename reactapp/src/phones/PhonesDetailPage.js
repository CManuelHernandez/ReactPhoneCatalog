import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classes from "./Phone.module.css";

export const PhonesDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [phone, setPhone] = React.useState([]);

  React.useEffect(() => {
    //Api Call of the specific ID
    const getPhones = async () => {
      const url = `http://localhost:3000/phones/${id}`;
      const resp = await fetch(url);
      const results = await resp.json();
      setPhone(results.result);
    };
    getPhones();
  }, [id]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!phone) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container fluid className={classes.phoneSection}>
        <Container className={classes.phoneWrapper}>
          <Card className={classes.phoneCardViewDetail}>
            <Row>
              <Col md={3} className={classes.phoneDetailImg}>
                <Card.Img
                  className={classes.phoneImg}
                  src={`http://localhost:3000/${phone.imageFileName}`}
                  alt="card-img"
                />
              </Col>
              <Col md={9} className={classes.phoneDetailInfo}>
                <Card.Body className={classes.phoneDetailInfoText}>
                  <Card.Title>ID: {phone.id}</Card.Title>
                  <Card.Title>Name: {phone.name}</Card.Title>
                  <Card.Title>Email: {phone.manufacturer}</Card.Title>
                  <Card.Title>Email: {phone.description}</Card.Title>
                  <Card.Title>Email: {phone.color}</Card.Title>
                  <Card.Title>Email: {phone.price}</Card.Title>
                  <Card.Title>Email: {phone.screen}</Card.Title>
                  <Card.Title>Email: {phone.processor}</Card.Title>
                  <Button
                    className={`${classes.btnPrimary} ${classes.btnDetail}`}
                    onClick={handleReturn}
                  >
                    Retrun
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </Container>
    </>
  );
};
