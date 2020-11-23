import React from "react";
import { ContactFunnel } from "./components/ContactFunnel";
import { Funnel, GlobalStyle } from "./components/Styled";

function App() {
  return (
    <Funnel>
      <GlobalStyle />
      <header style={{ marginBottom: 20, fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        React Hook Form Wizard Example
      </header>

      <ContactFunnel />
    </Funnel>
  );
}

export default App;
