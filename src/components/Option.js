import React from "react";
import Button from "@material-ui/core/Button";
function Option(props) {
  return (
    <div>
      {props.option}
      <Button size="small" variant="contained" color="primary">
        Remove
      </Button>
    </div>
  );
}

export default Option;
