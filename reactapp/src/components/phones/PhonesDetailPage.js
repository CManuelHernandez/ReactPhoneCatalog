import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Loading } from "../helpers/Loading";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classes from "./Phone.module.css";

export const PhonesDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [phone, setPhone] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    //Api Call of the specific ID
    const getPhones = async () => {
      const url = `http://localhost:3000/phones/${id}`;
      const resp = await fetch(url);
      const results = await resp.json();
      setPhone(results.result);
    };
    getPhones();
    setLoading(true);
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
              {loading ? (
                <>
                  <Col md={3} className={classes.phoneDetailImg}>
                    <Card.Img
                      className={classes.phoneImg}
                      src={`http://localhost:3000/${phone.imageFileName}`}
                      alt="card-img"
                    />
                  </Col>
                  <Col md={9} className={classes.phoneDetailInfo}>
                    <Card.Body className={classes.phoneDetailInfoText}>
                      <Card.Title className={classes.phoneCardTitle}>
                        {phone.name} from {phone.manufacturer}
                      </Card.Title>
                      <Card.Title>Color: {phone.color}</Card.Title>
                      <Card.Title>Screen: {phone.screen} Inches</Card.Title>
                      <Card.Title>Processor: {phone.processor} Ram</Card.Title>
                      <br />
                      <Card.Title>Description: {phone.description}</Card.Title>
                      <Card.Title style={{ textAlign: "right", fontSize: 50 }}>
                        {phone.price} €
                      </Card.Title>
                      <Button
                        className={`${classes.btnPrimary} ${classes.btnDetail}`}
                        onClick={handleReturn}
                      >
                        Retrun
                      </Button>
                    </Card.Body>
                  </Col>
                </>
              ) : (
                <Loading />
              )}
            </Row>
          </Card>
        </Container>
      </Container>
    </>
  );
};
