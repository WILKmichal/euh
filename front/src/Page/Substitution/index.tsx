import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SelectFood from "../../components/SelectFood";

const SubstitutionPage = (props: any) => {

  return (
    <>
      <Container style={{marginTop: '5%'}}>
        <Row xs={1} sm={2} md={4}>
          <Col>
            <SelectFood />
          </Col>
          <Col>subsubsubsubsubsub</Col>
        </Row>
      </Container>
    </>
  );
};

export default SubstitutionPage;
