import{BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Cadastro } from './pages/Cadastro'
import { Login } from './pages/Login'
import { Carteira } from './pages/Carteira'
import { Deposito } from './pages/Deposito'
import { Jogo } from './pages/Jogo'
import { Jogo2 } from './components/Jogo2'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element ={<Home/>}/>
      <Route path="/Cadastro" element ={<Cadastro/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Carteira' element={<Carteira/>}/>
      <Route path='/Deposito' element={<Deposito/>}/>
      <Route path='/Jogo' element={<Jogo/>} />
      <Route path='/Jogo2' element={<Jogo2/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
