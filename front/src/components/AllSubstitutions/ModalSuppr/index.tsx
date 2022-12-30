import React from "react";
import { Alert, Button, Col, Modal, Row } from "react-bootstrap";
import { DeleteProduct } from "../../../core";
import "./index.css";

type Props = {
  setShowAlert: Function;
  showAlert: boolean;
  fetchgetFoods: Function;
  Product: any;
};

const ModalSuppr = (props: Props) => {
  const DeleteProductbyCode = async (code: string) => {
    const infoFoods = await DeleteProduct(code);

    if (infoFoods.success === true) {
      props.fetchgetFoods();
      props.setShowAlert(false);
    }
  };

  const handleClose = () => props.setShowAlert(false);
  return (
    <>
      <Modal
        onHide={handleClose}
        show={props.showAlert}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Alert variant="danger" style={{ height: "100%", margin:'0'}}>
          <Alert.Heading>Attention n°{props.Product.code}</Alert.Heading>
          <p>
            Voulez vous reelement supprimer le produit {props.Product.brands}
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Row>
              <Col>
                <Button
                  onClick={() => DeleteProductbyCode(props.Product.code)}
                  variant="outline-danger"
                >
                  Supprimer
                </Button>
              </Col>
              <Col>
                <Button onClick={handleClose} variant="outline-success">
                  annuler
                </Button>
              </Col>
            </Row>
          </div>
        </Alert>
      </Modal>
    </>
  );
};

export default ModalSuppr;
