import ShopItem from "../ShopItem/ShopItem";

export default function ListView({items, style}) {
  return (
    <div className='items' style={style}>
      {items.map((item) => <ShopItem item={item}/>)}
    </div>
  )
}