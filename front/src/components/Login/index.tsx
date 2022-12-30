import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from "react-icons/ai";

import { BiLockAlt } from "react-icons/bi";
import { login } from "../../core";
import styles from "./styles.module.scss";

const Login = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [passwordIconEye, setPasswordIconEye] = useState(true);

  const [error, setError] = useState<any>();

  const handelLogin = async () => {
    const datas = {
      mail: email,
      password: password,
    };

    setError(await login(datas));

    setshowAlert(true);
  };

  function goRegister() {
    window.location.href = "/register";
  }

  function handleChangeEmail(event: any) {
    setEamil(event.target.value);
  }

  function handleChangePassword(event: any) {
    setPassword(event.target.value);
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex flex-fill align-items-center container">
            <div className="row w-100">
              <div
                className="col-12 col-md-8 col-lg-5 mx-auto"
                style={{ marginTop: "10%" }}
              >
                {showAlert ? (
                  <Alert
                    onClose={() => setshowAlert(false)}
                    dismissible
                    variant={error.success ? "succes" : "danger"}
                  >
                    {error.message}
                  </Alert>
                ) : (
                  ""
                )}
                <div
                  style={{
                    backgroundColor: "#fff",
                  }}
                  className="card shadow-sm rounded p-4 border-0"
                >
                  <div className="card-body text-center d-flex flex-column justify-content-center">
                    <span
                      style={{ color: "#0d6efd" }}
                      className="empty-details"
                    >
                      Se connecter
                    </span>

                    <Form style={{ textAlign: "left" }}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: "#0d6efd" }}>
                          Adresse mail
                        </Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text
                            id="basic-addon1"
                            style={{ color: "#0d6efd" }}
                          >
                            <AiOutlineUser />
                          </InputGroup.Text>
                          <Form.Control
                            onChange={handleChangeEmail}
                            type="email"
                            placeholder="entrer votre mail"
                            aria-label="entrer votre mail"
                            // aria-describedby="basic-addon1"
                          />
                          <Form.Text className="text-muted">
                            Nous ne partagerons jamais votre e-mail avec
                            quelqu'un d'autre.
                          </Form.Text>
                        </InputGroup>

                        <Form.Label style={{ color: "#0d6efd" }}>
                          Mot de passe
                        </Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text
                            id="basic-addon1"
                            style={{ color: "#0d6efd" }}
                          >
                            <BiLockAlt />
                          </InputGroup.Text>
                          <Form.Control
                            onChange={handleChangePassword}
                            type={passwordIconEye ? "password" : "text"}
                            placeholder="entrer votre mot de passe"
                            aria-label="entrer votre mot de passe"
                            // aria-describedby="basic-addon1"
                          />
                          <InputGroup.Text
                            className={styles.InputGroup_text}
                            onClick={() => {
                              setPasswordIconEye(!passwordIconEye);
                            }}
                          >
                            {passwordIconEye ? (
                              <AiFillEyeInvisible />
                            ) : (
                              <AiFillEye />
                            )}
                          </InputGroup.Text>
                          <Form.Text className="text-muted">
                            Nous vous conseillons de ne partager jamais votre
                            mot de passe
                          </Form.Text>
                        </InputGroup>
                      </Form.Group>
                    </Form>
                    <span className="h4 empty-heading mt-3">
                      <Button onClick={handelLogin}>s'enregistrer</Button>
                    </span>
                    <span onClick={goRegister} className={styles.ForgotPassword}>
                      pas de compte ? s'enregistrer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
