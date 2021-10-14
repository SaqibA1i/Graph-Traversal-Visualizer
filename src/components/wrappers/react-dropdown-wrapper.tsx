import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { returnNames } from "./traversalOptions";

import { useAlg } from "../../context/GraphContext";

const options: any[] = returnNames();
const defaultOption: any = options[0];

function DropdownWrapper() {
  const { algorithm, setAlgorithm } = useAlg();
  return (
    <div>
      <Dropdown
        options={options}
        onChange={(arg) => {
          if (typeof arg.label == "string") {
            let assign: string = arg.label;
            setAlgorithm(assign);
          }
        }}
        value={algorithm}
        placeholder="Select an option"
      />
    </div>
  );
}
export default DropdownWrapper;
