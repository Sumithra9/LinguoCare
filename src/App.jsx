import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

import Faq from './Components/Faq/Faq'
import Footer from './Components/Footer/Footer'
import Services from './Pages/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     <Faq/>
     <Services/>
     <Footer/>
    </>
  )
}

export default App
