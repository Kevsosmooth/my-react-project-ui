import { Button } from "@material-ui/core";
import Option from "./Option";
function Options(props) {
  return (
    <div>
      <Button size="small" variant="contained" color="primary">
        Remove All
      </Button>
      {props.option.map((op) => {
        return (
          <Option key={op} option={op} handleDelete={props.handleDelete} />
        );
      })}
    </div>
  );
}
export default Options;
