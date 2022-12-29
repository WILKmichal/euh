import React from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";

type Props = {
  show: boolean;
  setShow: Function;
  Product: any;
  ProductSub: any;
};

const ModalCompared = (props: Props) => {
  //   console.log("sub : ");
  console.log(props.ProductSub);

  const goToAliment = (id: string) => {
    window.location.href = `/foods/${id}`;
  };

  const filteredData = props.ProductSub.product.categories_tags.map(
    (category: string, index: number) => {
      //if no input the return the original
      return (
        <ListGroup.Item key={index} onClick={() => goToAliment(category)}>
          {category}
        </ListGroup.Item>
      );
    }
  );

  const filteredDataKey = props.ProductSub.product._keywords.map(
    (category: string, index: number) => {
      //if no input the return the original
      return <ListGroup.Item key={index}>{category}</ListGroup.Item>;
    }
  );
  return (
    <>
      <Modal
        fullscreen={true}
        style={{ minWidth: "90vw" }}
        show={props.show}
        onHide={() => props.setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Difference
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Container style={{ width: "100% " }}>
                <Card style={{ width: "100% " }}>
                  <Card.Img
                    className="img"
                    style={{ width: "10rem" }}
                    variant="top"
                    src={props.Product.image_url}
                  />
                  <Card.Body>
                    <Card.Title>{props.Product.brands}</Card.Title>
                    <Card.Text>{props.Product.ingredients_text}</Card.Text>
                    <Card.Text>code : {props.Product.code}</Card.Text>
                  </Card.Body>

                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>mots clés</Accordion.Header>
                      <Accordion.Body>
                        <ListGroup className="list-group-flush">
                          {props.Product.keywords}
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>categories_tags</Accordion.Header>
                      <Accordion.Body>
                        <ListGroup className="list-group-flush">
                          {props.Product.categories_tags === undefined ? (
                            <>{console.log("undefined dddddd")}</>
                          ) : (
                            props.Product.categories_tags
                              .split(",")
                              .map((category: string, index: number) => (
                                <ListGroup.Item
                                  key={index}
                                  onClick={() => goToAliment(category)}
                                >
                                  {category}
                                </ListGroup.Item>
                              ))
                          )}
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card>
              </Container>
            </Col>
            <Col>
              <Container style={{ width: "100% " }}>
                <Card style={{ width: "100% " }}>
                  <Card.Img
                    className="img"
                    style={{ width: "10rem" }}
                    variant="top"
                    src={props.ProductSub.product.image_url}
                  />
                  <Card.Body>
                    <Card.Title>{props.ProductSub.product.brands}</Card.Title>
                    <Card.Text>
                      {props.ProductSub.product.ingredients_text}
                    </Card.Text>
                  </Card.Body>

                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Categories de l'aliment
                      </Accordion.Header>
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
                  </Accordion>
                </Card>
              </Container>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCompared;
