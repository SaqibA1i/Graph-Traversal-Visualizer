import { traversalAlgorithm } from "../../helper files/Traversal";

export let algorithmList: traversalAlgorithm[] = [
  { name: "Breadth First Search" },
  { name: "Depth First Search" },
];

export const returnNames = (): String[] => {
  let result: string[] = [];
  for (let i = 0; i < algorithmList.length; i++) {
    result.push(algorithmList[i].name);
  }
  return result;
};
