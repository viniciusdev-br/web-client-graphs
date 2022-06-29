export type GraphFormDialogProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onChange: (edge: { start: string; final: string; weight: number }) => void;
};
