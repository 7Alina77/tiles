import Card from "../atoms/Card";
import PropTypes from "prop-types";

function CardsList({cards}) {
  return (
    <div className="flex justify-center items-center">
      <div className="grid gap-3 max-w-2xl grid-cols-4 auto-rows-fr">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
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
};


export default CardsList;