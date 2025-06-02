// app/layout.tsx

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
// import "./globals.css";

// import ReactQueryProvider from "@/providers/ReactQueryProvider"; // ← import here
// import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ClientLayout from "@/components/headerLayout/clientLayout";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { theme } from "@/style/theme";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export const metadata = {
  title: "Study Planner",
  description: "Study planner to improve your study goal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications position="top-center" />

          <ReactQueryProvider>
            <ClientLayout>{children}</ClientLayout>
          </ReactQueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
