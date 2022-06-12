import { ReactNode } from "react";
import { Header } from "../header";
import { StyledLayout } from "./styles";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
}
