import React from "react";
import { Container, Table } from "react-bootstrap";
import { FiLink } from "react-icons/fi";
import styles from "./styles.module.scss";

type Props = {
  inputText: String;
  fetchgetCategory: Function;
  Category: any;
};
function ListAllCategorie(props: Props) {

  const latestProps = React.useRef(props);
  React.useEffect(() => {
    latestProps.current = props;
  });

  React.useEffect(() => {
    return () => latestProps.current.fetchgetCategory();
  }, []);

  const goToAliment = (id: number) => {
    window.location.href = `/foods/${id}`;
  };

  //create a new array by filtering the original array
  const filteredData = props.Category.filter((el: any) => {
    //if no input the return the original
    if (props.inputText.trim() === "" || props.inputText.length < 2) {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(props.inputText);
    }
  });
  return (
    <>
      <Container>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>url open food </th>
              <th>nombre de produit</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item: any) => (
              <tr key={item.id_catego}>
                <td>{item.id_catego}</td>
                <td className={styles.lignetableauLienVersFoods} onClick={() => goToAliment(item.id_catego)}>{item.name}</td>
                <td>
                  <a href={item.url} target="blank">
                    <FiLink />
                  </a>
                </td>
                <td>{item.products}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default ListAllCategorie;
