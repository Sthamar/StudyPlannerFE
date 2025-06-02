"use client";

import Logo from "@/assets/logo.png";
import { InputPassword, InputText } from "@/components/form";
import { useSmartForm } from "@/hooks/useSmartForm";
import { setToken } from "@/utils/token";
import { authUserSchema, TAuthUser } from "@/validations/user.validation";
import {
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const theme = useMantineTheme();
  const router = useRouter();
  const { form, handleSubmit, isLoading } = useSmartForm<TAuthUser>({
    url: "/auth/login",
    mode: "create",
    validationSchema: authUserSchema,
    onSuccess: (responseData) => {
      // Assuming responseData has the token:
      const { access_token } = responseData as { access_token: string };
      if (access_token) {
        setToken(access_token);
      }
      notifications.show({
        id: "login",
        title: "Login Success!",
        color: "green",
        message: "Successfully logged in.",
      });
      router.push("/");
    },
    onError: (error: unknown) => {
      let message = "Something went wrong";

      // If error is AxiosError
      if (
        typeof error === "object" &&
        error !== null &&
        "isAxiosError" in error &&
        (error as any).isAxiosError &&
        "response" in error &&
        (error as any).response?.data
      ) {
        message = (error as any).response.data.detail ?? message;
      }
      // If error is plain object with detail (like your backend sends)
      else if (typeof error === "object" && error !== null && "detail" in error) {
        message = (error as any).detail ?? message;
      }

      notifications.show({
        title: "Login Error!",
        color: "red",
        message,
      });
    },
  });

  return (
    <Container
      bg={theme.other.background}
      p={rem(40)}
      w={rem(400)}
      mx="auto"
      h="100vh"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box w="100%">
        <Stack gap={rem(24)} align="center">
          {/* Logo */}
          <Image
            src={Logo}
            alt="App Logo"
            width={64}
            height={64}
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          />

          {/* Heading */}
          <Text c={theme.other.text.primary} fz={theme.headings.sizes.h1.fontSize} fw={600}>
            Login
          </Text>

          {/* Email & Password Inputs */}
          <InputText
            w={"100%"}
            type="email"
            id="email"
            label="Email"
            placeholder="Enter your email"
            form={form}
          />
          <InputPassword
            w={"100%"}
            id="password"
            label="Password"
            placeholder="Enter your password"
            form={form}
          />

          {/* Forgot Password link */}
          <Group justify="end" w="100%" mt={-rem(12)}>
            <Anchor
              href="/login/forgot-page"
              size="sm"
              c={theme.other.text.muted}
              underline="hover"
            >
              Forgot password?
            </Anchor>
          </Group>

          {/* Login Button */}
          <Button
            fullWidth
            radius="md"
            bg={theme.other.button.default.bg}
            c={theme.other.button.default.text}
            styles={{
              root: {
                "&:hover": {
                  backgroundColor: theme.other.button.default.hover,
                },
              },
            }}
            onClick={() => handleSubmit()}
          >
            Login
          </Button>

          <Divider my="md" color={theme.other.border.light} />

          {/* Signup prompt */}
          <Text size="sm" c={theme.other.text.muted}>
            Don’t have an account?{" "}
            <Anchor href="/signup" size="sm" c={theme.other.text.secondary} underline="hover">
              Sign up
            </Anchor>
          </Text>
        </Stack>
      </Box>
    </Container>
  );
}
