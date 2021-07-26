import React from "react";
import "../components/styles/Formulario.css";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";

export const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      asunto: "",
      mensaje: "",
    },
    onSubmit: (formData) => {
      console.log({ FormData });
    },
  });

  return (
    <div className="form-container">
      <Form onSubmit={formik.handleSubmit} className="formulario">
        <h1>Contáctenos.</h1>
        <p>
          Contactenos sobre cualquier cosa relacionada a nuestra empresa o
          nuestros servicios.
          <br></br>
          Haremos todo lo posible para darle una respuesta a la brevedad.
        </p>
        <Form.Group className="mb-3" controlId="formGroupNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAsunto">
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el asunto del mensaje"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Ingrese el mensaje"
          />
        </Form.Group>
        <div className="cont-button">
          <Button variant="dark" type="submit" className="boton">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
