"use client";

import Logo from "@/assets/logo.png";
import { InputPassword, InputText } from "@/components/form";
import { useSmartForm } from "@/hooks/useSmartForm";
import { createUserSchema, TCreateUser } from "@/validations/user.validation";
import {
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  rem,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const theme = useMantineTheme();
  const router = useRouter();

  const { form, handleSubmit, isLoading, isPending } = useSmartForm<TCreateUser>({
    url: "/users", // Adjust this URL based on your backend
    mode: "create",
    validationSchema: createUserSchema,
    onSuccess: (responseData) => {
      notifications.show({
        title: "Signup Success!",
        color: "green",
        message: "Account created successfully. Redirecting...",
      });
      router.push("/verify-email");
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
        title: "Signup Error!",
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
            Sign Up
          </Text>

          {/* Inputs */}
          <InputText
            w={"100%"}
            id="first_name"
            label="First Name"
            placeholder="Enter your first name"
            form={form}
          />
          <InputText
            w={"100%"}
            id="middle_name"
            label="Middle Name"
            placeholder="Enter your middle name"
            form={form}
          />
          <InputText
            w={"100%"}
            id="last_name"
            label="Last Name"
            placeholder="Enter your last name"
            form={form}
          />
          <InputText
            w={"100%"}
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
          <InputPassword
            w={"100%"}
            id="confirm_password"
            label="Confirm Password"
            placeholder="Enter your password"
            form={form}
          />

          {/* Signup Button */}
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
            loading={isLoading || isPending}
          >
            Create Account
          </Button>

          <Divider my="md" color={theme.other.border.light} />

          {/* Login prompt */}
          <Text size="sm" c={theme.other.text.muted}>
            Already have an account?{" "}
            <Anchor href="/login" size="sm" c={theme.other.text.secondary} underline="hover">
              Login
            </Anchor>
          </Text>
        </Stack>
      </Box>
    </Container>
  );
}
