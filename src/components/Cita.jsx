import React from "react";
import "../citas.css";
import PropTypes from "prop-types";

const Cita = ({ cita, eliminarCita }) => {
  console.log(eliminarCita);
  const { mascota, propietario, fecha, hora, sintomas, uid } = cita;
  return (
    <div className="container-card mt-2">
      <strong className="text-center"> ID de Caso: "{uid}"</strong>
      <strong>Mascosa: {mascota}</strong>
      <strong>Propietario: {propietario}</strong>
      <strong>Fecha: {fecha}</strong>
      <strong>Hora: {hora}</strong>
      <strong>Sintomas: {sintomas}</strong>
      <button className="btn btn-danger mt-2" onClick={() => eliminarCita(uid)}>
        Eliminar &times;
      </button>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
