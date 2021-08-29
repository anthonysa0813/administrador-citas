import React, { useState } from "react";
import { uid } from "uid";
import PropTypes from "prop-types";

const Formulario = ({ crearCitas }) => {
  const [form, setForm] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, setError] = useState(false);

  const { mascota, propietario, fecha, hora, sintomas } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !mascota.trim() ||
      !propietario.trim() ||
      !fecha.trim() ||
      !hora.trim() ||
      !sintomas.trim()
    ) {
      console.log("Campo vacío!");
      setError(true);
      return;
    }
    setError(false);

    //agregando uid al estado

    form.uid = uid();
    console.log(form);
    console.log("procesando los datos");

    // creando citas
    crearCitas(form);
    setForm({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Formulario</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        {error && (
          <p className="alert alert-danger">
            Todos los campos son obligatorios...
          </p>
        )}
        <label className="mt-2">Nombre de la Mascota:</label>
        <input
          type="text"
          //   placeholder="Nombre Mascota"
          className="form-control"
          name="mascota"
          onChange={handleChange}
          value={mascota}
        />
        <label className="mt-2">Nombre del Dueño:</label>
        <input
          type="text"
          //   placeholder="Nombre Mascota"
          className="form-control"
          name="propietario"
          onChange={handleChange}
          value={propietario}
        />
        <label className="mt-2">Fecha:</label>
        <input
          type="date"
          className="form-control"
          name="fecha"
          onChange={handleChange}
          value={fecha}
        />
        <label className="mt-2">Hora:</label>
        <input
          type="time"
          className="form-control"
          name="hora"
          onChange={handleChange}
          value={hora}
        />
        <label className="mt-2">Sintomas:</label>

        <textarea
          name="sintomas"
          className="form-control"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button className="btn btn-primary btn-block mt-4 btn-lg" type="submit">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  crearCitas: PropTypes.func.isRequired,
};
export default Formulario;
