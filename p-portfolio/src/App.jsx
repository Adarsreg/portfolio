import './index.css'
import './font.css'
import Header from './components/Header'
import NavBar from './components/Navbar'
import About from './components/About'
import Works from './components/Works'
import Skills from './components/Skills'

function App() {

  return (
    <div className='bg-gray-800 p-2 '>

      <NavBar />
      <Header />
      <About />
      <Skills />
      <Works />


    </div>
  )
}

export default App
