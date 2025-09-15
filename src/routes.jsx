import { BrowserRouter, Routes, Route } from "react-router";
import Multiplicacao from "./pages/Multiplicacao"
import Inicio from "./pages/Inicio"
import Dividir from "./pages/Dividir";

export default function Navegacao(){
    return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Inicio/>}></Route>
        <Route path="/multiplicacao" element={<Multiplicacao/>}></Route>
        <Route path="/dividir" element={<Dividir/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}