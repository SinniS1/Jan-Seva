import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Nav from "./components/Nav";
import { Lang } from "./context/LangToggleContext";

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
      <body className={Font.className}>
        <Lang>
          <Nav />
          {children}
        </Lang>
      </body>
    </html>
  );
}
