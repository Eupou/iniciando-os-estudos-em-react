import Button from "../button"
import { useState } from "react"

const Card =  () => {

    const [valor,  setValor] = useState(0)

    function Adicionar() {
        setValor(valor + 1)
    }

    function Remover() {
        setValor(valor - 1)
    }

   return (
    <div className='card'>
        <div className='card-header'>
            Card
        </div>
        <div className='card-body'  >
            <p>Meu texto</p>
          <Button 
            type="button"
            className="btn btn-success" 
            texto="alegria"
            onClick={Adicionar}/>
          <Button 
            className='btn btn-danger' 
            texto='que alegria'
            onClick={Remover}/>
        </div>
        <p>{valor}</p>
    </div>
    )
}

export default Card