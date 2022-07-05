import { ReactNode } from "react";
import { Edge } from "../../models/edge";

export type GraphModel = {
  oriented: number;
  weighted: number;
  size: number;
  requirement: number;
  selected_vertex: string;
  selected_vertex2: string;
  edges: Array<Edge>;
};

export type GraphContextProps = {
  edges: Edge[];
  vertexes: string[];
  outputs: string[];
  graphImageBytes: string;
  outputImageBytes: string;
  options: Omit<GraphModel, "edges" | "size" | "weighted">;
  insertEdge(edge: Edge): void;
  removeEdge(edge_id: string): void;
  sendGraph(): Promise<void>;
  changeOptions(options: Omit<GraphModel, "edges" | "size" | "weighted">): void;
};

export type GraphProviderProps = {
  children: ReactNode;
};
