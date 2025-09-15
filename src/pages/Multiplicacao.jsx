import { useState } from "react";
import "./Multiplicacao.scss"

export default function Prova() {
    const [numero, setNumero] = useState(0)
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)


    function calcular() {
        let resultado = Number(n1) * Number(n2);
        setNumero(resultado)
    }

    return (
        <div>

            <div className="cabecalho">
                <h1>Informe os valores nos campos abaixo para calcular a multiplicação deles</h1>
            </div>

            <br />
          <div className="cartoes">
            <div className="cartao">
                <label>Informe o Primeiro numero</label>
                <input value={n1} onChange={(e) => setN1(e.target.value)} />
                
                <br />

                <label>Informe o segundo numero</label>
                <input value={n2} onChange={(e) => setN2(e.target.value)} />
            </div>
            </div>
            <div className="but">
            <button onClick={calcular}>Calcular</button>
            </div>
            <h1 className="resul">Resultado: {numero}</h1>
        </div>
    )
}