import { Graph, vector, entry_position } from "../TS Classes/Graph";
import { useState, useEffect } from "react";
import { BFS } from "../algorithms/Breadth First Search";
import { HouseDoorFill, StarFill } from "react-bootstrap-icons";
import { GraphContext } from "../context/GraphContext";
import Header from "./header";
import { algorithmList } from "./wrappers/traversalOptions";
import { delay } from "../helper files/helperFunctions";
import { DFS } from "../algorithms/Depth First Search";
import Buttonbar from "./button";

function Body() {
  // creating the c
  const [algorithm, setAlgorithm] = useState<string>("Choose an algorithm");
  const [inProg, setinProg] = useState<boolean>(false);

  const [matrix, setMatrix] = useState<Graph>(new Graph());
  const [start, setStart] = useState<entry_position>({ row: 0, coloumn: 0 });
  const [dest, setDest] = useState<entry_position>({ row: 0, coloumn: 0 });

  const setGraphHelper = async (graph?: Graph) => {
    if (graph != undefined) {
      let n_g: Graph = new Graph([...graph.matrix]);
      setMatrix(n_g);
      await delay(1);
    } else {
      setMatrix(new Graph());
    }
  };
  const start_alg = async () => {
    console.log("Started Algorithm");
    if (algorithm === algorithmList[0].name) {
      setinProg(true);
      await BFS(matrix, start, dest, setGraphHelper);
      setinProg(false);
    } else if (algorithm === algorithmList[1].name) {
      setinProg(true);
      DFS(matrix, start, dest, setGraphHelper);
      setinProg(false);
    } else {
      alert("Not Valid Algorithm");
    }
  };

  useEffect(() => {
    //randomly place the start and end icon
    setStart({
      row: Math.floor(Math.random() * 44 + 0),
      coloumn: Math.floor(Math.random() * 44 + 0),
    });
    setDest({
      row: Math.floor(Math.random() * 44 + 0),
      coloumn: Math.floor(Math.random() * 44 + 0),
    });
  }, []);

  return (
    <>
      <GraphContext.Provider
        value={{
          algorithm: algorithm,
          setAlgorithm: setAlgorithm,
          inProg: inProg,
          start: start_alg,
          setGraph: setGraphHelper,
        }}
      >
        <Header />
        <Buttonbar />
        <h3>{algorithm}</h3>
        <div className="grid-container">
          {matrix.matrix.map((vec: vector, row_index: number) => {
            let row = [];
            for (let i = 0; i < vec.length; i++) {
              let entryNumber = i + 45 * row_index + 1;
              let className = "grid-box ";

              let block_val = [];
              if (start.row === row_index && start.coloumn === i) {
                block_val.push(<HouseDoorFill size={10} />);
              } else if (dest.row === row_index && dest.coloumn === i) {
                block_val.push(<StarFill size={10} />);
              } else {
                // block_val.push(vec[i].value);
              }
              if (vec[i].color != undefined) {
                className = "grid-box " + vec[i].color! + " ";
              }
              if (vec[i].value === 0) {
                className = "blocker ";
              }
              row.push(
                <button
                  className={className}
                  onMouseEnter={(event) => {
                    // console.log(matrix.get_neighbours(entryNumber));
                    // if left mouse button is held
                    if (event.buttons) {
                      matrix.set_0(row_index, i);
                      setGraphHelper(matrix);
                    }
                    document
                      .getElementById("grid" + entryNumber)!
                      .classList.add("hover");
                  }}
                  onClick={() => {
                    matrix.set_0(row_index, i);
                    setGraphHelper(matrix);
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("grid" + entryNumber)!
                      .classList.remove("hover");
                  }}
                  id={"grid" + entryNumber}
                  key={entryNumber}
                >
                  {block_val}
                </button>
              );
            }
            return <>{row}</>;
          })}
        </div>
      </GraphContext.Provider>
    </>
  );
}
export default Body;
