import { useState } from "react";

import { Container } from "../../core/container";
import { Layout } from "../../core/layout";
import { GraphForm } from "./graph-form";
import { HomeWrapper } from "./styles";
import { GraphMatrixRowProps } from "./types";

export function HomePage() {
  const [edgeMatrix, setEdgeMatrix] = useState<GraphMatrixRowProps[]>([]);

  return (
    <Layout>
      <Container>
        <HomeWrapper>
          <GraphForm edgeMatrix={edgeMatrix} />
        </HomeWrapper>
      </Container>
    </Layout>
  );
}
