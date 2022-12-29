import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { getFoodByCode } from "../../core";

const SearchCode = () => {
  const [inputText, setInputText] = useState("");

  const [Product, setProducct] = useState<any>({
    code: "",
    product: {
      brands: "",
      categories_tags: [],
      code: "",
      countries: "",
      image_url: "",
      ingredients_text: "",
      stores: "",
      _keywords: [],
      success: "",
    },
    status: 0,
    status_verbose: "veuillez chercher un produit",
  });

  let inputHandler = (e: any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const fetchgetFoods = async () => {
    try {
      const data = { code: inputText };

      const infoFoods = await getFoodByCode(data);
      if (infoFoods.success === true) {
        // setFoods(infoFoods);
        setProducct(infoFoods);
      } else {
        // console.log("non");
      }
    } catch (err) {
      // console.log(err);
    }
  };

  const gotSubstitution = (id: string) => {
    window.location.href = `/substitution/${id}`;
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Label>Chercher un code bar</Form.Label>
            <Form className="d-flex">
              <Form.Control
                onChange={inputHandler}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button onClick={fetchgetFoods} variant="outline-success">
                Search
              </Button>
            </Form>
            <Form.Text className="text-muted">
              le code doit etre exacte pour marcher !
            </Form.Text>
          </Col>
        </Row>
      </Container>
      <br />

      {Product.status === 0 ? (
        <Container>
          <Row>
            <p style={{ textAlign: "center" }}>{Product.status_verbose}</p>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Card style={{ padding: "0" }}>
              <Card.Header> {Product.product.code}</Card.Header>
              <Card.Body>
                <Row xs={1} sm={2}>
                  <Col md={4}>
                    <img
                      className="img"
                      src={
                        Product.product.image_url === undefined ||
                        Product.product.image_url === ""
                          ? "https://fr.openfoodfacts.org/images/icons/dist/packaging.svg"
                          : Product.product.image_url
                      }
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Title> {Product.product.brands}</Card.Title>
                    <Card.Text>{Product.product.ingredients_text}</Card.Text>
                    <p style={{ textAlign: "right" }}>
                      <Button onClick={() => gotSubstitution(Product.product.code)} variant="primary">details</Button>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}
    </>
  );
};

// 8480000524058
export default SearchCode;
