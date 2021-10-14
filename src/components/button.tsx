import { useAlg } from "../context/GraphContext";
import { useEffect } from "react";
import { CaretRightFill, Stop, BootstrapReboot } from "react-bootstrap-icons";
function Buttonbar() {
  const { inProg, start, setGraph } = useAlg();
  useEffect(() => {}, [inProg]);
  return (
    <div className="button-bar">
      <div
        onClick={() => {
          if (!inProg) {
            return start!();
          }
        }}
        className={!inProg ? "button" : "button-disabled"}
      >
        <CaretRightFill size={25} color={"green"} />
      </div>
      <div
        onClick={() => {
          if (inProg) {
            return (window.location.href = "/");
          }
        }}
        className={inProg ? "button" : "button-disabled"}
      >
        <Stop size={25} color={"red"} />
      </div>
      <div
        className={!inProg ? "button" : "button-disabled"}
        onClick={() => {
          if (!inProg) {
            return setGraph!();
          }
        }}
      >
        <BootstrapReboot size={25} color={"blue"} />
      </div>
    </div>
  );
}
export default Buttonbar;
