import React from "react";
import Button from "@material-ui/core/Button";
function App(props) {
  return (
    <div>
      <Button
        disabled={!props.option}
        size="large"
        variant="contained"
        color="secondary"
      >
        What should I do?
      </Button>
    </div>
  );
}
export default App;
