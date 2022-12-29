import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { DeleteProduct, getProduct } from "../../core";
import ListAllAllSubstitutions from "./ListAllAllSubstitutions";

const AllSubstitutions = () => {
  // const [messages, setMessages] = useState<any>([]);
  // const [input, setInput] = useState("");

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   setMessages([...messages, input]);
  //   setInput("");
  // };

  const [inputText, setInputText] = useState("");
  const [Foods, setFoods] = useState<any>([]);
  let inputHandler = (e: any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const fetchgetFoods = async () => {
    try {
      const infoFoods = await getProduct();
      if (infoFoods.success === true) {
        setFoods(infoFoods);
      } else {
        console.log(infoFoods);
        setFoods(infoFoods);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const DeleteProductbyCode = async (code: string) => {
    const infoFoods = await DeleteProduct(code);

    if (infoFoods.success === true) {
      fetchgetFoods();
    }
  };

  const SupprimerSubstitu = async (code: string) => {
    try {
      console.log(code);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Chercher un produit</Form.Label>
                <Form.Control
                  onChange={inputHandler}
                  type="text"
                  placeholder="Entrer le nom du produit"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <ListAllAllSubstitutions
        SupprimerSubstitu={SupprimerSubstitu}
        Foods={Foods}
        fetchgetCategory={fetchgetFoods}
        inputText={inputText}
        DeleteProductbyCode={DeleteProductbyCode}
      />
    </>
  );
};

export default AllSubstitutions;
