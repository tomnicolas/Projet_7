import { Routes, Route } from "react-router-dom"
import { createGlobalStyle } from 'styled-components'
import Home from "./components/pages/Home/Home"
import Logement from "./components/pages/Logement/logement"
import About from "./components/pages/About/about"
import Error from "./components/pages/404/404"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

const GlobalStyle = createGlobalStyle`
	body {
		text-align: center;
		padding: 40px 3% 0 3%;
		margin: auto;
	}
`

function App() {
  return (
    <div className="App">
		<GlobalStyle/>
		<Header/>
		<Routes>
			<Route path="/" element={<Home/>}></Route>
			<Route path="/logement/:id" element={<Logement/>}></Route>
			<Route path="/about" element={<About/>}></Route>	
			<Route path="/*" element={<Error/>}></Route>
		</Routes>      
		<Footer/>
    </div>
  )
}

export default App
