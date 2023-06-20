import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import './assets/styles/main.scss'

import { Header } from './components/Header/Header'
import { HomeApp } from './views/HomeApp/HomeApp';
import { FormUser } from './views/FormUser/FormUser';
import { List } from './views/List/List';
import {Footer} from './components/Footer/Footer'
import { ListNews } from './components/ListNews/ListNews';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      // <GlobalProvider>
      <BrowserRouter>
        <div className='container-base'>
        <Header />
        <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/User" element={<FormUser />} />
        <Route path="/List" element={<List />} />
        <Route path="/ListNews" element={<ListNews />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
      // </GlobalProvider>
       

    
  )
}

export default App
