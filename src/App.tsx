import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home.tsx';
import NavBar from "./components/NavBar/index.tsx";
import Clientes from "./Pages/Clientes.tsx";
import MainWrapper from "./components/MainWrapper/index.tsx";
import Produtos from "./Pages/Produtos.tsx";
import Serviços from "./Pages/Serviços.tsx";
import Comprar from "./components/Buy/index.tsx";
import Dashboard from "./components/DashBoard/index.tsx";

export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <MainWrapper>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/clientes' element={<Clientes/>}/>
    <Route path='/produtos' element={<Produtos/>}/>
    <Route path='/serviços' element={<Serviços/>}/>
    <Route path='/comprar' element={<Comprar/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
    </MainWrapper>
    </BrowserRouter>
  )
}