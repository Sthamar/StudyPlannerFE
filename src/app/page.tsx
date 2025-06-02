"use client";

import { Button, Stack, Text, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import landingPge from "../assets/landingPage.jpg";

export default function App() {
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <Stack justify="center" align="center" h="100vh" gap="md" px="lg">
      <Image
        src={landingPge}
        alt="Landing Page"
        width={500}
        height={40}
        style={{
          width: "60%",
          height: "auto",
          borderRadius: "1rem",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        }}
      />

      <Text c={theme.other.text.primary} fw={700} fz={32} ta="center" mt="xl">
        Take Charge of Your Learning
      </Text>
      <Text fz="lg" ta="center" maw={600}>
        Set meaningful goals, track your progress, and unlock your full potential with ease.
      </Text>

      <Button mt="md" size="md" radius="xl" color="blue" onClick={() => router.push("/dashboard")}>
        Get Started
      </Button>
    </Stack>
  );
}
