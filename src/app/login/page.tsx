"use client";

import { Center, Paper, rem, Stack, Text, useMantineTheme } from "@mantine/core";

const login = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Paper bg={theme.other.background} p={rem(40)} w={rem(400)} mx={"auto"}>
        <Stack>
          <Center>
            <Text c={theme.other.text.primary} fz={theme.headings.sizes.h1.fontSize} fw={500}>
              Login
            </Text>
          </Center>
        </Stack>
      </Paper>
    </>
  );
};

export default login;
