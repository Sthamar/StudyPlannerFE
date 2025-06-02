"use client";
import Logo from "@/assets/logo.png";
import useAuth from "@/hooks/useAuth";
import {
  Anchor,
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
import { notifications } from "@mantine/notifications";
import { IconLogout, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const theme = useMantineTheme();
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
    notifications.show({
      title: "Logged out!",
      color: "green",
      message: "Succcessfully logged out.",
    });
  };

  return (
    <AppShellHeader>
      <Box
        style={{
          backgroundColor: theme.other.navbar.background,
          borderBottom: `2px solid ${theme.other.navbar.border}`,
        }}
      >
        <Container size="xxl">
          <Flex h="100%" w="100%" align="center" justify="space-between" px="md">
            {/* Left Section */}
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Group gap="xs">
                <Image alt="MM" height={50} width={50} src={Logo} />
                <Text c={theme.other.navbar.text} fw={600} fz="xl">
                  MindMilestones
                </Text>
              </Group>
            </Link>

            {/* Mid Section */}
            <Group gap="lg">
              <Link href="/about" passHref>
                <Anchor
                  c={pathname === "/about" ? theme.other.navbar.icon : theme.other.navbar.text}
                  style={{
                    textDecoration: "none",
                    padding: "6px 10px",
                    borderRadius: rem(6),
                    backgroundColor:
                      pathname === "/about" ? theme.other.navbar.activeBackground : "transparent",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = theme.other.navbar.hoverBackground;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      pathname === "/about" ? theme.other.navbar.activeBackground : "transparent";
                  }}
                >
                  About
                </Anchor>
              </Link>
            </Group>

            {/* Right Section */}
            <Group gap={rem(16)}>
              {!isLoggedIn && (
                <Link href="/login" passHref>
                  <Anchor
                    c={theme.other.navbar.text}
                    style={{
                      textDecoration: "none",
                      transition: "color 0.2s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = theme.other.navbar.icon;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = theme.other.navbar.text;
                    }}
                  >
                    Login / Sign in
                  </Anchor>
                </Link>
              )}

              {isLoggedIn && (
                <Menu shadow="md" width={200}>
                  <MenuTarget>
                    <Box style={{ cursor: "pointer" }}>
                      <Avatar radius="xl" color="blue">
                        A
                      </Avatar>
                    </Box>
                  </MenuTarget>
                  <MenuDropdown>
                    <MenuItem leftSection={<IconUser size={16} />}>Profile</MenuItem>
                    <MenuItem
                      leftSection={<IconLogout size={16} />}
                      color="red"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </MenuItem>
                  </MenuDropdown>
                </Menu>
              )}
            </Group>
          </Flex>
        </Container>
      </Box>
    </AppShellHeader>
  );
}
