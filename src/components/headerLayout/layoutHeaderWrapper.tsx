import { AppShell, Container } from "@mantine/core";
import Header from "./header";

export default function LayoutHeaderWrapper() {
  return (
    <Container>
      <AppShell padding="200px">
        <Header />
      </AppShell>
    </Container>
  );
}
