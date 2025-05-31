"use client";
import {
  AppShellHeader,
  Avatar,
  Box,
  Container,
  Flex,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  rem,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconLogout, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const theme = useMantineTheme();
  return (
    <AppShellHeader>
      <Container size={"xxl"} style={{ backgroundColor: theme.other.navbar.background }}>
        <Flex h="100%" w="100%" align="center" justify="space-between" px="md">
          {/* Left Section */}

          <Link href="/" passHref style={{ textDecoration: "none" }}>
            <Group gap="xs">
              <Image alt="MM" height={50} width={50} src="/logo.png" />
              <Text c={theme.other.navbar.text}>MindMilestones</Text>
            </Group>
          </Link>

          {/* Mid Section */}
          <Group></Group>

          {/* Right Section */}
          <Group gap={rem(16)}>
            <Link href="/about" passHref style={{ textDecoration: "none" }}>
              <Text c={theme.other.navbar.text}>About</Text>
            </Link>
            <Menu>
              <MenuTarget>
                <Box style={{ cursor: "pointer" }}>
                  <Avatar radius="xl" color="blue">
                    A
                  </Avatar>
                </Box>
              </MenuTarget>
              <MenuDropdown w={rem(150)}>
                <MenuItem leftSection={<IconUser />}>Profile</MenuItem>
                <MenuItem leftSection={<IconLogout />} variant="subtle" color="red.6">
                  Logout
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </Group>
        </Flex>
      </Container>
    </AppShellHeader>
  );
}
