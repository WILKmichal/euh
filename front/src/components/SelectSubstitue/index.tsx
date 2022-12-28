import React from "react";
import {
  Accordion,
  Button,
  Card,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

import "./index.css";

type Props = {
  Product: any;
};

const SelectSubstitue = (props: Props) => {
  const latestProps = React.useRef(props);

  const goToAliment = (id: string) => {
    window.location.href = `/foods/${id}`;
  };

  const filteredData = props.Product.product.categories_tags.map(
    (category: string, index: number) => {
      //if no input the return the original
      return (
        <ListGroup.Item onClick={() => goToAliment(category)}>
          {category}
        </ListGroup.Item>
      );
    }
  );

  const filteredDataKey = props.Product.product._keywords.map(
    (category: string, index: number) => {
      //if no input the return the original
      return (
        <ListGroup.Item onClick={() => goToAliment(category)}>
          {category}
        </ListGroup.Item>
      );
    }
  );
  return (
    <>
      <Container>
        <Row>
          {/* <div className="scroll"> */}
          <Card className="scroll" style={{ width: "100% " }}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <Form.Check
                    label="group1"
                    name="group1"
                    type={"radio"}
                    id={`inline-${"radio"}-1`}
                  />
                </Accordion.Header>
                <Accordion.Body>kjjbezkjbfkjzbjfezjzefjkfeb</Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <br />
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
