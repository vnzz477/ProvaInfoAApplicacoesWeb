import { useState } from "react";
import { Link } from "react-router-dom";
import "./Inicio.scss"

export default function Inicio() {
    return (
        <body>
    
        <div className="conteudo">

            <h1 className="prova">Prova 3 Bimestre!</h1>

            <div className="intro">
                <Link className="tt" to="/multiplicacao">Ir para a pagina de multiplicacao</Link>
                <br />
                <Link className="tt" to="/dividir">Ir para a pagina de Divisão</Link>
            </div>
        </div>
        </body>
    )
}