import { Button } from "@material-ui/core";
import React, { useState } from "react";

function Option(props) {
  const handleDelete = () => {
    console.log("Works");
  };
  return (
    <div>
      {props.option &&
        props.option.map((op) => {
          return (
            <div>
              {op}
              <Button
                onClick={handleDelete}
                variant="contained"
                color="primary"
              >
                Remove
              </Button>
            </div>
          );
        })}
    </div>
  );
}
export default Option;
