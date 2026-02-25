import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/header'
import Search from './components/header/search'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
