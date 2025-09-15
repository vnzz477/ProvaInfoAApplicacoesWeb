import { useState } from "react";
import "./Dividir.scss"

export default function Dividir(){
    const [numero, setNumero] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

function calcularDivisao(){
    const calcular = Number(num1) / Number(num2)
setNumero(calcular)
}
        return(
<div>
<div className="cabecalho">
                <h1>Informe os valores nos campos abaixo para calcular a divisão deles</h1>
            </div>

            <br />
          <div className="cartoes">
            <div className="cartao">
                <label>Informe o Primeiro numero</label>
                <input value={num1} onChange={(e) => setNum1(e.target.value)} />
                
                <br />

                <label>Informe o segundo numero</label>
                <input value={num2} onChange={(e) => setNum2(e.target.value)} />
            </div>
            </div>
            <div className="but">
            <button onClick={calcularDivisao}>Calcular</button>
            </div>
            <h1 className="resul">Resultado: {numero}</h1>
</div>
        )
}
