import { GraphMatrixRowProps } from "../../types";

export type GraphFormTableProps = {
  edgeMatrix: GraphMatrixRowProps[];
  setIsOpen: (isOpen: boolean) => void;
};
