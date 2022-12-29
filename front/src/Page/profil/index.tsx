import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import CardProfil from "../../components/CardProfil";
import { getUser } from "../../core";

const Profil = () => {
  const [user, setUser] = useState({ name: "", mail: "" });

  const getUserbyId = async () => {
    try {
      const infoUser = await getUser();
      if (infoUser.success === true) {
        setUser(infoUser);
      } else {
        setUser(infoUser);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row style={{ textAlign: "center", marginTop: "5%" }}>
        <CardProfil user={user} getUserbyId={getUserbyId} />
      </Row>
    </Container>
  );
};

export default Profil;
