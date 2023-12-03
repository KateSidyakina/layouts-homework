export default function ShopItem({item}) {
  return (
    <div className='item'>
      <img className='img' src={item.img} alt={item.name} />
      <h2 className='name'>{item.name}</h2>
      <span>{item.color}</span>
      <span className='price'>${item.price}</span>
      <button className='button'>Add to card</button>
    </div>
  )
}