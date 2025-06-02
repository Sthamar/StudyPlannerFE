"use client";
import { Container, Stack, Text, Title, useMantineTheme } from "@mantine/core";
const About = () => {
  const theme = useMantineTheme();

  return (
    <Container size="sm" py="xl">
      <Stack gap="xl" align="center">
        {/* Optional image */}
        <video
          autoPlay
          muted
          loop
          width="600"
          height="400"
          style={{ borderRadius: "8px", objectFit: "cover" }}
          // Replace with your own video path or URL
          src="/videos/aboutUs.mp4"
        >
          Your browser does not support the video tag.
        </video>

        {/* Main heading */}
        <Title order={1} c={theme.other.text.primary} style={{ textAlign: "center" }}>
          About Us
        </Title>

        {/* Subtitle or tagline */}
        <Text size="lg" c={theme.other.text.secondary} style={{ textAlign: "center" }} fw={500}>
          Empowering learners to unlock their true potential.
        </Text>

        {/* Description paragraphs */}
        <Stack gap="md" maw={600}>
          <Text>
            Our mission is to provide you with the tools and resources you need to take charge of
            your learning journey. Whether you’re setting goals, tracking progress, or exploring new
            skills, we’re here to support you every step of the way.
          </Text>

          <Text>
            With a focus on simplicity and effectiveness, our platform helps you stay motivated and
            organized, so you can achieve your dreams without getting overwhelmed. Join our
            community and start transforming the way you learn today.
          </Text>

          <Text>
            We believe that learning is a lifelong adventure and everyone deserves a personalized
            path to success. That’s why we’re committed to creating an intuitive, user-friendly
            experience tailored just for you.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
