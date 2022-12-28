import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getFoods } from "../../core";
import ListAllFoods from "./ListAllFoods";

const AllFoods = () => {
  // const [messages, setMessages] = useState<any>([]);
  // const [input, setInput] = useState("");

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   setMessages([...messages, input]);
  //   setInput("");
  // };

  const [inputText, setInputText] = useState("");
  const [Foods, setFoods] = useState([]);
  let inputHandler = (e: any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const params = useParams();
  
  const fetchgetFoods= async () => {
    try {

      const data={category: params.id}
    
      const infoFoods= await getFoods(data);
      if (infoFoods.success === true) {
        setFoods(infoFoods);
      } else {
        // console.log("error");
        // console.log(infoCategory);
      }
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

      <ListAllFoods
        Foods={Foods}
        fetchgetCategory={fetchgetFoods}
        inputText={inputText}
      />
    </>
  );
};

export default AllFoods;

