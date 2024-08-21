/* eslint-disable react/prop-types */
import './Property.css';

function Property({ item }) {
  const { id, name, rating, price } = item;
  //   console.log(value);
  return (
    <div id="property">
      <h1>{name}</h1>
      <h4>${price} per night.</h4>
      {id} {name} {rating} {price}
      <h4>{rating}⭐⭐⭐</h4>
    </div>
  );
}

export default Property;
