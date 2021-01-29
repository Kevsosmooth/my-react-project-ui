import React, { useState } from "react";
import FormField from "./components/FormField";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import Options from "./components/Options";
function App() {
  const [option, setOption] = useState([]);

  const handleDelete = () => {
    console.log("Works");
  };
  const handleAddOption = (options) => {
    if (!options) {
      return "Enter valid value to add item";
    } else if (option.indexOf(options) > -1) {
      return "Option already exsist";
    }
    setOption((prev) => [...prev, options]);
  };
  return (
    <div>
      <Container maxWidth="md">
        <Header />
        <Options handleDelete={handleDelete} option={option} />
        <FormField
          handleAddOption={handleAddOption}
          setOption={setOption}
          option={option}
        />
      </Container>
    </div>
  );
}
export default App;
