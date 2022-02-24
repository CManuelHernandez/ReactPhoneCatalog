import React from "react";
import { PhoneCard } from "./PhoneCard";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./Phone.module.css";

export const PhonesPage = () => {
  const [phone, setPhones] = React.useState([]);

  React.useEffect(() => {
    getPhones();
  }, []);

  const getPhones = async () => {
    const url = "http://localhost:3000/phones";
    const resp = await fetch(url);
    const results = await resp.json();
    console.log(results);

    const apiPhones = results.map((phone) => {
      return {
        id: phone._id,
        name: phone.name,
        manufacturer: phone.manufacturer,
        description: phone.description,
        color: phone.color,
        price: phone.price,
        imageFileName: phone.imageFileName,
        screen: phone.screen,
        processor: phone.processor,
      };
    });
    setPhones(apiPhones);
  };

  return (
    <>
      <Container fluid className={classes.phoneSection}>
        <Container className={classes.phoneWrapper}>
          <Col md={12} className={classes.phoneInfoTitle}>
            <div>
              <h1 className={classes.phoneHeading}>
                <strong className="turquoise"> REACT </strong> - Phone Catalog
              </h1>
              <h2 className={classes.phoneSubtitle}>
                Carlos Manuel Hernández Montero
              </h2>
            </div>
          </Col>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {phone.map((phone) => (
              <Col md={5} className={classes.phoneCard}>
                <PhoneCard
                  key={phone.id}
                  md={4}
                  className={classes.phoneCard}
                  name={phone.name}
                  manufacturer={phone.manufacturer}
                  description={phone.description}
                  color={phone.color}
                  price={phone.price}
                  imageFileName={phone.imageFileName}
                  screen={phone.screen}
                  processor={phone.processor}
                  {...phone}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};
