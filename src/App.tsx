//import { Post } from './Post.jsx';
//import { Header } from './components/Header.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home.tsx'
import { Responsiveness } from './pages/Responsiveness.tsx'
import { Components } from './pages/Components.tsx'
import { Api } from './pages/Api.tsx'
import './global.css'

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/responsiveness" element={<Responsiveness />} />
          <Route path="/components" element={<Components />} />
          <Route path="/api" element={<Api />} />
        </Routes>    
      </BrowserRouter>   
    </div>
  );
}
