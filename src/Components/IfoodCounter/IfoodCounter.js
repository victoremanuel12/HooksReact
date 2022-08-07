import React, { useState, useEffect } from 'react';
import '../IfoodCounter/IfoodCounter.css'

export default function IfoodCounter() {
     const [value, setValue] = useState(1)
     const [BtnNegativoClass, setBtnNegativoClass] = useState("button-ativo")
     const [reais, SetReais] = useState(10)



     useEffect(() => {
          if (value > 1) {
               console.log(`item Dicionado `)
          }
     }, [value])


     function donw() {
          if (value <= 1) {
               setBtnNegativoClass("desative")
          } else if (value > 0) {
               setValue(value - 1)
               SetReais(reais - 10)
          }


     }
     function up() {
          setValue(value + 1)
          SetReais(reais + 10)
          setBtnNegativoClass("button-ativo")


     }
     return (
          <div className='container'>
               <button onClick={donw} className={BtnNegativoClass}>
                    -
               </button>
               <p>{value}</p>
               <button onClick={up} className="button-ativo">
                    +
               </button><br />

               <button id='moeda'>R${reais}</button>
          </div>
     );
}