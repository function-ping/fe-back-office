import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "function ping back office",
  description: "function ping back office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
