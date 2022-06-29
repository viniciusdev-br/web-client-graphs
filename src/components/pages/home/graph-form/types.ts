import { GraphMatrixRowProps } from "../types";

export type GraphFormProps = {
  edgeMatrix: GraphMatrixRowProps[];
  setEdgeMatrix: (matrix: GraphMatrixRowProps[]) => void;
};
