import React from 'react';

export default function Counter() {
  let number = 10
  function upQuantity() {
    number = number + 1
    document.getElementById("box-number").innerHTML = number
    console.log(number)
  }


  return (
    <div>
      <h1>Sem useState</h1>
      <h2 id='box-number'>{number}</h2>
      <button onClick={upQuantity}>Aumentar</button>
    </div>
  );
}