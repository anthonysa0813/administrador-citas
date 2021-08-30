import React, { useEffect, useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";
import "./index.css";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const crearCitas = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const arrayFiltrado = citas.filter((item) => item.uid !== id);
    console.log(arrayFiltrado);
    setCitas(arrayFiltrado);
    // console.log(citas);
  };

  const titulo = citas.length === 0 ? "No hay Citas..." : "Citas agendadas";

  console.log(citas);

  return (
    <div className="container">
      <h1 className="text-center mt-4">Administrador de Citas</h1>
      <div className="row mt-3">
        <div className="col col-lg-6 col-md-6 col-12">
          <Formulario crearCitas={crearCitas} />
        </div>
        <div className="col col-lg-6 col-md-6 col-12 mt-2">
          <h2 className="text-center">{titulo}</h2>
          {citas.map((cita) => (
            <Cita key={cita.uid} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
