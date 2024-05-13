import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = ["goku", "tanjiro", "Eren"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
      <Button isLoading={isLoading} onClick={handleClick}>
        Bla bla bla
      </Button>
    </Card>
  );
  /*
  const [data, setData] = useState(["Goku", "Tanjiro", "Chanchito feliz"]);

  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button onClick={addMinion}>Agregar</Button>
      <Button onClick={delMinion}>Eliminar</Button>
      <List data={data} />
    </Card>
  );*/
}

export default App;
