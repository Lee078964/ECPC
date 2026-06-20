import './App.css'

import Header from "./Components/Header";
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Ministries from './Pages/Ministries';
import About from './Pages/About';
import NewsEvents from './Pages/NewsEvents';
import Contacts from './Pages/Contacts';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ministries' element={<Ministries />} />
          <Route path='/about' element={<About />} />
          <Route path='/news-events' element={<NewsEvents />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
