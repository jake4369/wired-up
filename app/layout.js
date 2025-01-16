// Styles
import "./globals.css";

// Fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Components
import Nav from "@/components/nav/Nav";

export const metadata = {
  title: "Wired Up",
  description:
    "Your go-to source for the latest tech news, reviews, and insights on innovations shaping the digital world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
