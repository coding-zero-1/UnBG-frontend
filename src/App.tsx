import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Result from "./pages/Result"
import NotFound from "./pages/NotFound"
import BuyCredits from "./pages/BuyCredits"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
  import { ToastContainer} from 'react-toastify';
const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/buy" element={<BuyCredits/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      <ToastContainer closeButton closeOnClick theme="light" position="bottom-right"  />
    </div>
  )
}

export default App