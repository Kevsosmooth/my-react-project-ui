import React, { useState } from "react";
import FormField from "./components/FormField";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import Option from "./components/Option";
function App() {
  const [option, setOption] = useState([]);

  return (
    <div>
      <Container maxWidth="md">
        <Header />
        <Option option={option} />
        <FormField setOption={setOption} option={option} />
      </Container>
    </div>
  );
}
export default App;
