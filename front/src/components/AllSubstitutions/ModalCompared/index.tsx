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
                <p>element substitué :</p>
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
                    <Card.Text>
                      code : {props.ProductSub.product.code}
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
                  <Card.Body>
                    <Card.Link
                      target="blank"
                      href={`https://world.openfoodfacts.org/product/${props.ProductSub.product.brands}`}
                    >
                      Open Food
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Container>
            </Col>
            <Col>
              <Container style={{ width: "100% " }}>
                <p>element de substitution :</p>

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
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>categories_tags</Accordion.Header>
                      <Accordion.Body>
                        <ListGroup className="list-group-flush">
                          {props.Product.categories_tags === undefined ? (
                            <></>
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
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>mots clés</Accordion.Header>
                      <Accordion.Body>
                        <ListGroup className="list-group-flush">
                          {/* {props.Product.keywords} */}

                          {props.Product.keywords === undefined ? (
                            <></>
                          ) : (
                            props.Product.keywords
                              .split(",")
                              .map((keyword: string, index: number) => (
                                <ListGroup.Item key={index}>
                                  {keyword}
                                </ListGroup.Item>
                              ))
                          )}
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Card.Body>
                    <Card.Link
                      target="blank"
                      href={
                        props.Product.keywords === undefined
                          ? `https://world.openfoodfacts.org/product`
                          : `https://world.openfoodfacts.org/product/${props.Product.code}`
                      }
                    >
                      Open Food
                    </Card.Link>
                  </Card.Body>
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
