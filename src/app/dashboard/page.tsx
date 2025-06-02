"use client";

import useAuth from "@/hooks/useAuth";
import { Center, Loader, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { isLoggedIn, checking } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!checking && !isLoggedIn) {
      notifications.show({
        id: "not_allowed",
        title: "Not Authenticated!",
        color: "red",
        message: "You are not allowed to visit this page.",
      });
      router.push("/login");
    }
  }, [checking, isLoggedIn, router]);

  if (checking)
    return (
      <Center>
        <Loader color="blue" />
      </Center>
    );

  if (!isLoggedIn) return null; // or a loading indicator while redirect happens

  return <Text>Welcome to dashboard</Text>;
}
