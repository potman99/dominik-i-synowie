import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Navigation />
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
