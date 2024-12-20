import { useEffect, useState } from "react"
import Button from "./components/atoms/Button"
import Title from "./components/atoms/Title"
import { randomizeCards } from "./constants/constants";
import CardsList from "./components/molecules/CardsList";
import Laps from "./components/atoms/Laps";

function App() {
  const [cards, setCards] = useState([]);
  const [laps, setLaps] = useState(0);

  useEffect(() => {
    setCards(randomizeCards);
    setLaps(0);
  },[]);

  return (
    <>
    <div className='h-screen mx-auto my-0 p-4 text-center bg-custom-gradient-alpha'>
      <Title></Title>
      <Button randomizeCards={randomizeCards} setLaps={setLaps}></Button>
      <CardsList></CardsList>
      <Laps laps={laps}></Laps>
    </div>
    </>
  )
}

export default App
