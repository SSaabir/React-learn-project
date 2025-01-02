import React from 'react'
import propTypes from 'prop-types'

export default function List(props) {

    const category = props.category;
    const itemList = props.item;

    //fruits.sort((a,b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b) => b.name.localeCompare(a.name));
    //fruits.sort((a,b)=> a.calories - b.calories);
    //fruits.sort((a,b) => b.calories - a.calories);


    //const LowCalFruits = fruits.filter(fruit => fruit.calories < 80);
    //const HighCalFruits = fruits.filter(fruit => fruit.calories > 80);
  const listItems = itemList.map(item => <li key={item.id}>{item.name}:&nbsp; {item.calories}</li>);  
  
  return (
  <>
  <h2>{category}</h2>
  <ol>{listItems}</ol>
  </>
  )
}

List.PropTypes = {
    category: propTypes.string,
    item: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        calories: propTypes.number}))
}

List.defaultProps = {
    category: "Category",
    item: []
}
