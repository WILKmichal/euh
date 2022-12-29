import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { DeleteProduct, getFoodByCode, getProduct } from "../../core";
import ListAllAllSubstitutions from "./ListAllAllSubstitutions";
import ModalCompared from "./ModalCompared";

const AllSubstitutions = () => {
  const [inputText, setInputText] = useState("");
  const [show, setShow] = useState(false);

  const [Product, setProduct] = useState<any>({
    code: "",
    product: {
      brands: "",
      categories_tags: 'e,e,e,e',
      code: "",
      countries: "",
      image_url: "",
      ingredients_text: "",
      stores: "",
      keywords: 'test,test',
      success: "",
    },
    status: 0,
    status_verbose: "veuillez chercher un produit",
  });

  const [ProductSub, setProductSub] = useState<any>({
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

  const fetchgetFoodbyCode = async (code: string) => {
    try {
      const data = { code: code };
      const infoFoods = await getFoodByCode(data);
      if (infoFoods.success === true) {
        // setFoods(infoFoods);
        setProductSub(infoFoods);
      } else {
        // console.log("non");
      }
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <ModalCompared ProductSub={ProductSub} Product={Product} show={show} setShow={setShow} />
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
        setProduct={setProduct}
        setShow={setShow}
        Foods={Foods}
        fetchgetCategory={fetchgetFoods}
        inputText={inputText}
        DeleteProductbyCode={DeleteProductbyCode}
        fetchgetFoodbyCode={fetchgetFoodbyCode}
      />
    </>
  );
};

export default AllSubstitutions;
