import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { getCategory } from "../../core";
import ListAllCategorie from "./ListAllCategorie";

const AllCategorie = () => {
  // const [messages, setMessages] = useState<any>([]);
  // const [input, setInput] = useState("");

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   setMessages([...messages, input]);
  //   setInput("");
  // };

  const [inputText, setInputText] = useState("");
  const [Category, setCategory] = useState([]);
  let inputHandler = (e: any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const fetchgetCategory = async () => {
    try {
      const infoCategory = await getCategory();
      if (infoCategory.success === true) {
        setCategory(infoCategory);
      } else {
        setCategory(infoCategory);
      }
    } catch (err) {
      // setNoConnection(true);
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
                <Form.Label>Chercher une catégorie</Form.Label>
                <Form.Control
                  onChange={inputHandler}
                  type="text"
                  placeholder="Entrer le nom de la catégorie"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

      <ListAllCategorie
        Category={Category}
        fetchgetCategory={fetchgetCategory}
        inputText={inputText}
      />
    </>
  );
};

export default AllCategorie;
