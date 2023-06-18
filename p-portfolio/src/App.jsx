import './index.css'
import './font.css'
import Header from './components/Header'
import NavBar from './components/Navbar'
import About from './components/About'
import Works from './components/Works'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
function App() {

  return (
    <div className='bg-gray-900 p-2 '>

      <NavBar />
      <Header />
      <About />
      <Skills />
      <Works />
      <ContactMe />

    </div>
  )
}

export default App
