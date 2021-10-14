import { entry_position, Graph, Vertex } from "../TS Classes/Graph";
import { Stack } from "../TS Classes/Stack";

// un weighted edges
export const DFS = async (
  graph: Graph,
  start: entry_position,
  dest: entry_position,
  setGraph: (graph: Graph) => Promise<void>
) => {
  // initiate all the vertices
  for (let row_index = 0; row_index < 45; ++row_index) {
    for (let coloumn_index = 0; coloumn_index < 45; ++coloumn_index) {
      let init_vertex: Vertex = graph.matrix[row_index][coloumn_index];
      init_vertex.color = "white";
      init_vertex.distanceToParent = -1;
      init_vertex.parent = undefined;
      graph.matrix[row_index][coloumn_index] = init_vertex;
    }
  }

  graph.matrix[start.row][start.coloumn].color = "gray";
  graph.matrix[start.row][start.coloumn].distanceToParent = 0;
  // Initiate BFS with Stack
  let Q = new Stack();
  Q.enstack(graph.matrix[start.row][start.coloumn]);

  // handle all neighburs before handling any children of children
  let found = false;
  while (!Q.isEmpty()) {
    let parent = Q.destack()!;
    let neighburs: any[] = graph.get_neighbours(parent.entryNumber);
    for (let i = 0; i < neighburs.length; i++) {
      let v: entry_position = neighburs[i];

      if (graph.matrix[v.row][v.coloumn].color == "white") {
        // i.e. un visited
        graph.matrix[v.row][v.coloumn].color = "gray"; // being discovered
        graph.matrix[v.row][v.coloumn].distanceToParent =
          parent.distanceToParent! + 1;
        graph.matrix[v.row][v.coloumn].parent = parent;
        Q.enstack(graph.matrix[v.row][v.coloumn]);
        await setGraph!(graph);
        if (v.row === dest.row && v.coloumn === dest.coloumn) {
          found = true;
          break;
        }
      }
    }
    if (found) {
      break;
    }
    parent.color = "black"; // i.e discovered
  }

  let d: Vertex | undefined = graph.matrix[dest.row][dest.coloumn];
  while (found) {
    if (d) {
      let row = graph.get_pos(d.entryNumber).row;
      let col = graph.get_pos(d.entryNumber).coloumn;
      graph.matrix[row][col].color = "path-found";
      await setGraph!(graph);
    } else {
      break;
    }
    d = d.parent;
  }
};
