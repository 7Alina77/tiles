import Card from "../atoms/Card";
import PropTypes from "prop-types";

function CardsList({cards, setCards}) {

  const onCardClick = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id && !card.isOpen
          ? { ...card, isOpen: true }
          : card
      )
    );
    
    setTimeout(() => {
      setCards((prevCards) => {
        const openCards = prevCards.filter((card) => card.isOpen && !card.isMatch);
        if (openCards.length === 2) {
  
          if (openCards[0].src !== openCards[1].src) {
            // Если карточки не совпали, то закрываем их обратно
            return prevCards.map((card) =>
              openCards.some((openCard) => openCard.id === card.id)
                ? { ...card, isOpen: false } 
                : card
            );
          } else {
            // Если карточки совпали, помечаем их как "найденные" (isMatch)
            return prevCards.map((card) =>
              openCards.some((openCard) => openCard.id === card.id)
                ? { ...card, isMatch: true } 
                : card
            );
          }
        }
        return prevCards;
      });
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="grid gap-3 max-w-2xl grid-cols-4 auto-rows-fr">
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClick={onCardClick}></Card>
        ))}
      </div>
    </div>
  )
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    })
  ).isRequired,
  setCards: PropTypes.func.isRequired,
};


export default CardsList;