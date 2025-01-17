import React, {useState} from 'react'

export default function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState();
  function quantityChange(event){
    setQuantity(event.target.value);
  }
  function handleNameChange (event){
    setName(event.target.value);
  }

  function makeComment(event){
    setComment(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input value={quantity} onChange={quantityChange} type='number' />
      <p>Quantity: {quantity}</p>
      <input value={comment} onChange={makeComment} placeholder='jingles' />
      <p>Comment: {comment}</p>
    </div>
  )
}
