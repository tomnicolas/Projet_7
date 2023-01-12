// Import packages and components 
import { Routes, Route } from "react-router-dom"
import { createGlobalStyle } from 'styled-components'
import Home from "./components/pages/Home"
import Logement from "./components/pages/Logement"
import About from "./components/pages/About"
import Error from "./components/pages/404"
import Header from "./components/header"
import Footer from "./components/footer"

// Stylize the body
const GlobalStyle = createGlobalStyle`
	body {
		text-align: center;
		margin: auto;
	}
`

// Export global routes of the app
export default function App() {
  return (
    <div>
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


