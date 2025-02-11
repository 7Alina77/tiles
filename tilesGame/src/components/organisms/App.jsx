import { useEffect, useState } from "react"
import Button from "../atoms/Button"
import Title from "../atoms/Title"
import { randomizeCards } from "../../constants/constants";
import CardsList from "../molecules/CardsList";
import Laps from "../atoms/Laps";
import GameWon from "../atoms/GameWon";

function App() {
  const [cards, setCards] = useState([]);
  const [laps, setLaps] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    setCards(randomizeCards());
    setLaps(0);
    setGameWon(false);
  },[]);

  useEffect(() => {
    const openCards = cards.filter((card) => card.isOpen && !card.isMatch);
    if (openCards.length === 2) {
      setLaps((prevLaps) => prevLaps + 1);
    }
  }, [cards]);

  useEffect(() => {
    const allMatched = cards.length > 0 && cards.every((card) => card.isMatch); 
    setGameWon(allMatched);
  }, [cards]);

  return (
    <>
    <div className='font-serif h-screen flex flex-col justify-between mx-auto my-0 text-center bg-custom-gradient-alpha overflow-auto'>
      <Title></Title>
      <Button randomizeCards={randomizeCards} setCards={setCards} setLaps={setLaps} />
      {gameWon === true ?
      (
        <GameWon laps={laps}></GameWon>
      )
      : 
      (
        <>
          <CardsList cards={cards} setCards={setCards}></CardsList>
          <Laps laps={laps}></Laps>
        </>
      )}
    </div>
    </>
  )
}

export default App
