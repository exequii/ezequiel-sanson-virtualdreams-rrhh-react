import React from "react";
import { useState } from "react";
import "../components/styles/Formulario.css";
import { Form, Button, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Formulario = () => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      asunto: "",
      mensaje: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ingrese un nombre"),
      email: Yup.string().email().required("Ingrese un email valido"),
      asunto: Yup.string().required("Ingrese texto en el asunto"),
      mensaje: Yup.string().required("Ingrese un mensaje"),
    }),
    onSubmit: (formData) => {
      console.log({ formData });
      setShow(true);
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
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su Email"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="asunto">
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el asunto del mensaje"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.asunto}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.asunto}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="mensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Ingrese el mensaje"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.mensaje}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.mensaje}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="cont-button">
          <Button variant="dark" type="submit" className="boton">
            Enviar
          </Button>
        </div>
      </Form>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Formulario completado exitosamente!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Gracias por enviarnos un mensaje. Nuestros especialistas lo
            revisaran y le daran una respuesta a la brevedad.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Formulario;
