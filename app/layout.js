import "./globals.css";

export const metadata = {
  title: "Nusantara Tech | Digital experiences, built better",
  description:
    "Nusantara Tech is a digital agency helping ambitious businesses grow through web development, mobile apps, and thoughtful design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
