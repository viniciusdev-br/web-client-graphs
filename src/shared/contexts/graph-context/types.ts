import { ReactNode } from "react";
import { Edge } from "../../models/edge";

export type RequisitoProps = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GraphModel = {
  oriented: boolean;
  weighted: boolean;
  size: number;
  requisito: RequisitoProps;
  selected_vertex: string;
  selected_vertex2: string;
  edges: Array<Edge>;
};

export type GraphContextProps = {
  edges: Edge[];
  options: Omit<GraphModel, "edges" | "requisito">;
  insertEdge(edge: Edge): void;
  sendGraph(requisito: RequisitoProps): Promise<void>;
  changeOptions(options: Omit<GraphModel, "edges">): void;
};

export type GraphProviderProps = {
  children: ReactNode;
};
