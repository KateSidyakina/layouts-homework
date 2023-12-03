import ShopCard from "../ShopCard/ShopCard";

export default function CardsView({cards, style}) {
  return (
    <div className='cards' style={style}>
      {cards.map((card) => <ShopCard card={card}/>)}
    </div>
  )
}