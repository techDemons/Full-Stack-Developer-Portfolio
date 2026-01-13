import './App.css'
import AnimatedBg from './components/AnimatedBg'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {


  
  return (
    
      <div className='min-h-screen w-full grid-pattern dark:grid-pattern-light'>
        <Header/>
        <AnimatedBg/>
        <main>
          <Hero/>
          <Projects/>
          <Contact/>
          <Footer/>
        </main>
       
      </div>
   
  )
}

export default App
