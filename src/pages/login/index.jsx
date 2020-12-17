import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import { Form, Container, Button } from "react-bootstrap";
import "./index.css";

export default function Login() {
  const firebase = useFirebaseApp();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = (event) => {
    event.preventDefault();

    console.log(`${email} - ${senha}`);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((result) => {
        localStorage.setItem("token", result.user.refreshToken);
      })
      .catch((error) => {
        if (email !== null && senha !== null) {
          alert("Dados inválidos");
        } else {
          alert("Preencha os campos");
        }
      });
  };

  return (
    <div>
      <Container className="form-height">
        <Form className="form-signin" onSubmit={(event) => logar(event)}>
          <div className="text-center">
            <img src="" alt="Nyous" style={{ width: "64px" }} />
          </div>
          <br />
          <small>Informe os dados Abaixo</small>
          <hr />

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Informe o email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="Informe a senha"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>

          <br />
          <br />
          <a href="/cadastrar" style={{ marginTop: "30px" }}>
            Não tenho conta!
          </a>
        </Form>
      </Container>
    </div>
  );
}
