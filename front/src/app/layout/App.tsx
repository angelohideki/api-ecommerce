import { Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/catalog/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ContactPage from "../../features/catalog/contact/ContactPage";
import HomePage from "../../features/catalog/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette:{
      mode: palleteType,
      background:{
        default: palleteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/catalog/:id' element={<ProductDetails />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
