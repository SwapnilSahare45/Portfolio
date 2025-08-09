import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className='relative'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-1 bg-[length:40px_40px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]"></div>
      
      {/* Main Content */}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact/>
    </div>
      <Footer/>
    </>

  )
}

export default App