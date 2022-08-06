import React,{useState} from 'react';

export default function SmarteCounter() {
const [number,setNumber] = useState(0)


  return (
    <div>
      <h1>Com useState</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber( number + 1 )} >Aumentar</button>
    </div>
  );
}