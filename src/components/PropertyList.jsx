/* eslint-disable react/prop-types */
import './PropertyList.css'
import Property from './Property';

export default function PropertyList({ obj }) {
  return (
    <section id="propertyWrapper">
      {obj.map((i) => (
        <Property item={i} key={i.id} />
      ))}
    </section>
  );
}
