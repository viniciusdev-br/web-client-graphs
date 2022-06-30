import { Edge } from "../../../../../shared/models/edge";

export type GraphFormTableProps = {
  edgeMatrix: Edge[];
  setIsOpen: (isOpen: boolean) => void;
};
