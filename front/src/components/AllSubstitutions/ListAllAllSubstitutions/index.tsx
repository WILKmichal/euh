import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SubstitutionPage from "../../../Page/Substitution";
type Props = {
  inputText: String;
  SupprimerSubstitu: Function;
  fetchgetCategory: Function;
  Foods: any;
};
function ListAllAllSubstitutions(props: Props) {
  const latestProps = React.useRef(props);
  React.useEffect(() => {
    latestProps.current = props;
  });

  React.useEffect(() => {
    return () => latestProps.current.fetchgetCategory();
  }, []);

  console.log(props.Foods);

  //create a new array by filtering the original array
  const filteredData = props.Foods.filter((el: any) => {
    //if no input the return the original
    if (props.inputText.trim() === "" || props.inputText.length < 2) {
      return el;
    } else {
      if (el.brands !== null || el.brands !== undefined) {
        return (
          el.brands.toLowerCase().includes(props.inputText) ||
          el.code.toLowerCase().includes(props.inputText)
        );
      }
    }
  });

  const gotSubstitution = (id: string) => {
    window.location.href = `/substitution/${id}`;
  };
  return (
    <Container>
      <Row xs={1} sm={2} md={4}>
        {filteredData.map((product: any, index: number) =>
          product !== undefined ? (
            <Col key={product.brands + index}>
              <Card style={{ width: "100%", height: "350px" }}>
                {product.image_url === undefined ||
                product.image_url === null ||
                product.image_url === "" ? (
                  <Card.Img
                    style={{ width: "100%", height: "180px" }}
                    variant="top"
                    src={
                      "https://fr.openfoodfacts.org/images/icons/dist/packaging.svg"
                    }
                  />
                ) : (
                  <Card.Img
                    style={{ width: "100%", height: "180px" }}
                    variant="top"
                    src={product.image_url}
                  />
                )}
                <Card.Body>
                  <Card.Title>{product.brands}</Card.Title>
                  <Card.Text>{product.code}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row style={{ textAlign: "center" }}>
                    <Col>
                      <Button
                        variant="outline-primary"
                        onClick={() => gotSubstitution(product.code)}
                      >
                        Details
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="outline-danger"
                        onClick={() => props.SupprimerSubstitu(product.code)}
                      >
                        Supprmer
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              <br />
            </Col>
          ) : (
            "non"
          )
        )}
      </Row>
    </Container>
  );
}

export default ListAllAllSubstitutions;
