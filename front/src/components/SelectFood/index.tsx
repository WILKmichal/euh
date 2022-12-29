import React from "react";
import { Accordion, Card, Container, ListGroup, Row } from "react-bootstrap";

import "./index.css";

type Props = {
  fetchgetFoods: Function;
  Product: any;
};

const SelectFood = (props: Props) => {
  const latestProps = React.useRef(props);

  React.useEffect(() => {
    latestProps.current = props;
  });

  React.useEffect(() => {
    return () => latestProps.current.fetchgetFoods();
  }, []);

  const goToAliment = (id: string) => {
    window.location.href = `/foods/${id}`;
  };

  const filteredData = props.Product.product.categories_tags.map(
    (category: string, index: number) => {
      //if no input the return the original
      return (
        <ListGroup.Item key={index} onClick={() => goToAliment(category)}>
          {category}
        </ListGroup.Item>
      );
    }
  );

  const filteredDataKey = props.Product.product._keywords.map(
    (category: string, index: number) => {
      //if no input the return the original
      return (
        <ListGroup.Item key={index}>
          {category}
        </ListGroup.Item>
      );
    }
  );
  return (
    <>
      <Container style={{ width: "100% " }}>
        <Card style={{ width: "100% " }}>
          <Card.Img
            className="img"
            style={{ width: "10rem" }}
            variant="top"
            src={props.Product.product.image_url}
          />
          <Card.Body>
            <Card.Title>{props.Product.product.brands}</Card.Title>
            <Card.Text>{props.Product.product.ingredients_text}</Card.Text>
          </Card.Body>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categories de l'aliment</Accordion.Header>
              <Accordion.Body>
                <ListGroup className="list-group-flush">
                  {filteredData}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>mots clés</Accordion.Header>
              <Accordion.Body>
                <ListGroup className="list-group-flush">
                  {filteredDataKey}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>magasin</Accordion.Header>
              <Accordion.Body>
                <ListGroup className="list-group-flush">
                  {props.Product.product.stores}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0"></Accordion.Item>
          </Accordion>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default SelectFood;
