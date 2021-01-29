import React from "react";
import Button from "@material-ui/core/Button";
function App(props) {
  return (
    <div>
      <Button
        disabled={!props.option.length > 0}
        size="large"
        variant="contained"
        color="primary"
      >
        What should I do?
      </Button>
    </div>
  );
}
export default App;
