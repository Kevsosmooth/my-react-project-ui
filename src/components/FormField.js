import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function FormField(props) {
  // const handleAddOption = () =>{
  //     this.setState((prevProp)=>{
  //         return props.prevProp.concat(field)
  //     })
  // }
  //The above function is not working as expected

  const [field, setTextField] = useState("");
  const [error, setError] = useState(undefined);
  const addOption = () => {
    const fieldInput = field.trim();
    const error = props.handleAddOption(fieldInput);
    setError(error);

    if (!error) {
      setTextField("");
    }
  };
  return (
    <div>
      <TextField
        value={field}
        onChange={(e) => setTextField(e.target.value.trim())}
        id="outlined-basic"
        label="Options"
        variant="outlined"
      />
      {error && <p>{error}</p>}
      <Button onClick={addOption} variant="contained" color="primary">
        Add Option
      </Button>
    </div>
  );
}

export default FormField;
