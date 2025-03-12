import { useState, useEffect } from "react";
import { Buscar } from "./Components/Buscar";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState(""); 
  const [tragos, setTragos] = useState([]); 

  const obtenerDatos = async (nombreTrago) => {
    if (nombreTrago.trim() === "") return; 
    try {
      let respuesta = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreTrago}`
      );
      let datos = await respuesta.json();
      setTragos(datos.drinks || []); 
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const buscarTragos = async () => {
    try {
      let respuesta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      let datos = await respuesta.json();
      if (datos.drinks) {
        setNombre(datos.drinks[0].strDrink); 
        setTragos(datos.drinks); 
      }
    } catch (error) {
      console.error("Error al obtener trago aleatorio:", error);
    }
  };

  useEffect(() => {
    obtenerDatos(nombre);
  }, [nombre]);

  return (
    <>
      <h1>Buscar Tragos</h1>
      <input
        type="text"
        placeholder="Escribe el nombre de un trago"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} 
      />
      <button onClick={buscarTragos}>🍹 Trago Random</button> {}
      <Buscar tragos={tragos} /> {}
    </>
  );
}

export default App;
