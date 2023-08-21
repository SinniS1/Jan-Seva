import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

const Font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Janasevaa",
  description: "Janasevaa for India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Font.className}>{children}</body>
    </html>
  );
}
