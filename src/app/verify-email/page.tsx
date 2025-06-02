"use client";

import { Button, Center, Container, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { IconMailCheck } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function EmailVerification() {
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <Container size="xs" pt="xl">
      <Center>
        <IconMailCheck size={48} color={theme.other.success.text} />
      </Center>
      <Stack align="center" gap="md" mt="lg">
        <Title order={2} c={theme.other.text.primary}>
          Verify Your Email
        </Title>
        <Text c={theme.other.text.secondary} ta="center">
          We’ve sent a confirmation link to your email address. Please check your inbox and follow
          the instructions to activate your account.
        </Text>
        <Button
          onClick={() => router.push("/login")}
          styles={{
            root: {
              backgroundColor: theme.other.button.default.bg,
              color: theme.other.button.default.text,
              "&:hover": {
                backgroundColor: theme.other.button.default.hover,
              },
            },
          }}
        >
          Go to Login
        </Button>
      </Stack>
    </Container>
  );
}
