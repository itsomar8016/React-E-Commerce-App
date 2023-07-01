import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, Typography, createTheme } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";


function App() {
  const [checked,setChecked] = useState(false);
  const paletteType = checked ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default:(paletteType) === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header checked={checked} handleChange={handleChange} />
        <Container>
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
