// import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homepage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { UseSelector, useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state)=> {
    state.mode
  });
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
