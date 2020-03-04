import React from 'react';

function Number(props){
  const word = props.number % 2 === 0 ? 'even' : 'odd';
  return (
    <p>{word}</p>
  )
}

export default Number;