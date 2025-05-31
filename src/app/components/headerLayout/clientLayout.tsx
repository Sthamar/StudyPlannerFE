"use client";

import { Container, rem, useMantineTheme } from "@mantine/core";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import LayoutHeaderWrapper from "./layoutHeaderWrapper";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideHeader = ["/login", "/signup"].includes(pathname);
  const theme = useMantineTheme();

  return (
    <>
      {!hideHeader && <LayoutHeaderWrapper />}
      <Container size="xl" py={rem(80)} bg={theme.other.background}>
        {children}
      </Container>
    </>
  );
}
