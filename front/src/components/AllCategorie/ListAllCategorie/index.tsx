import React from "react";
import { Table } from "react-bootstrap";
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
  //   const category: any[] = [
  //     { id: 1, name: "vegetable" },
  //     { id: 2, name: "cheese" },
  //     { id: 3, name: "zefzefezef" },
  //     { id: 4, name: "manger" },
  //     { id: 5, name: "boof" },
  //     { id: 6, name: "grreeeeee" },
  //     { id: 7, name: "lirezfioerhgiore" },
  //     { id: 8, name: "oiezhfoiezhgofheziof" },
  //     { id: 9, name: "vuyev" },
  //     { id: 10, name: "qsertyujnbgtyu" },
  //   ];

  const goToAliment = (id: number) => {
    window.location.href = `/food/${id}`;
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item: any) => (
            <tr>
              <td>{item.id}</td>
              <td onClick={() => goToAliment(item.id)}>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListAllCategorie;
