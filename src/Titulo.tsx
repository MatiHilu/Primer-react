function Titulo() {
  const nombre = "Chancho";
  if (nombre) {
    return <h1>hola {nombre}</h1>;
  }
  return <h1>Hola Mundo</h1>;
}

export default Titulo;
