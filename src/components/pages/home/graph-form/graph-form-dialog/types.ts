import { Edge } from "../../../../../shared/models/edge";

export type GraphFormDialogProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    onChange: (edge: Edge) => void;
};
