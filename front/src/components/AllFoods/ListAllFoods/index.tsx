import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
type Props = {
  inputText: String;
  fetchgetCategory: Function;
  Foods: any;
};
function ListAllCategorie(props: Props) {
  const latestProps = React.useRef(props);
  React.useEffect(() => {
    latestProps.current = props;
  });

  React.useEffect(() => {
    return () => latestProps.current.fetchgetCategory();
  }, []);

  //create a new array by filtering the original array
  const filteredData = props.Foods.filter((el: any) => {
    //if no input the return the original
    if (props.inputText.trim() === "" || props.inputText.length < 2) {
      return el;
    } else {
      return el.name.toLowerCase().includes(props.inputText);
    }
  });

  return (
    <Container>
      <Row xs={2} md={4}>
        {filteredData.map((item: any) => (
          // <tr>
          //   <td>{item.id}</td>
          //   <td onClick={() => goToAliment(item.id)}>{item.name}</td>
          // </tr>
          <>
            {item.name !== undefined ? (
              <Col key={item.name + item.poids}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://www.pngkit.com/png/full/123-1230153_kelloggs-coco-pops-rocks.png"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.poids}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button>Details</Button>
                  </Card.Footer>
                </Card>
                <br />
              </Col>
            ) : (
              "non"
            )}
          </>
        ))}
      </Row>
    </Container>
  );
}

export default ListAllCategorie;
