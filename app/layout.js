import "./globals.css";

export const metadata = {
  title: "Wired Up",
  description:
    "Your go-to source for the latest tech news, reviews, and insights on innovations shaping the digital world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
