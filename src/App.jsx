import { Route, Routes } from "react-router-dom";
import { Container } from "./components/style/container";
import { Hero } from "./components/partials/hero";
import { Contact } from "./components/webpages/contact";
import { Products } from "./components/webpages/products";
import { Footer } from "./components/partials/footer";
import { Login } from "./components/webpages/login";

function App() {
  return (
    <>
    <Container>

    <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/kontakt' element={<Contact/>} />
        <Route path='/produkter' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
      <Footer />
    
    </Container>
    
    </>
  );
}

export default App;