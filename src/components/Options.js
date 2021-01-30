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
          <Option handleDelete={props.handleDelete} key={op} option={op} />
        );
      })}
    </div>
  );
}
export default Options;
