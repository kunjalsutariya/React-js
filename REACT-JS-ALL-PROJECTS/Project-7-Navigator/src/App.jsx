import 'bootstrap/dist/css/bootstrap.min.css'
import Add from './pages/Add'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './Pages/View'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View/>}/>
        <Route path="/Add" element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App