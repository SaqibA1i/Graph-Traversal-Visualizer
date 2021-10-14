import React, { useState } from "react";
import { Graph } from "../TS Classes/Graph";

export type graph_t = {
  algorithm: string;
  setAlgorithm: React.Dispatch<React.SetStateAction<string>>;
  message?: string;
  setMessage?: (message: String) => void;
  inProg: Boolean;
  setInProg?: (inProg: boolean) => void;
  start?: () => void;
  graph?: Graph;
  setGraph?: (graph?: Graph) => Promise<void>;
};

export const GraphContext = React.createContext<graph_t>({
  algorithm: "",
  inProg: false,
  setAlgorithm: useState,
});

export const useAlg = () => React.useContext(GraphContext);
