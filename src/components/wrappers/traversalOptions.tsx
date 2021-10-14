import { traversalAlgorithm } from "../../helper files/Traversal";

export let algorithmList: traversalAlgorithm[] = [
  {
    name: "Breadth First Search",
    message: "This is unweighted, and doesn't find the shortest path",
  },
  {
    name: "Depth First Search",
    message: "This is unweighted, and doesn't find the shortest path",
  },
];

export const returnNames = (): string[] => {
  let result: string[] = [];
  for (let i = 0; i < algorithmList.length; i++) {
    result.push(algorithmList[i].name);
  }
  return result;
};
