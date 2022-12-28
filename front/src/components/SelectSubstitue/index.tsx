import React from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

import "./index.css";

type Props = {
  Substitution: any;
};

const SelectSubstitue = (props: Props) => {
  // const goToAliment = (id: string) => {
  //   window.location.href = `/foods/${id}`;
  // };

  // const filteredData = props.Substitution.product.map(
  //   (category: string, index: number) => {
  //     //if no input the return the original
  //     return (
  //       <ListGroup.Item onClick={() => goToAliment(category)}>
  //         {category}
  //       </ListGroup.Item>
  //     );
  //   }
  // );

  const gotSubstitution = (id: string) => {
    window.location.href = `/substitution/${id}`;
  };

  const filteredData = props.Substitution.map(
    (category: any, index: number) => {
      //if no input the return the original
      return (
        <>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Form.Check
                  label={category.brands}
                  name="group1"
                  type={"radio"}
                  id={`inline-${"radio"}-1`}
                />
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <img src={category.image_url} />
                  </Col>
                </Row>

                <Row>
                  <Col>{category.ingredients_text}</Col>
                </Row>
                <Row>
                  <Button onClick={() => gotSubstitution(category.code)}>
                    Details
                  </Button>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <br />
        </>
      );
    }
  );

  return (
    <>
      <Container>
        <Row>
          {/* <div className="scroll"> */}
          <Card className="scroll" style={{ width: "100% " }}>
            {filteredData}
          </Card>
          {/* </div> */}
        </Row>
        <br />
        <br />
        <Row>
          <Button>sauvegarder</Button>
        </Row>
      </Container>
    </>
  );
};

export default SelectSubstitue;
