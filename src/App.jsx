import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './Page/Service/ScrolltoTop';
import { AnimatePresence } from "framer-motion";
import Portfolio from './Portfolio';
import UIUX from './Page/SubPages/UIUX';
import DetailsPage from './Page/SubPages/Details';
import GraphicList from './Page/SubPages/Graphic';


function App() {

  return (
    <BrowserRouter>
        <ScrollToTop/>
        <AnimatePresence initial={false} mode="wait">
        <Routes>
          <Route path="/" element={<Portfolio />}></Route>
          <Route path="/UIUX" element={<UIUX/>} />
          <Route path="/Graphic" element={<GraphicList/>} />
           {/* <Route path="/Visual-Design" element={<ResumeShowPage />} /> */}
            {/* <Route path="/Web" element={<BlogDetial/>} /> */}
          {/* <Route path="/Mobile" element={<BlogDetial/>} /> */}
          <Route path="/UIUX/Detail" element={<DetailsPage/>} />
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
  )
}

export default App
