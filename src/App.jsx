import './App.css'
import Home from './views/Home/Home'
import WhatsappButton from './components/WhatsappButton/WhatsappButton'
import { Suspense } from 'react'

function App() {
  
  return (
      <Suspense fallback="Cargando traducción">
        <Home/>
        <WhatsappButton/>
      </Suspense>
  )
}

export default App
