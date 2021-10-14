import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { algorithmList, returnNames } from "./traversalOptions";

import { useAlg } from "../../context/GraphContext";
const options: any[] = returnNames();
const defaultOption: any = options[0];

function DropdownWrapper() {
  const { algorithm, setAlgorithm, setMessage } = useAlg();
  return (
    <div>
      <Dropdown
        options={options}
        onChange={(arg) => {
          if (typeof arg.label == "string") {
            let assign: string = arg.label;
            setAlgorithm(assign);
            setMessage!(algorithmList[0].message);
          }
        }}
        value={algorithm}
        placeholder="Select an option"
      />
    </div>
  );
}
export default DropdownWrapper;
