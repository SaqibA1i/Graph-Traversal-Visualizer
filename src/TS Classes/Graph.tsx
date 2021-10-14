import reportWebVitals from "../reportWebVitals";

const n: number = 45;
export interface Vertex {
  color?: string;
  distanceToParent?: number;
  value: Number;
  parent?: Vertex | undefined;
  entryNumber: number;
}
export type entry_position = {
  row: number;
  coloumn: number;
};
export type vector = Vertex[];
// An n x n matrix denoting if two verticies
//  are connected i.e. matrix[i][j] would output
//  1 if they were both connected
//  Since the provided demo is hardcoded to 2025 vertices
//  the vertex needs to be 2025 by 2025
export class Graph {
  public matrix: vector[];
  public constructor(arg?: vector[]) {
    if (arg == undefined) {
      let arg_n: vector[] = [];
      for (let i = 0; i < n; i++) {
        let ith_row: Vertex[] = [];
        for (let j = 0; j < n; j++) {
          let n: Vertex = { value: 1, entryNumber: 1 + i * 45 + j };
          ith_row.push(n);
        }
        arg_n.push(ith_row);
      }
      this.matrix = arg_n;
    } else {
      this.matrix = arg!;
    }
  }
  public get(i: number, j: number): Number {
    if (i >= n || j >= n) {
      console.log("OOB ERROR");
    }
    return this.matrix[i][j].value;
  }

  public get_pos(arg: number): entry_position {
    let coloumn: number = (arg - 1) % 45; // [0,1,....,45]
    let row: number = 0;
    // see how many times 45 can be removed from it
    while (arg > 45) {
      arg -= 45;
      ++row;
    }
    return { row: row, coloumn: coloumn };
  }
  public get_neighbours(arg: number): entry_position[] {
    let coloumn: number = (arg - 1) % 45; // [0,1,....,45]
    let row: number = 0;
    // see how many times 45 can be removed from it
    while (arg > 45) {
      arg -= 45;
      ++row;
    }
    let result: entry_position[] = [];
    // check each of the 6 connected vertexes
    // // Top Right
    // if (row - 1 >= 0 && coloumn + 1 < n && this.get(row - 1, coloumn + 1)) {
    //   result.push({ row: row - 1, coloumn: coloumn + 1 });
    // }
    // // Top Left
    // if (coloumn - 1 >= 0 && row - 1 >= 0 && this.get(row - 1, coloumn - 1)) {
    //   result.push({ row: row - 1, coloumn: coloumn - 1 });
    // }
    // // Bottom Left
    // if (row + 1 < n && coloumn - 1 >= 0 && this.get(row + 1, coloumn - 1)) {
    //   result.push({ row: row + 1, coloumn: coloumn - 1 });
    // }

    // // Bottom Right
    // if (row + 1 < n && coloumn + 1 < n && this.get(row + 1, coloumn + 1)) {
    //   result.push({ row: row + 1, coloumn: coloumn + 1 });
    // }
    // right
    if (coloumn + 1 < n && this.get(row, coloumn + 1)) {
      result.push({ row: row, coloumn: coloumn + 1 });
    }
    // left
    if (coloumn - 1 >= 0 && this.get(row, coloumn - 1)) {
      result.push({ row: row, coloumn: coloumn - 1 });
    }

    // Top, Up
    if (row - 1 >= 0 && coloumn >= 0 && this.get(row - 1, coloumn)) {
      result.push({ row: row - 1, coloumn: coloumn });
    }
    // Bottom Down
    if (row + 1 < n && this.get(row + 1, coloumn)) {
      result.push({ row: row + 1, coloumn: coloumn });
    }
    return result;
  }

  public set_0(i: number, j: number) {
    this.matrix[i][j].value = 0;
  }
  public map(): any[] {
    return this.matrix;
  }
  public length(): number {
    return this.matrix.length;
  }
}
