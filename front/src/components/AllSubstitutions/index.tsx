import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getFoods } from "../../core";
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

  const params = useParams();

  const fetchgetFoods = async () => {
    try {
      const data = { category: params.id };

      const infoFoods = await getFoods(data);
      if (infoFoods.success === true) {
        setFoods(infoFoods);
      } else {
        const product: any[] = [];
        for (let index = 0; index < infoFoods.length; index++) {
          for (let i = 0; i < infoFoods[index].length; i++) {
            if (
              infoFoods[index][i].brands !== undefined &&
              infoFoods[index][i].code !== undefined
            ) {
              product.push(infoFoods[index][i]);
            }
          }
        }

        setFoods(product);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const SupprimerSubstitu = async (code : string) => {
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
      />
    </>
  );
};

export default AllSubstitutions;
