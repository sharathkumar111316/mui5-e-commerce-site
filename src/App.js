import { ThemeProvider } from "@mui/system";
import { Box, Container, Typography } from "@mui/material";
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from "./components/appbar/index";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./components/search";

function App() {

  useEffect(() => {
    document.title = "React Material UI - Home";
  },[])

  return (    
    <ThemeProvider theme={theme}>
    <Container
      maxWidth='xl'
      sx={{
        background: "#fff"
      }}
    >
      <UIProvider>
      <Appbar />
      <Banner />
      <Promotions />
      <Box display="flex" justifyContent={"center"} sx={{ p: 4}}>
        <Typography variant="h4">Our Products</Typography>
      </Box>
      <Products />
      <Footer />
      <AppDrawer />
      <SearchBox />
    </UIProvider>
    </Container>
    </ThemeProvider>
  );
}

export default App