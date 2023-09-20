import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Contactos from "./pages/Contactos";
import Blog from "./pages/Blog";
import LayoutPublic from "./layout/LayoutPublic";
import NotFound from "./pages/NotFound";
import Blogdetalles from "./pages/BlogDetalles";
const App = () => { 
  
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LayoutPublic/>}>
        <Route element={<Inicio/>} index/>
        <Route element={<Nosotros/>} path="/nosotros"/>
        <Route element={<Contactos/>} path="/contacto"/>
        <Route element={<Blog/>} path="/blog"/>
        <Route element={<Blogdetalles/>} path="/blog/:id"/>
        <Route element={<NotFound/>} path="*"></Route>//404
      </Route>
    </Routes>
  </>
  ) 
}

export default App;