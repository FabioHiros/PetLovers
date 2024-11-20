import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home.tsx';
import NavBar from "./components/NavBar/index.tsx";
import Clientes from "./Pages/Clientes.tsx";
import MainWrapper from "./components/MainWrapper/index.tsx";
import Produtos from "./Pages/Produtos.tsx";
import Serviços from "./Pages/Serviços.tsx";

import Dashboard from "./components/DashBoard/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pets from "./Pages/Pets.tsx";
import Compras from "./Pages/Compras.tsx";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
    <NavBar/>
    <MainWrapper>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/clientes' element={<Clientes/>}/>
    <Route path='/produtos' element={<Produtos/>}/>
    <Route path='/serviços' element={<Serviços/>}/>
    <Route path='/comprar' element={<Compras/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/pets' element={<Pets/>}/>

    </Routes>
    </MainWrapper>
    </BrowserRouter>
    </QueryClientProvider>
  )
}