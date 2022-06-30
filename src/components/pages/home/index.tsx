import { Container } from "../../core/container";
import { Layout } from "../../core/layout";
import { GraphForm } from "./graph-form";
import { HomeWrapper } from "./styles";

export function HomePage() {
  return (
    <Layout>
      <Container>
        <HomeWrapper>
          <GraphForm />
        </HomeWrapper>
      </Container>
    </Layout>
  );
}
