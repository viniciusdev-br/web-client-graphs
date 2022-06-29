import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AlgorithmsPage } from "./components/pages/algorithms";
import { HomePage } from "./components/pages/home";

export function App() {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          fontFamily: "Sora, sans-serif",
        },
      }),
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/algorithms" element={<AlgorithmsPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
