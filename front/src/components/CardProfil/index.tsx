import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { getUser } from "../../core";


type Props = {
    getUserbyId : Function;
    user: any;
}

const CardProfil = (props : Props) => {

    const latestProps = React.useRef(props);
    React.useEffect(() => {
      latestProps.current = props;
    });
  
    React.useEffect(() => {
      return () => latestProps.current.getUserbyId();
    }, []);
  return (
    <Container>
      <Row style={{ textAlign: "center", marginTop: "5%" }}>
        <Card>
          <Card.Body>
            <Card.Title>Bonjour {props.user.name}</Card.Title>
            <Card.Text>email : </Card.Text>
            <Card.Text>{props.user.mail}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CardProfil;
