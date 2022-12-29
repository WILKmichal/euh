import React, { useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

import "./index.css";

type Props = {
  Substitution: any;
  NewPoduct: Function;
};

const SelectSubstitue = (props: Props) => {
  const [codeSubstitution, setCodeSubstitution] = useState("");
  const [producsubstitution, setproducsubstitution] = useState<any>("");


  const gotSubstitution = (id: string) => {
    window.location.href = `/substitution/${id}`;
  };

  const filteredData = props.Substitution.map(
    (category: any, index: number) => {
      //if no input the return the original
      return (
        <div key={index}>
          <Accordion.Item eventKey={String(index)}>
            <Accordion.Header>
              <Form.Check
                onClick={() => {
                  setproducsubstitution(category);
                  setCodeSubstitution(category.code);
                }}
                label={category.brands}
                name="group1"
                type={"radio"}
                id={`inline-${"radio"}-1`}
              />
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col>
                  <img
                    className="img"
                    src={
                      category.image_url === undefined
                        ? "https://fr.openfoodfacts.org/images/icons/dist/packaging.svg"
                        : category.image_url
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  {category.ingredients_text === undefined
                    ? "ingredient non disponnible"
                    : category.ingredients_text}
                </Col>
              </Row>
              <Row>
                <Button onClick={() => gotSubstitution(category.code)}>
                  Details
                </Button>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <br />
        </div>
      );
    }
  );

  return (
    <>
      <Container>
        <Row>
          {/* <div className="scroll"> */}
          <Card className="scroll" style={{ width: "100% " }}>
            <Accordion>{filteredData}</Accordion>
          </Card>
          {/* </div> */}
        </Row>
        <br />
        <br />
        <Row>
          <Button
            disabled={codeSubstitution === "" ? true : false}
            onClick={()=>{props.NewPoduct(codeSubstitution,producsubstitution)}}
          >
            sauvegarder
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default SelectSubstitue;
