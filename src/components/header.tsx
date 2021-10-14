import DropdownWrapper from "./wrappers/react-dropdown-wrapper";
import {
  CodeSlash,
  HouseDoorFill,
  StarFill,
  SquareFill,
} from "react-bootstrap-icons";
import { useAlg } from "../context/GraphContext";
import { useEffect } from "react";

function Header() {
  const { message } = useAlg();
  useEffect(() => {}, [message]);
  return (
    <>
      <div className="header-container">
        <div className="header-brand">
          <CodeSlash size={30} color={"#f2ce00"} />
          Graph Traversal Visualizer
        </div>
        <DropdownWrapper />
      </div>
      <div className="sub-header">
        <p>
          <HouseDoorFill size={20} color={"#333"} />
          Starting Position
        </p>
        <p>
          <StarFill size={20} color={"#333"} />
          Destination
        </p>
        <p>
          <SquareFill size={20} color={"#333"} />
          Blocked Nodes
        </p>
        {/* <h5>{message}</h5> */}
      </div>
    </>
  );
}
export default Header;
