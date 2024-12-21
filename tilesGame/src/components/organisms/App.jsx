import { useEffect, useState } from "react"
import Button from "../atoms/Button"
import Title from "../atoms/Title"
import { randomizeCards } from "../../constants/constants";
import CardsList from "../molecules/CardsList";
import Laps from "../atoms/Laps";

function App() {
  const [cards, setCards] = useState([]);
  const [laps, setLaps] = useState(0);

  useEffect(() => {
    setCards(randomizeCards());
    setLaps(0);
  },[]);

  return (
    <>
    <div className='font-serif min-h-screen mx-auto my-0 p-4 text-center bg-custom-gradient-alpha'>
      <Title></Title>
      <Button randomizeCards={randomizeCards} setCards={setCards} setLaps={setLaps}></Button>
      <CardsList cards={cards}></CardsList>
      <Laps laps={laps}></Laps>
    </div>
    </>
  )
}

export default App
